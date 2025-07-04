import { getDoccuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "DocuCraft - Documentation Generator",
  description: "Generate beautiful documentation with ease using DocuCraft.",
};

export default function RootLayout({ children }) {
  const allDocuments = getDoccuments();
  console.log("All Documents:", allDocuments);
  // Fetch documents on layout load
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header docs = {allDocuments}/>
        {children}</body>
    </html>
  );
}
