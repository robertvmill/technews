import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">TechNews Dashboard</h1>
          <form action="/auth/signout" method="post">
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
              <CardDescription>Stay up to date with the latest technology news.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Get instant access to tech trends, product launches, and industry updates.</p>
            </CardContent>
            <CardFooter>
              <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                Browse News →
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Documents</CardTitle>
              <CardDescription>Access and manage your uploaded documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Securely store and organize your important files.</p>
            </CardContent>
            <CardFooter>
              <Link href="/documents" className="text-blue-600 hover:text-blue-800 font-medium">
                View Documents →
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chat</CardTitle>
              <CardDescription>Connect with other tech enthusiasts.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Discuss the latest trends with the community.</p>
            </CardContent>
            <CardFooter>
              <Link href="/chat" className="text-blue-600 hover:text-blue-800 font-medium">
                Open Chat →
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
} 