# 🛒 E-Commerce Store

A full-stack demo e-commerce app where users can browse products, add them to cart, and place orders.  
Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, with authentication powered by **Clerk**.

---

## 🚀 Features

- 🔐 **Clerk Authentication** – Users can sign up/login with email, Google, or GitHub.  
- 🛍️ **Shopping Flow** – Browse products (headphones, phones, laptops), add to cart, and place orders.  
- 📦 **Order Management** –  
  - **Buyers:** View all your placed orders in **My Orders**.  
  - **Sellers:** Access the **Seller Dashboard** to manage products and track incoming orders.  
- 🎛️ **Seller Dashboard** – Manage product listings and see client orders.  
- 🎉 **User-Friendly UX** – Integrated **React Hot Toast** for smooth notifications.  
- 🎨 **Modern UI** – Responsive design with Tailwind CSS.

---

## 🌐 Live Demo
👉 firdavs.codes

---

## 📸 Preview

<img width="2560" height="1600" alt="quickcart firdavs codes_(Nest Hub Max)-min" src="https://github.com/user-attachments/assets/bfd688c0-1416-4c1b-ace5-e98ae6abf50a" />


---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework  
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JS  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS  
- [Clerk](https://clerk.com/) – Authentication and user management  
- [React Hot Toast](https://react-hot-toast.com/) – Toast notifications  

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-store.git
   cd ecommerce-store
   ```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Create a .env.local file and add your Clerk keys:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_key_here
```
4. Run the development server:
```bash
npm run dev
# or
yarn dev
```
5. Open http://localhost:3000
 in your browser.

---

## 🎮 How It Works

1. Guests can browse products freely.
2. Sign-up/Login Required to place orders.
3. Sellers can access a demo dashboard to manage products and view client orders.

## 📜 License
This project is open-source and available under the MIT License.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
