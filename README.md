# 🍕 Next.js Dashboard with Clerk Authentication
This project is built by `Aditya Srivastava`
This project is a modern, server-rendered dashboard web application built using **Next.js**. It features **Clerk Authentication**, protected routes, and a clean **Tailwind CSS**-styled UI with mock pizza order management.

---

## 📌 Features

- 🔐 **Clerk Authentication** using NextAuth.js
- 👋 Personalized greeting: "Hello, [User Name]"
- 📦 Protected Dashboard Routes
- 📋 Responsive Pizza Orders Table with Status Badges
- 🎨 Clean and modern UI with Tailwind CSS
- ☁️ Deployed on Vercel 

---

### 3. Set Up Clerk with Google OAuth

    Go to https://clerk.dev and create an account.

    Create a new Clerk application.

    In the OAuth Providers section, enable Google OAuth.

    Copy the following from Clerk:

        Publishable Key

        Secret Key


    In the root of your project, create a file named .env.local and add:
## Environment Variables

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`

---
## 🧰 Tech Stack

| Category        | Technology            |
|----------------|------------------------|
| Framework      | [Next.js](https://nextjs.org/) |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) |
| Authentication | [clerk](https://clerk.com/) with Google OAuth |
| Deployment     | [Vercel](https://vercel.com/) |

---

## 🧪 Authentication Flow

- **Google OAuth Login**: Secure sign-in with your Google account.
- **Protected Routes**: Pages like `/dashboard` and `/` are accessible only after login.
- **Redirect**: Unauthenticated users are redirected to the `/login` page.
- **Logout**: Easily logout via the navigation bar.

---

## 🖥️ Dashboard Pages

### ✅ Hello Page

- Route: `/dashboard`
- Displays a personalized greeting:  
  > Hello, **[User’s Google Name]**!

### 🍕 Pizza Orders Page

- Route: `/dashboard`
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
## 🛠️ Local Setup Instructions

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/AdityaSrivastava185/Dashboard-Analytics.git
cd Dashboard-Analytics
```
```bash 
npm install
```
```bash 
npm run dev
```

Note-Beside the Nextjs and Clerk Authentication, you need to set up the environment variables in the .env.local file and i am using shadcn ui and lucide icons for the frontend components and icons
