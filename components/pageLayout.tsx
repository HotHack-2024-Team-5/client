// components/PageLayout.js
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-[#FEFAE0] flex flex-col items-center justify-center p-8">
      {children}
    </div>
  );
};

export default PageLayout;
