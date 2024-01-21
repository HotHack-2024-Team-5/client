import Script from "next/script";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-[#2F3E46] text-[#CAD2C5] flex flex-col items-left p-8">
      <div className="flex flex-row space-x-10">
        <img
          src="/newbackground.png"
          alt="Team 5 Logo"
          className="h-[8rem] w-[8rem] mb-4"
        />
        <img
          src="/modular.png"
          alt="modular"
          className="h-[8rem] w-[8rem] mb-4"
        />
      </div>
      {children}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.js" />
    </div>
  );
};

export default PageLayout;
