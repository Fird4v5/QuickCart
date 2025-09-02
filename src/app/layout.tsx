import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/AppContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"]}); 
// import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'QuickCart - eCommerce',
  description: 'E-Commerce with Next.js',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
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
  )
}

export default RootLayout


