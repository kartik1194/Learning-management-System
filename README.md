# MERN Learning Management System (LMS)

A full-stack online learning platform built with **MongoDB, Express, React, and Node.js**.

Students can discover and purchase courses. Instructors can create and sell courses. Features include video streaming, progress tracking, and secure payment processing.

## 🌟 Key Features

### For Students

- 🔍 Browse and search courses with filters
- 💳 Purchase courses securely via PayPal
- ▶️ Watch course videos with progress tracking
- 📊 View learning progress and analytics
- ⭐ Rate and review courses

### For Instructors

- ✏️ Create and manage courses
- 🎥 Upload video lectures
- 💰 Set course pricing
- 📈 View course analytics and sales
- 🎓 Manage student enrollments

### General

- 🔐 Secure JWT-based authentication
- 👥 Role-based access control (Student/Instructor)
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🛡️ Protected API endpoints

## 🛠️ Technology Stack

### Frontend

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Axios** - HTTP client
- **React Router** - Routing

### Backend

- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image/video storage
- **PayPal SDK** - Payment processing

## 📋 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB
- Git

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/kartik1194/Learning-management-System.git
cd Learning-management-System
```

2. **Setup Backend:**

```bash
cd server
npm install

# Create .env file
cat > .env << EOF
PORT=2921
MONGO_URI=mongodb://localhost:27017/lms
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
PAYPAL_CLIENT_ID=your_paypal_id
CLIENT_URL=http://localhost:5173
EOF

npm start
```

3. **Setup Frontend:**

```bash
cd ../client
npm install

cat > .env << EOF
VITE_API_URL=http://localhost:2921
EOF

npm run dev
```

4. **Access the application:**

- Frontend: http://localhost:5173
- Backend: http://localhost:2921

## 📚 User Roles

### Student

- Signup/Login
- Browse courses with filters and search
- Purchase courses
- Watch videos and track progress
- View purchased courses

### Instructor

- Signup/Login (select Instructor role)
- Create new courses
- Upload video lectures
- Set course pricing and details
- View course management dashboard

## 🔐 Authentication

### Sign Up

1. Enter name, email, password
2. **Select role: Student or Instructor**
3. Create account
4. Auto-login after successful signup

### Login

1. Enter email and password
2. Receive JWT token (valid for 120 minutes)
3. Token stored in sessionStorage
4. Automatic redirect based on role

## 🎯 API Endpoints

### Authentication

```
POST /auth/register        - Create account
POST /auth/login           - Login
GET  /auth/check-auth      - Verify token (protected)
```

### Student Courses

```
GET  /student/course/get                    - All courses
GET  /student/course/get/details/:id        - Course details
GET  /student/course/purchase-info/:id/:userId - Check purchase
```

### Orders

```
POST /student/order/create                  - Create payment (protected)
POST /student/order/capture                 - Capture payment (protected)
```

### Instructor Courses

```
POST /instructor/course/add                 - Create course (protected)
GET  /instructor/course/get                 - Get my courses (protected)
GET  /instructor/course/get/details/:id     - Course details (protected)
PUT  /instructor/course/update/:id          - Update course (protected)
```

### Media

```
POST   /media/upload                        - Upload video (protected)
DELETE /media/delete/:public_id             - Delete video (protected)
```

## 📁 Project Structure

```
client/                    # React frontend
├── src/
│   ├── pages/             # Page components
│   ├── components/        # Reusable components
│   ├── context/           # State management
│   ├── services/          # API calls
│   └── config/            # Constants
│
server/                    # Express backend
├── controllers/           # Business logic
├── models/                # Database schemas
├── routes/                # API routes
├── middleware/            # Auth middleware
└── helpers/               # Utilities
```

## 🐛 Common Issues & Solutions

### Issue: Course card not clickable

**Solution:** Fixed null check in `checkCoursePurchaseInfoService`

### Issue: Password field empty on signup

**Solution:** Updated FormControls to properly handle controlled inputs

### Issue: Role not being saved

**Solution:** Added role dropdown in signup form

See [PROJECT_REPORT.md](./PROJECT_REPORT.md) for detailed documentation.

## 🚀 Deployment

### Frontend (Vercel)

```bash
cd client
npm run build
# Deploy build/ folder to Vercel
```

### Backend (Heroku)

```bash
git push heroku main
```

## 📖 Documentation

For detailed information, see [PROJECT_REPORT.md](./PROJECT_REPORT.md):

- Complete architecture overview
- Database models documentation
- All API endpoints listed
- Known issues and fixes
- Future enhancement ideas
- Security implementation details

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Kartik Sharma**

- GitHub: [@kartik1194](https://github.com/kartik1194)
- Email: kartik@example.com

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Cloudinary](https://cloudinary.com/) - Media storage
- [PayPal](https://www.paypal.com/) - Payment processing

## 📞 Support

For support, email karrtikchd@gmail.com or open an issue on GitHub.

---

**Status:** ✅ Active Development  
**Last Updated:** December 2, 2025  
**Version:** 1.0.0
