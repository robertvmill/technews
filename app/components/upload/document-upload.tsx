'use client';

import { useState } from 'react';
import { UploadButton } from '@uploadthing/react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

import type { OurFileRouter } from '@/app/api/uploadthing/core';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type UploadedFile = {
  name: string;
  url: string;
  size: number;
};

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Documents</CardTitle>
        <CardDescription>
          Upload PDF documents to chat with AI about their contents.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <UploadButton<OurFileRouter, 'docUploader'>
            endpoint="docUploader"
            onUploadBegin={() => {
              setIsUploading(true);
            }}
            onClientUploadComplete={(res) => {
              setIsUploading(false);
              if (!res || res.length === 0) return;
              
              const newFiles = res.map((file) => ({
                name: file.name,
                url: file.url,
                size: file.size,
              }));
              
              setUploadedFiles([...uploadedFiles, ...newFiles]);
              
              toast({
                title: "Upload Successful",
                description: `Uploaded ${res.length} document${res.length === 1 ? '' : 's'} successfully!`,
              });
            }}
            onUploadError={(error: Error) => {
              setIsUploading(false);
              toast({
                title: "Upload Failed",
                description: error.message || "Something went wrong",
                variant: "destructive",
              });
            }}
          />
          
          {uploadedFiles.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium">Uploaded Documents</h3>
              <ul className="mt-2 space-y-2">
                {uploadedFiles.map((file, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <svg 
                        className="h-6 w-6 text-gray-500 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        router.push(`/chat?document=${encodeURIComponent(file.url)}`);
                      }}
                    >
                      Chat with AI →
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => router.push('/dashboard')}
        >
          Back to Dashboard
        </Button>
        
        {uploadedFiles.length > 0 && (
          <Button 
            onClick={() => router.push('/documents')}
          >
            View All Documents
          </Button>
        )}
      </CardFooter>
    </Card>
  );
} 