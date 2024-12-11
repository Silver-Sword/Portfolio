"use client";

import "./globals.css";
import Header from "./Header";

const metadata = {
  title: "Chris Gittings | Software Developer",
  description:
    "Portfolio of Chris Gittings, a new grad software developer showcasing projects and blog posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-col min-h-screen mx-5 md:mx-20">
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="text-primary-foreground mt-8">
            <div className="container mx-auto px-6 py-6 text-center">
              <span className="text-gray-400">
                © 2024 Chris Gittings. All rights reserved.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
