import "./globals.css";
import "./styles/gradient.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Karla } from '@next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: "Matt Pinker",
  description: "Freelance Sound Artist and DJ",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`gradient-bg flex flex-col min-h-screen ${karla.className}`}>
        <Navbar />
        <main className="flex-grow pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
