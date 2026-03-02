import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Nwae Nandar Aung | Frontend Developer Portfolio",
  description: "Portfolio of Nwae Nandar Aung, a Frontend Developer specialising in building modern, responsive web applications with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  min-h-screen bg-light bg-cover bg-no-repeat relative`}
      >
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
