ZWIGATO - Full stack sample project
Structure:
- backend/  (Node + Express + MySQL)
- frontend/ (React)

Quick start:
1. Backend:
   - create a MySQL database using backend/schema.sql (run it in your MySQL)
   - copy backend/.env.example to backend/.env and fill values
   - cd backend
   - npm install
   - npm start

   Optionally POST /api/items/seed to create sample items.

2. Frontend:
   - cd frontend
   - npm install
   - copy frontend/.env.example to frontend/.env and set REACT_APP_API_URL to http://localhost:5000/api
   - npm start

Notes:
- This project uses JWT for auth. Passwords are hashed with bcrypt.
- Payment is mocked: checkout creates an order and clears cart.
