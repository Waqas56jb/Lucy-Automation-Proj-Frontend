# Lucy Automation Project - Frontend

A modern React application with authentication, built with Tailwind CSS, React Toastify, and React Icons.

## Features

- 🔐 User Authentication (Login, Signup, Reset Password)
- 🎨 Beautiful blue and white themed UI
- 🍪 Intelligent session management with cookies
- 🔔 Toast notifications for success/error messages
- 🛡️ Protected routes
- 📱 Responsive design

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **js-cookie** - Cookie management

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Login.jsx          # Login page
│   ├── Signup.jsx         # Signup page
│   ├── ResetPassword.jsx  # Reset password page
│   ├── Home.jsx           # Home page (protected)
│   └── ProtectedRoute.jsx # Route protection component
├── context/
│   └── AuthContext.jsx    # Authentication context
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Session Management

The application uses cookies to manage user sessions:
- Sessions are stored in cookies with 7-day expiration
- Each user has their own isolated session
- Sessions are automatically checked on app load
- Secure cookie settings (secure, sameSite: 'strict')

## Default Routes

- `/` - Redirects to `/login`
- `/login` - Login page
- `/signup` - Signup page
- `/reset-password` - Reset password page
- `/home` - Home page (protected, requires authentication)

## API Integration

The application is integrated with the deployed Vercel backend API:
- **Base URL:** `https://backend-two-mu-11.vercel.app/api`
- **Endpoints:**
  - `POST /api/signup` - User registration
  - `POST /api/login` - User authentication
  - `POST /api/reset-password` - Password reset

All API calls are configured in `src/context/AuthContext.jsx`.

## Form Fields

### Signup Form
- **Username** (required, max 100 chars)
- **Email** (required, unique, max 255 chars)
- **Phone Number** (optional, max 20 chars)
- **Country** (optional, max 100 chars)
- **Password** (required, min 6 chars)
- **Confirm Password** (required, must match password)

### Login Form
- **Email** (required)
- **Password** (required)

### Reset Password Form
- **Email** (required)
- **New Password** (required, min 6 chars)
- **Confirm Password** (required, must match new password)

## Notes

- All API endpoints are integrated and working with the production backend
- Session management uses secure cookies with 7-day expiration
- Each user has their own isolated session
- Toast notifications provide user feedback for all actions
- Form validation is handled both client-side and server-side
