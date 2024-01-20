"use client";

import PageLayout from "@/components/pageLayout";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { FormEvent, useState } from "react";
import axios from "axios";

const openSheet = () => {
  window.open("https://docs.google.com/spreadsheets/d/1cX1I4PC73wKfjsy_ofeTpr8xq1bzlwRoZhfxSgQNEjE/edit#gid=0", '_blank')
}

export default function Home() {
  const [inputValue,setInputValue] = useState('');
  const router = useRouter();
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    

    // @ts-ignore
    const formData = new FormData(e.target);
    axios.post('https://hothack-team5-server.vercel.app/csv/upload', formData);
    console.log(formData);
    setInputValue('');
    // const textClear= () =>{e.target.input}

    // action="http://localhost:3001/csv/upload" method="POST" encType="multipart/form-data"
  }

  return (
    <PageLayout>
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex items-center">
        <h1 className="text-5xl text-center text-[#606C38] font-extrabold mt-6">
          Hello Fred!
        </h1>
      </div>

      <div className="mt-6 text-2xl">
Let us take the sting out of booking venues. Let us know your dates below.
      </div>

      <div className="flex items-center flex-col py-8 ">
      
        <h1 className="text-4xl text-[#606C38] font-extrabold mb-2">Step 1</h1>
        <button className="bg-[#BC6C25] text-white font-bold py-2 px-4 rounded mb-12 text-2xl" onClick={openSheet}>
Download CSV Template</button>     
<h1 className="text-4xl text-[#606C38] font-bold mb-2">Step 2</h1>

<form className="flex flex-col justify-center" onSubmit={onFormSubmit}>
<input type="text" name="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
/>
<input name="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
<button type="submit" className="bg-[#BC6C25] items-center cursor-pointer text-white font-bold py-2 px-4 rounded mb-12 mt-6 text-2xl">
Submit </button>
</form>     
</div> 
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">     
      </div>
    </main>
    </ PageLayout>
  );
};

