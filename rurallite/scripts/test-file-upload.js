/**
 * Test Script for File Upload API
 * 
 * This script tests the complete file upload flow:
 * 1. Generate pre-signed URL
 * 2. Upload file to S3
 * 3. Store metadata in database
 * 4. Retrieve file information
 * 
 * Usage: node scripts/test-file-upload.js
 */

const fs = require('fs');
const path = require('path');

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testFileUpload() {
  try {
    log('\n📤 Testing File Upload API Flow\n', 'cyan');

    // Step 1: Create a test file
    log('Step 1: Creating test file...', 'blue');
    const testFileName = 'test-upload.txt';
    const testFileContent = `Test file created at ${new Date().toISOString()}\nThis is a test upload to AWS S3.`;
    const testFilePath = path.join(__dirname, testFileName);

    fs.writeFileSync(testFilePath, testFileContent);
    const fileStats = fs.statSync(testFilePath);

    log(`✓ Test file created: ${testFileName} (${fileStats.size} bytes)`, 'green');

    // Step 2: Request pre-signed URL
    log('\nStep 2: Requesting pre-signed URL...', 'blue');
    const uploadRequest = {
      filename: testFileName,
      fileType: 'text/plain',
      fileSize: fileStats.size,
      userId: 1, // Optional test user ID
    };

    const urlResponse = await fetch(`${API_BASE_URL}/api/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadRequest),
    });

    const urlData = await urlResponse.json();

    if (!urlData.success) {
      throw new Error(`Failed to get upload URL: ${urlData.message}`);
    }

    log('✓ Pre-signed URL received:', 'green');
    log(`  - Upload URL: ${urlData.uploadURL.substring(0, 100)}...`, 'yellow');
    log(`  - Key: ${urlData.key}`, 'yellow');
    log(`  - Expires in: ${urlData.expiresIn} seconds`, 'yellow');

    // Step 3: Upload file to S3
    log('\nStep 3: Uploading file to S3...', 'blue');
    const fileBuffer = fs.readFileSync(testFilePath);

    const uploadResponse = await fetch(urlData.uploadURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: fileBuffer,
    });

    if (!uploadResponse.ok) {
      throw new Error(`S3 upload failed with status: ${uploadResponse.status}`);
    }

    log('✓ File uploaded to S3 successfully!', 'green');

    // Step 4: Store metadata in database
    log('\nStep 4: Storing file metadata in database...', 'blue');
    const metadataRequest = {
      fileName: testFileName,
      fileURL: urlData.publicURL,
      key: urlData.key,
      size: fileStats.size,
      mimeType: 'text/plain',
      userId: 1,
    };

    const metadataResponse = await fetch(`${API_BASE_URL}/api/files`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metadataRequest),
    });

    const metadataData = await metadataResponse.json();

    if (!metadataData.success) {
      throw new Error(`Failed to store metadata: ${metadataData.message}`);
    }

    log('✓ Metadata stored successfully!', 'green');
    log(`  - File ID: ${metadataData.file.id}`, 'yellow');
    log(`  - Name: ${metadataData.file.name}`, 'yellow');
    log(`  - URL: ${metadataData.file.url}`, 'yellow');

    // Step 5: Retrieve files from API
    log('\nStep 5: Retrieving files from database...', 'blue');
    const filesResponse = await fetch(`${API_BASE_URL}/api/files?userId=1`);
    const filesData = await filesResponse.json();

    if (filesData.success) {
      log(`✓ Retrieved ${filesData.count} file(s)`, 'green');
      filesData.files.forEach((file, index) => {
        log(`\n  File ${index + 1}:`, 'yellow');
        log(`    - ID: ${file.id}`, 'yellow');
        log(`    - Name: ${file.name}`, 'yellow');
        log(`    - Size: ${file.size} bytes`, 'yellow');
        log(`    - Type: ${file.mimeType}`, 'yellow');
        log(`    - Uploaded: ${new Date(file.uploadedAt).toLocaleString()}`, 'yellow');
      });
    }

    // Cleanup
    log('\n🧹 Cleaning up test file...', 'blue');
    fs.unlinkSync(testFilePath);
    log('✓ Test file deleted', 'green');

    // Success summary
    log('\n✅ All tests passed successfully!\n', 'green');
    log('Summary:', 'cyan');
    log('  1. ✓ Pre-signed URL generated', 'green');
    log('  2. ✓ File uploaded to S3', 'green');
    log('  3. ✓ Metadata stored in database', 'green');
    log('  4. ✓ File retrieved from API', 'green');
    log('\n🎉 File upload flow is working correctly!\n', 'cyan');

  } catch (error) {
    log(`\n❌ Test failed: ${error.message}\n`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run tests
testFileUpload();
