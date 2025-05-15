import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to TechNews</h1>
      <p className="text-xl mb-8">
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
  );
} 