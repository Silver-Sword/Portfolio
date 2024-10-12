'use client'

import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const INCLUDE_BLOGS = false;
const metadata = {
  title: 'Chris Gittings | Software Developer',
  description: 'Portfolio of Chris Gittings, a new grad software developer showcasing projects and blog posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 bg-background text-foreground shadow-md z-10" style={{ backgroundColor: '#ffffff' }}>
            <nav className="container mx-auto px-6 py-4">
              <ul className="flex justify-center space-x-8">
                <li>
                  <Link 
                    href="/" 
                    className={`hover:underline text-lg ${pathname === '/' ? 'font-bold' : ''}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className={`hover:underline text-lg ${pathname === '/about' ? 'font-bold' : ''}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects" 
                    className={`hover:underline text-lg ${pathname === '/projects' ? 'font-bold' : ''}`}
                  >
                    Projects
                  </Link>
                </li>
                { INCLUDE_BLOGS && 
                  <li>
                    <Link 
                      href="/blog" 
                      className={`hover:underline text-lg ${pathname === '/blog' ? 'font-bold' : ''}`}
                    >
                      Blog
                    </Link>
                  </li> 
                }
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-primary text-primary-foreground mt-8">
            <div className="container mx-auto px-6 py-6 text-center">
            <span className="text-gray-400">© 2024 Chris Gittings. All rights reserved.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}