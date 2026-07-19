import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Recipe Hub",
  description: "Discover delicious recipes made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <h1 className="font-bold text-lg">Recipe Hub</h1>

          <div className="flex gap-6 items-center">
            <Link href="/" className="glow-hover transition">
              Home
            </Link>
            <Link href="/gallery" className="glow-hover transition">
              Gallery
            </Link>
            <Link href="/about" className="glow-hover transition">
  About
</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}