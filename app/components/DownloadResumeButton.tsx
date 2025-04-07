'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { pdf } from '@react-pdf/renderer';
import { ResumeDocumentOnly } from './ResumePDF';

const DownloadResumeButton = () => {
  const handleDownload = async () => {
    try {
      const blob = await pdf(<ResumeDocumentOnly />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'mengjian_resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-2"
      onClick={handleDownload}
    >
      <FiDownload className="w-4 h-4" />
      下载简历
    </Button>
  );
};

export default DownloadResumeButton; 