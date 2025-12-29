import prisma from "../../../lib/prisma";
import { sendSuccess, sendError } from "../../../lib/responseHandler";
import { ERROR_CODES } from "../../../lib/errorCodes";

import { sanitizeInput } from "../../../lib/utils/sanitize";

export async function GET() {
  try {
    const notes = await prisma.note.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return sendSuccess(notes, "Notes fetched successfully", 200, { count: notes.length });
  } catch (error) {
    return sendError("Failed to fetch notes", ERROR_CODES.INTERNAL_ERROR, 500, error?.message ?? error);
  }
}


// POST handler to create a note with input sanitization
export async function POST(req) {
  try {
    const body = await req.json();
    const { content, userId } = body;
    if (!content || !userId) {
      return sendError("Missing content or userId", ERROR_CODES.BAD_REQUEST, 400);
    }
    // Sanitize input to prevent XSS/SQLi
    const cleanContent = sanitizeInput(content);
    const note = await prisma.note.create({
      data: {
        content: cleanContent,
        userId,
      },
    });
    return sendSuccess(note, "Note created safely!", 201);
  } catch (error) {
    return sendError("Failed to create note", ERROR_CODES.INTERNAL_ERROR, 500, error?.message ?? error);
  }
}
