# 🚀 Full-Stack User Authentication App

This is a full-stack web application built using **React.js** for the frontend, **Node.js** and **Express.js** for the backend, and **MongoDB** for the database. **Tailwind CSS** is used for modern, responsive, and utility-first styling.

---

## 🔧 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB  
- **Styling**: Tailwind CSS  
- **Authentication**: JWT, bcrypt for password hashing

---

## 📌 Features

- User Registration with validation  
- Secure password hashing with bcrypt  
- JWT-based login authentication  
- Responsive UI with Tailwind CSS  
- Seamless navigation between registration and login

---

## 📝 Registration Flow

1. Go to: [http://localhost:3000/registration](http://localhost:3000/registration)  
2. User must fill in: `name`, `email`, and `password`  
3. On form submission, the data is sent via POST request to:  

POST http://localhost:5000/api/auth/registration

4. Password is hashed using **bcrypt** and stored securely in the **MongoDB** database.  
5. After successful registration, the user is automatically redirected to the login page.

---

## 🔐 Login Flow

1. Navigate to: [http://localhost:3000/login](http://localhost:3000/login)  
2. Enter your `email` and `password`  
3. On submission, a POST request is made to:  


POST http://localhost:5000/api/auth/login

4. The backend:
- Verifies if the email exists in the database.
- Compares the entered password with the hashed password using **bcrypt**.
- If matched, generates and returns a **JWT token**.

---

## 🛡️ Security Notes

- Passwords are **never stored in plain text**.
- All sensitive operations use **bcrypt** for hashing and **JWT** for secure token-based authentication.

---

## 📦 Getting Started

### 🚀 Frontend Setup

```bash
cd client
npm install
npm start

