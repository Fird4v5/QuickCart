import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@context/AppContext";
import { Toaster } from "react-hot-toast";
import { type Metadata } from 'next';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'QuickCart - eCommerce',
  description: 'E-Commerce with Next.js',
}


const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"]}); 




const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={
          `${outfit.className} antialiased text-gray-700`
        }
      >
        <Toaster />
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}

export default RootLayout


