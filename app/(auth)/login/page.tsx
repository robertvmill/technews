import React from 'react';
import ShadcnLoginCard from '../../components/auth/shadcn-login-card';
import { Toaster } from "@/components/ui/toaster";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">TechNews</h1>
      </div>
      <ShadcnLoginCard />
      <Toaster />
    </div>
  );
} 