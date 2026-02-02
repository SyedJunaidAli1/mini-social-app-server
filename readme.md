# 🚀 Mini Social App — Backend

A production-style REST API for a mini social media application where users can create accounts, share posts with images, like posts, and comment in real time.

Built with scalability, clean architecture, and secure authentication in mind.

---

## 🧠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **Cloudinary** (Image Storage)
* **Multer** (File Upload Middleware)
* **bcryptjs** (Password Hashing)

---

## ✨ Features

### 🔐 Authentication

* User Signup
* User Login
* Secure password hashing
* JWT-based authorization
* Protected routes

### 📝 Posts

* Create text posts
* Upload images with posts
* Public feed with all posts
* Timestamped posts

### ❤️ Social Interactions

* Like / Unlike posts (toggle logic)
* Comment on posts
* Stored usernames for faster feed reads

### ☁️ Image Upload

* Images uploaded using Multer
* Stored securely on Cloudinary
* CDN-delivered URLs saved in MongoDB

---

## 🏗️ Folder Structure

```
backend
│
├── config/          # Cloudinary & DB configuration
├── controllers/    # Route logic
├── middleware/     # Auth & upload middleware
├── models/         # Mongoose schemas
├── routes/         # Express routes
│
├── app.js
└── index.js
```

Clean architecture ensures maintainability and scalability.

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```
DATABASE_URL=
PORT=5000
FRONTEND_ENDPOINT=http://localhost:3000
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/SyedJunaidAli1/mini-social-app-server
cd mini-social-app-server
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### Auth

```
POST   /api/auth/signup
POST   /api/auth/login
```

### Posts

```
GET    /api/posts              → Get public feed
POST   /api/posts              → Create post (Protected)
PUT    /api/posts/:id/like     → Like/Unlike post
POST   /api/posts/:id/comment  → Comment on post
```

---

## 🔒 Authentication

Protected routes require a JWT token in headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🧪 Testing

APIs were tested using **Postman** with multipart form-data for image uploads.

---

## 📌 Design Decisions

* Username stored inside posts for faster read performance.
* Toggle-based like system to prevent duplicate likes.
* Memory storage used for Multer to avoid server disk usage.
* Clean separation of controllers, middleware, and routes.

---

## 👨‍💻 Author

Built with a focus on clean backend practices and production-style architecture.
