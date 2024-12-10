"use client";
import "./globals.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INCLUDE_BLOGS } from "./vars";

export default function Header() {
  const pathname = usePathname();
  const hoverEffect =
    "hover:text-gray-600 transition-transform duration-300 ease-in-out transform";

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
                className={`${hoverEffect} text-lg ${pathname === "/" ? "font-bold" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${hoverEffect} text-lg ${pathname === "/about" ? "font-bold" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${hoverEffect} text-lg ${pathname === "/projects" ? "font-bold" : ""}`}
              >
                Projects
              </Link>
            </li>
            {INCLUDE_BLOGS && (
              <li>
                <Link
                  href="/blog"
                  className={`${hoverEffect} text-lg ${pathname === "/blog" ? "font-bold" : ""}`}
                >
                  Blog
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="w-1/4"></div>
      </div>
    </header>
  );
}
