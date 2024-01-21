import Script from "next/script";
import React from "react";
import Navigation from "./navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-[#FEFAE0] flex flex-col items-left p-8">
      <Navigation />
      {children}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.js" />
    </div>
  );
};

export default PageLayout;
