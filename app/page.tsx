import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">TechNews</h1>
          <div className="flex space-x-4">
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login
            </Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to TechNews</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          A modern news aggregation application built with Next.js, Prisma, and Supabase.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Latest News</h2>
            <p>Stay up to date with the latest technology news and updates.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Document Management</h2>
            <p>Upload and manage your documents securely.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Authentication</h2>
            <p>Secure user authentication powered by Supabase.</p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Chat</h2>
            <p>Connect with other users through our integrated chat feature.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} TechNews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 