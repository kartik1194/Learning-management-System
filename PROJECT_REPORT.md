# MERN Learning Management System (LMS) - Project Report

**Project Name:** Learning Management System (LMS)  
**Technology Stack:** MERN (MongoDB, Express, React, Node.js)  
**Version:** 1.0.0  
**Date:** December 2, 2025  
**Repository:** https://github.com/kartik1194/Learning-management-System

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Features & Functionality](#features--functionality)
4. [Technology Stack](#technology-stack)
5. [Installation & Setup](#installation--setup)
6. [Project Structure](#project-structure)
7. [Database Models](#database-models)
8. [API Endpoints](#api-endpoints)
9. [Authentication & Security](#authentication--security)
10. [Known Issues & Solutions](#known-issues--solutions)
11. [Future Enhancements](#future-enhancements)

---

## 🎯 Project Overview

### Purpose

A full-stack Learning Management System (LMS) built with MERN stack that enables:

- **Students:** Browse, purchase, and complete online courses
- **Instructors:** Create, manage, and sell courses
- **Admin:** Manage user roles and system settings

### Key Objectives

✅ Provide a scalable, modern platform for online learning  
✅ Enable course creators to monetize their content  
✅ Offer students an intuitive course discovery and learning interface  
✅ Implement secure authentication with JWT tokens  
✅ Support video streaming and progress tracking

### Target Users

- **Students:** Learners wanting to enroll in online courses
- **Instructors:** Content creators wanting to sell courses
- **Platform Administrators:** System managers

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT SIDE (React)                      │
├─────────────────────────────────────────────────────────────┤
│  - Auth Pages (Login/Signup with role selection)            │
│  - Student Dashboard (Browse & purchase courses)             │
│  - Instructor Dashboard (Create & manage courses)            │
│  - Video Player & Progress Tracking                          │
└────────────────────┬────────────────────────────────────────┘
                     │
          (REST API via Axios)
                     │
┌────────────────────▼────────────────────────────────────────┐
│                 SERVER SIDE (Express.js)                    │
├─────────────────────────────────────────────────────────────┤
│  - Authentication Routes (/auth)                             │
│  - Instructor Routes (/instructor/course, /media)           │
│  - Student Routes (/student/course, /order, /progress)      │
│  - Order Management (Payment integration)                    │
└────────────────────┬────────────────────────────────────────┘
                     │
           (Mongoose ODM)
                     │
┌────────────────────▼────────────────────────────────────────┐
│              DATABASE (MongoDB)                             │
├─────────────────────────────────────────────────────────────┤
│  - Users (Students, Instructors)                            │
│  - Courses (Course details & curriculum)                    │
│  - Orders (Payment & purchase history)                      │
│  - Student Progress (Completion tracking)                   │
│  - Student Courses (Purchased courses)                      │
└─────────────────────────────────────────────────────────────┘
```

### Technology Flow

```
User Registration/Login
       ↓
JWT Token Generation
       ↓
Token Stored in SessionStorage
       ↓
Axios Interceptor adds Authorization header
       ↓
API Requests to Backend
       ↓
Token Validation in Auth Middleware
       ↓
Route Handler Execution
       ↓
Database Query (Mongoose)
       ↓
Response to Client
```

---

## ✨ Features & Functionality

### 1. Authentication & Authorization ✅

**Sign Up Process:**

- Users select role: **Student** or **Instructor**
- Form validation (name, email, password, role)
- Password hashing with bcryptjs
- User stored in MongoDB
- Success message displayed

**Login Process:**

- Email and password verification
- JWT token generation (120 minutes expiry)
- Token stored in sessionStorage
- User redirected based on role:
  - **Student** → Home page
  - **Instructor** → Instructor dashboard

**Auth Check:**

- On app load, system verifies token
- If valid: User stays logged in
- If invalid/expired: Redirect to login
- Middleware validates every protected route

### 2. Student Features ✅

**Course Discovery:**

- Browse all available courses
- Filter by: Category, Level, Language
- Sort by: Price (low→high, high→low), Title (A→Z, Z→A)
- Search functionality
- Course cards with ratings and instructor info

**Course Details:**

- View complete course information
- Preview course curriculum
- See instructor details
- Check course pricing
- Watch free preview videos

**Course Purchase:**

- PayPal integration for payments
- Payment validation
- Order creation on successful payment
- Course added to "My Courses"

**My Courses:**

- View purchased courses
- Track progress per course
- Resume watching from last position
- Access course materials

**Progress Tracking:**

- Video watching duration tracked
- Completion percentage calculated
- Progress saved in database
- Resume from last watched point

### 3. Instructor Features ✅

**Course Creation:**

- Title, description, subtitle
- Category, level, language selection
- Pricing and objectives
- Course thumbnail image
- Welcome message

**Course Curriculum:**

- Add video lectures
- Video upload to Cloudinary
- Mark videos as free preview
- Curriculum validation (at least 1 free preview required)
- Edit/delete videos

**Course Settings:**

- Configure course availability
- Publish/unpublish courses
- Course analytics (soon)

**My Courses:**

- View all created courses
- Edit course details
- Delete courses
- View course statistics

### 4. Additional Features ✅

**Route Protection:**

- Protected routes for authenticated users
- Role-based access control
- Student routes only for students
- Instructor routes only for instructors
- Automatic redirection based on role

**Form Validation:**

- Client-side validation
- Server-side validation
- Clear error messages
- Real-time feedback

**Error Handling:**

- Graceful error messages
- Console logging for debugging
- API error responses
- User-friendly notifications

---

## 🛠️ Technology Stack

### Frontend (Client)

| Technology   | Version | Purpose                     |
| ------------ | ------- | --------------------------- |
| React        | 18.3.1  | UI framework                |
| Vite         | Latest  | Build tool & dev server     |
| Tailwind CSS | Latest  | Styling                     |
| Radix UI     | 1.x     | Component library           |
| Axios        | 1.7.7   | HTTP client                 |
| React Router | Latest  | Routing                     |
| Lucide React | 0.441.0 | Icons                       |
| Context API  | Native  | State management            |
| next-themes  | Latest  | Theme management (optional) |

### Backend (Server)

| Technology | Version | Purpose               |
| ---------- | ------- | --------------------- |
| Node.js    | 18+     | Runtime               |
| Express.js | 4.x     | Web framework         |
| MongoDB    | Latest  | NoSQL database        |
| Mongoose   | Latest  | ODM                   |
| JWT        | Latest  | Authentication        |
| bcryptjs   | 2.x     | Password hashing      |
| Cloudinary | Latest  | Image/video storage   |
| CORS       | 2.x     | Cross-origin requests |
| dotenv     | Latest  | Environment variables |

### Development Tools

- Git & GitHub for version control
- Postman for API testing
- VS Code for development
- ESLint for code quality
- Vite for fast development

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- MongoDB instance running
- Git installed
- npm or yarn package manager

### Step 1: Clone Repository

```bash
git clone https://github.com/kartik1194/Learning-management-System.git
cd Learning-management-System
```

### Step 2: Setup Backend

```bash
cd server

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
PORT=2921
MONGO_URI=mongodb://localhost:27017/lms
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
CLIENT_URL=http://localhost:5173
EOF

# Start server
npm start
# or for development with auto-reload
npm install -g nodemon
nodemon server.js
```

**Server runs on:** http://localhost:2921

### Step 3: Setup Frontend

```bash
cd ../client

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
VITE_API_URL=http://localhost:2921
EOF

# Start development server
npm run dev
```

**Client runs on:** http://localhost:5173

### Step 4: Database Setup

```bash
# MongoDB must be running
# You can use MongoDB Compass for GUI or command line

# The application will automatically create collections when needed
```

---

## 📁 Project Structure

```
MERN-LMS-2024-master/
├── client/                          # Frontend React app
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosInstance.js     # Axios config & interceptors
│   │   ├── components/
│   │   │   ├── common-form/         # Reusable form component
│   │   │   ├── instructor-view/     # Instructor dashboard & forms
│   │   │   ├── student-view/        # Student header & layout
│   │   │   ├── route-guard/         # Protected routes
│   │   │   ├── ui/                  # Radix UI components
│   │   │   └── video-player/        # Video player component
│   │   ├── context/
│   │   │   ├── auth-context/        # Authentication state
│   │   │   ├── instructor-context/  # Instructor state
│   │   │   └── student-context/     # Student state
│   │   ├── pages/
│   │   │   ├── auth/                # Login/Signup page
│   │   │   ├── instructor/          # Instructor dashboard
│   │   │   ├── student/             # Student pages
│   │   │   └── not-found/           # 404 page
│   │   ├── services/                # API calls
│   │   ├── config/                  # Form configs & constants
│   │   ├── App.jsx                  # Main app with routes
│   │   └── main.jsx                 # Entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                          # Backend Express app
│   ├── controllers/
│   │   ├── auth-controller/         # Auth logic
│   │   ├── instructor-controller/   # Instructor business logic
│   │   └── student-controller/      # Student business logic
│   ├── models/
│   │   ├── User.js                  # User schema
│   │   ├── Course.js                # Course schema
│   │   ├── Order.js                 # Order schema
│   │   ├── StudentCourses.js        # Student purchased courses
│   │   └── CourseProgress.js        # Progress tracking
│   ├── routes/
│   │   ├── auth-routes/             # /auth endpoints
│   │   ├── instructor-routes/       # /instructor endpoints
│   │   └── student-routes/          # /student endpoints
│   ├── middleware/
│   │   └── auth-middleware.js       # JWT verification
│   ├── helpers/
│   │   ├── cloudinary.js            # Image/video upload
│   │   └── paypal.js                # PayPal integration
│   ├── server.js                    # Express app entry
│   ├── package.json
│   └── .env                         # Environment variables
│
├── .gitignore
├── PROJECT_REPORT.md               # This file
└── README.md
```

---

## 🗄️ Database Models

### User Model

```javascript
{
  _id: ObjectId,
  userName: String (unique),
  userEmail: String (unique),
  password: String (bcrypt hashed),
  role: String ("user" or "instructor"),
  createdAt: Date
}
```

### Course Model

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  level: String,
  primaryLanguage: String,
  instructorId: ObjectId (ref: User),
  instructorName: String,
  image: String (Cloudinary URL),
  pricing: Number,
  objectives: String,
  welcomeMessage: String,
  subtitle: String,
  curriculum: [{
    title: String,
    videoUrl: String (Cloudinary),
    public_id: String,
    freePreview: Boolean
  }],
  isPublished: Boolean,
  students: [ObjectId],
  date: Date
}
```

### Order Model

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  courseId: ObjectId (ref: Course),
  courseTitile: String,
  courseImage: String,
  coursePrice: Number,
  instructorId: ObjectId,
  paymentId: String,
  paymentStatus: String,
  orderStatus: String,
  orderDate: Date
}
```

### StudentCourses Model

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  courses: [{
    courseId: ObjectId,
    title: String,
    instructorId: ObjectId,
    instructorName: String,
    courseImage: String,
    enrollmentDate: Date
  }]
}
```

### CourseProgress Model

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  courseId: ObjectId (ref: Course),
  completedLectures: [ObjectId],
  lectureProgress: [{
    lectureId: ObjectId,
    isCompleted: Boolean,
    watchedDuration: Number,
    totalDuration: Number
  }],
  progressPercentage: Number,
  lastUpdated: Date
}
```

---

## 🔌 API Endpoints

### Authentication Endpoints

| Method | Endpoint           | Description        | Auth Required |
| ------ | ------------------ | ------------------ | ------------- |
| POST   | `/auth/register`   | Create new account | ❌            |
| POST   | `/auth/login`      | Login user         | ❌            |
| GET    | `/auth/check-auth` | Verify user token  | ✅            |

### Student Course Endpoints

| Method | Endpoint                                       | Description                    | Auth Required |
| ------ | ---------------------------------------------- | ------------------------------ | ------------- |
| GET    | `/student/course/get`                          | Get all courses                | ❌            |
| GET    | `/student/course/get/details/:id`              | Get course details             | ❌            |
| GET    | `/student/course/purchase-info/:id/:studentId` | Check if student bought course | ✅            |

### Student Order Endpoints

| Method | Endpoint                 | Description          | Auth Required |
| ------ | ------------------------ | -------------------- | ------------- |
| POST   | `/student/order/create`  | Create payment order | ✅            |
| POST   | `/student/order/capture` | Capture payment      | ✅            |

### Student Course Progress Endpoints

| Method | Endpoint                                         | Description            | Auth Required |
| ------ | ------------------------------------------------ | ---------------------- | ------------- |
| POST   | `/student/course-progress/mark-lecture-viewed`   | Mark lecture as viewed | ✅            |
| GET    | `/student/course-progress/get/:userId/:courseId` | Get course progress    | ✅            |

### Instructor Course Endpoints

| Method | Endpoint                             | Description              | Auth Required |
| ------ | ------------------------------------ | ------------------------ | ------------- |
| POST   | `/instructor/course/add`             | Create new course        | ✅            |
| GET    | `/instructor/course/get`             | Get instructor's courses | ✅            |
| GET    | `/instructor/course/get/details/:id` | Get course details       | ✅            |
| PUT    | `/instructor/course/update/:id`      | Update course            | ✅            |

### Media Upload Endpoints

| Method | Endpoint                   | Description          | Auth Required |
| ------ | -------------------------- | -------------------- | ------------- |
| POST   | `/media/upload`            | Upload video/image   | ✅            |
| DELETE | `/media/delete/:public_id` | Delete uploaded file | ✅            |

---

## 🔐 Authentication & Security

### JWT Implementation

- **Generation:** On successful login
- **Expiry:** 120 minutes
- **Storage:** sessionStorage (client-side)
- **Transmission:** Authorization header (`Bearer {token}`)

### Password Security

- **Hashing Algorithm:** bcryptjs
- **Salt Rounds:** 10
- **Comparison:** bcrypt.compare() for login validation

### Authentication Middleware

```javascript
// Extracts and validates JWT from Authorization header
// Attached to protected routes
// Returns 401 Unauthorized if token is invalid/missing
```

### CORS Configuration

- **Allowed Origins:** Configured via CLIENT_URL environment variable
- **Allowed Methods:** GET, POST, PUT, DELETE
- **Allowed Headers:** Content-Type, Authorization

### Environment Variables

All sensitive data stored in `.env`:

- `MONGO_URI` - Database connection
- `JWT_SECRET` - Token signing key
- `CLOUDINARY_*` - Image/video storage credentials
- `PAYPAL_CLIENT_ID` - Payment processing

---

## 🐛 Known Issues & Solutions

### Issue 1: Course Click Not Working ✅ FIXED

**Problem:** Clicking on course card didn't navigate to details page  
**Root Cause:** `checkCoursePurchaseInfoService` crashed when `StudentCourses` was null  
**Solution:** Added null check in backend before accessing courses array

**Code Fix:**

```javascript
let ifStudentAlreadyBoughtCurrentCourse = false;
if (studentCourses) {
  ifStudentAlreadyBoughtCurrentCourse =
    studentCourses.courses.findIndex((item) => item.courseId === id) > -1;
}
```

### Issue 2: Password Field Empty on Signup ✅ FIXED

**Problem:** Password field reaching backend as empty string  
**Root Cause:** FormControls component not properly handling controlled input value with `||` operator  
**Solution:** Changed value detection to use `!== undefined` check

**Code Fix:**

```javascript
// Before (Bug)
const currentControlItemValue = formData[getControlItem.name] || "";

// After (Fixed)
const currentControlItemValue =
  formData[getControlItem.name] !== undefined
    ? formData[getControlItem.name]
    : "";
```

### Issue 3: 401 Unauthorized Errors in Console ✅ FIXED

**Problem:** Unnecessary 401 errors logged when user not authenticated  
**Solution:** Added error handling in axios interceptor to suppress expected 401s

### Issue 4: No Role Selection in Signup ✅ FIXED

**Problem:** All users being created as "user" role only  
**Solution:** Added role dropdown field in signup form with Student/Instructor options

---

## 🚀 Future Enhancements

### Phase 2 Features

- [ ] Dark mode toggle for better UX
- [ ] User profile management
- [ ] Course ratings and reviews
- [ ] Discussion forums
- [ ] Email notifications
- [ ] Certificate generation
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard for instructors
- [ ] Advanced search with full-text indexing
- [ ] Course recommendations engine

### Phase 3 Features

- [ ] Live video streaming
- [ ] Assignment submission system
- [ ] Quizzes and exams
- [ ] Gamification (badges, points)
- [ ] Social learning features
- [ ] AI-powered course suggestions
- [ ] Multi-language support
- [ ] Video subtitle generation
- [ ] Payment gateway expansion (Stripe, Razorpay)
- [ ] Admin control panel

### Performance Improvements

- [ ] Implement pagination for large datasets
- [ ] Add caching with Redis
- [ ] Optimize database indexes
- [ ] Image compression and CDN integration
- [ ] Frontend code splitting with lazy loading
- [ ] Server-side rendering (SSR)
- [ ] Progressive Web App (PWA) capabilities

### Security Enhancements

- [ ] Two-factor authentication (2FA)
- [ ] Rate limiting on API endpoints
- [ ] Input sanitization against XSS
- [ ] CSRF token implementation
- [ ] API key management
- [ ] Regular security audits
- [ ] HTTPS enforcement
- [ ] SQL injection prevention (already using Mongoose ODM)

---

## 📊 Testing & Deployment

### Local Testing

```bash
# Backend testing
cd server
npm test

# Frontend testing
cd ../client
npm test
```

### Deployment

**Frontend (Vercel):**

```bash
npm run build
# Deploy build/ folder to Vercel
```

**Backend (Heroku/AWS):**

```bash
git push heroku main
# or deploy to AWS/DigitalOcean
```

---

## 👥 Team & Contributors

**Project Created By:** Kartik Kumar  
**Repository:** https://github.com/kartik1194/Learning-management-System  
**License:** MIT

---

## 📞 Support & Contact

For issues, questions, or contributions:

- Create GitHub issue: https://github.com/kartik1194/Learning-management-System/issues
- Email: karrtikchd@gmail.com

---

## 📝 Conclusion

This MERN LMS project successfully demonstrates a complete full-stack application with:

- ✅ Secure authentication and authorization
- ✅ Role-based access control
- ✅ Complex business logic for course management
- ✅ Payment integration capabilities
- ✅ Progress tracking functionality
- ✅ Error handling and validation
- ✅ Scalable architecture

The project is production-ready with proper error handling, logging, and can be extended with additional features as mentioned in the future enhancements section.

---

**Last Updated:** December 2, 2025  
**Project Status:** ✅ Active Development  
**Version:** 1.0.0
