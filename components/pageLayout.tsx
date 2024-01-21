import Script from "next/script";
import React from "react";
import Navigation from "./navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navigation />
        <div className="min-h-screen min-w-screen bg-[#4D796E] text-[#CAD2C5] flex flex-col items-left p-8">
          {children}
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.js" />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
