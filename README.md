# 📘 _RuralLite Learning Platform_

### Offline-First Educational Web App for Low-Bandwidth Rural Schools

Built with _Next.js, **AWS/Azure Cloud Services, and **Progressive Web App (PWA)_ technologies.

---

## 📌 _Overview_

RuralLite is a _lightweight, offline-first learning platform_ designed for rural or low-connectivity schools.

The application allows students to _access lessons, quizzes, and multimedia resources fully offline_, using a PWA architecture with smart caching, local storage, and background synchronization. Cloud services (AWS or Azure) are used only for authentication, content publishing, and occasional data sync.

---

## 🎯 _Key Features_

- _Offline-first PWA_ (works without internet)
- _Local caching of lessons, quizzes, notes, and media_
- _Lightweight content bundles_ optimized for weak networks
- _Background sync_ for student progress & new content
- _Teacher-friendly CMS_ (cloud-hosted)
- _Low-end device compatible_
- _Secure user authentication_ (Cognito / Azure AD B2C)

---

## 🏗 _System Architecture_

┌──────────────────────────┐
│ Next.js PWA Frontend │
│ (Service Worker, SWR) │
│ │
│ • IndexedDB (offline) │
│ • LocalForage caching │
│ • Background Sync │
└──────────────┬───────────┘
│ occasional sync
┌──────────────▼─────────────┐
│ Cloud Backend (API) │
│ AWS Lambda / Azure Func. │
│ │
│ • Content APIs │
│ • Sync endpoints │
│ • Authentication │
└──────────────┬─────────────┘
│
┌──────────────▼─────────────┐
│ Content Storage + CDN │
│ S3/Blob + CloudFront/CDN │
│ │
│ • Lesson bundles │
│ • Multimedia assets │
└─────────────────────────────┘

---

## 🧰 _Tech Stack_

Frontend :NextJS
Backend: NextJS
Database: MongoDB
Deployement: AWS

---

## 🔄 _Offline Sync Logic_

### _When offline:_

- Lessons load from _indexedDB_
- Quiz results stored locally
- Notes saved to local database

### _When reconnected:_

- Syncs quiz results → cloud
- Downloads new lessons → cache
- Updates service worker assets

---

## 🤝 Contributing

PRs are welcome!
Please open an issue to discuss major changes before submitting a pull request.

---

## 📜 License

MIT License © 2024–2025 RuralLite Project
