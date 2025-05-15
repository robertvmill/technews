import { Toaster } from '@/components/ui/toaster';
import DocumentUpload from '../components/upload/document-upload';

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Your Documents</h1>
          <p className="text-gray-600 mt-2">Upload and manage your documents to chat with AI about them.</p>
        </div>
        
        <DocumentUpload />
        <Toaster />
      </div>
    </div>
  );
} 