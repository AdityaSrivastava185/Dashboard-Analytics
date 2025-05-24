# 🍕 Next.js Dashboard with Google Authentication

This project is a modern, server-rendered dashboard web application built using **Next.js**. It features **Google OAuth authentication**, protected routes, and a clean **Tailwind CSS**-styled UI with mock pizza order management.

## 🚀 Live Demo
[Visit the Deployed App](https://your-deployment-link.vercel.app)  
_(Replace with your actual Vercel or Railway link)_

---

## 📌 Features

- 🔐 **Google Authentication** using NextAuth.js
- 👋 Personalized greeting: "Hello, [User Name]"
- 📦 Protected Dashboard Routes
- 📋 Responsive Pizza Orders Table with Status Badges
- 🎨 Clean and modern UI with Tailwind CSS
- ☁️ Deployed on Vercel or Railway

---

## 🧰 Tech Stack

| Category        | Technology            |
|----------------|------------------------|
| Framework      | [Next.js](https://nextjs.org/) |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) |
| Authentication | [clerk](https://clerk.com/) with Google OAuth |
| Deployment     | [Vercel](https://vercel.com/) / [Railway](https://railway.app/) |

---

## 🧪 Authentication Flow

- **Google OAuth Login**: Secure sign-in with your Google account.
- **Protected Routes**: Pages like `/dashboard` and `/orders` are accessible only after login.
- **Redirect**: Unauthenticated users are redirected to the `/login` page.
- **Logout**: Easily logout via the navigation bar.

---

## 🖥️ Dashboard Pages

### ✅ Hello Page

- Route: `/dashboard`
- Displays a personalized greeting:  
  > Hello, **[User’s Google Name]**!

### 🍕 Pizza Orders Page

- Route: `/orders`
- View mock pizza orders in a styled table.
- **Table Columns**:
  - `Order ID` (e.g., PZA001)
  - `Customer Name` (e.g., John Doe)
  - `Pizza Type` (e.g., Margherita, Pepperoni)
  - `Quantity` (e.g., 2)
  - `Order Date` (e.g., 2025-05-24 14:30)
  - `Status`: Color-coded badges for  
    `Pending`, `Preparing`, `Out for Delivery`, `Delivered`, `Cancelled`

---

## 🧱 Folder Structure (Sample)

