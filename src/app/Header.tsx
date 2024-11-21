import "./globals.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

const INCLUDE_BLOGS = true;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-background text-foreground shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex items-center">
        <div className="w-1/4">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold">Chris G.</span>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                href="/"
                className={`hover:underline text-lg ${pathname === "/" ? "font-bold" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:underline text-lg ${pathname === "/about" ? "font-bold" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`hover:underline text-lg ${pathname === "/projects" ? "font-bold" : ""}`}
              >
                Projects
              </Link>
            </li>
            {INCLUDE_BLOGS && (
              <li>
                <Link
                  href="/blog"
                  className={`hover:underline text-lg ${pathname === "/blog" ? "font-bold" : ""}`}
                >
                  Blog
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/dogs"
                className={`hover:underline text-lg ${pathname === "/dogs" ? "font-bold" : ""}`}
              >
                Dogs
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-1/4"></div>
      </div>
    </header>
  );
}
