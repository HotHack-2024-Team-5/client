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
        <div className="absolute bottom-0 left-0 right-0 text-center py-5 text-[#CAD2C5]">
          Made with ❤️ by Team 5
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
