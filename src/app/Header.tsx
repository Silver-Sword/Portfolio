import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const INCLUDE_BLOGS = true;
export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 bg-background text-foreground shadow-md z-10"
      style={{ backgroundColor: "#ffffff" }}
    >
      <nav className="container mx-auto px-6 py-4">
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
        </ul>
      </nav>
    </header>
  );
}
