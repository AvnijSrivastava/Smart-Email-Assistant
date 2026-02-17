# Email Writer Frontend

Quick React + Vite frontend for the Email Writer backend.

Steps:

1. cd frontend
2. npm install
3. npm run dev

By default the frontend expects the backend API at the same origin: POST `/api/email/generate` with JSON `{ "tone": "...", "emailContent": "..." }`.

Run the Spring Boot backend (typically on port 8080) and open the dev server. Use a proxy or CORS if you serve frontend separately.
