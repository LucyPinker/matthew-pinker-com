import "./globals.css";
import "./styles/gradient.css";
import Footer from "./components/footer";

export const metadata = {
  title: "Matthew Pinker",
  description: "Freelance Sound Artist and Composer",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`gradient-bg flex flex-col min-h-screen`}>
        <main className="flex-grow pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
