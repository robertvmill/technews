import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">TechNews Dashboard</h1>
          <form action="/auth/signout" method="post">
            <button 
              type="submit"
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Latest News</h2>
            <p className="text-gray-600 mb-4">Stay up to date with the latest technology news.</p>
            <Link 
              href="/news" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Browse News →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Your Documents</h2>
            <p className="text-gray-600 mb-4">Access and manage your uploaded documents.</p>
            <Link 
              href="/documents" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Documents →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Chat</h2>
            <p className="text-gray-600 mb-4">Connect with other tech enthusiasts.</p>
            <Link 
              href="/chat" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Open Chat →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 