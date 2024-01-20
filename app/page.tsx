"use client";

import PageLayout from "@/components/pageLayout";
import Link from 'next/link';

export default function Home() {
  const openSheet = () =>{
    window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vR2JmPFFuMGpeNUD6Biap_RSlmPR8A26YaGrUcZDD5Nh8ZZHgnKTyxnrCFcargW79oL9dpuI29_7p2y/pubhtml", '_blank')
  }
  return (
    <PageLayout>
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="flex items-center">
        <h1 className="text-5xl text-center text-[#606C38] font-extrabold">
          Hello Fred!
        </h1>
      </div>

      <div className="">
        Select Your Tour Dates
      </div>

      <div className="flex items-center flex-col py-8 ">
      
        <h1 className="text-4xl text-[#606C38] font-extrabold mb-2">Step 1</h1>
        <button className="bg-[#BC6C25] text-white font-bold py-2 px-4 rounded mb-12 text-2xl" onClick={openSheet}>
Download CSV Template</button>     
<h1 className="text-4xl text-[#606C38] font-bold mb-2">Step 2</h1>
<form action="http://localhost:3001/csv/upload" method="POST" encType="multipart/form-data">
<input type="file" name="file" title="Select your file"/>

<button type="submit" className="bg-[#BC6C25] cursor-pointer text-white font-bold py-2 px-4 rounded mb-12 text-2xl">
Submit </button>
</form>     
</div> 



      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">     

       
      </div>
    </main>
    </ PageLayout>
  );
};

