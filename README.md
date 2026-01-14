# user-service-frontend
Frontend application responsible for user authentication using Firebase Authentication. This app handles signup, login, email verification, and securely communicates with the backend user service using Firebase ID tokens.

Frontend application responsible for user authentication using Firebase Authentication.
This app handles signup, login, email verification, and securely communicates with
the backend user service using Firebase ID tokens.

## Responsibilities

- User signup using email and password
- Sending email verification via Firebase
- User login and session handling
- Fetching Firebase ID tokens
- Calling backend APIs with verified tokens

## What this app does NOT do

- Does not store passwords
- Does not implement custom authentication
- Does not verify tokens itself
- Does not manage user authorization rules

## Architecture Overview

- Firebase Authentication is used as the Identity Provider
- Users authenticate directly with Firebase
- Firebase issues an ID token (JWT)
- The ID token is sent to the backend user service
- Backend verifies the token and enforces authorization

## Tech Stack

- React
- Firebase Authentication
- JavaScript (or TypeScript)
- Fetch API

## Firebase Setup

1. Create a Firebase project
2. Enable Email/Password authentication
3. Configure OAuth providers if needed (Google, Apple, etc.)
4. Add Firebase config values to the app

## Environment Variables

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=

REACT_APP_BACKEND_URL=http://localhost:8000

## Local Development

1. Clone the repository
2. Create `.env` from `.env.example`
3. Install dependencies:

npm install

4. Start the app:

npm start

## Authentication Flow

1. User signs up using Firebase Auth
2. Verification email is sent by Firebase
3. User logs in
4. Firebase issues an ID token
5. ID token is sent to backend in Authorization header
6. Backend verifies token and email status

## Security Notes

- Passwords are never handled by the frontend code
- Firebase manages credential storage and hashing
- ID tokens are short-lived and refreshed automatically
- Backend enforces email verification and user status
