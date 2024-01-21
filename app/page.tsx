"use client";
import PageLayout from "@/components/pageLayout";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useEffect } from "react";
import axios from "axios";

const openSheet = () => {
  window.open(
    "https://docs.google.com/spreadsheets/d/1cX1I4PC73wKfjsy_ofeTpr8xq1bzlwRoZhfxSgQNEjE/edit#gid=0",
    "_blank"
  );
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // @ts-ignore
    const formData = new FormData(e.target);
    axios.post("https://hothack-team5-server.vercel.app/csv/upload", formData);
    setInputValue("");
    // const textClear= () =>{e.target.input}
    setSubmit(true);
    // action="http://localhost:3001/csv/upload" method="POST" encType="multipart/form-data"
  };

  useEffect(() => {
    if (!submit) {
      return;
    }

    const timeout = setTimeout(() => {
      setSubmit(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [submit]);

  return (
    <PageLayout>
      <main className="flex pt-10 flex-col items-center justify-center">
        <div className="flex items-center">
          <p className="text-6xl py-10 font-bold text-[#2F3E46]">Home</p>
        </div>

        <div className="mt-6 text-2xl text-center">
          Let us take the sting out of booking tours. Let us know your dates
          below.
        </div>

        <div className="flex items-center flex-col py-8 ">
          <h1 className="text-4xl text-[#2F3E46] font-extrabold mb-2">
            Step 1
          </h1>
          <button
            className="bg-[#CAD2C5] hover:bg-[#2F3E46] hover:text-[#CAD2C5] text-[#52796F] font-bold py-2 px-4 rounded mb-12 text-2xl"
            onClick={openSheet}
          >
            Download CSV Template
          </button>
          <h1 className="text-4xl text-[#2F3E46] font-bold mb-2">Step 2</h1>

          <form
            className="flex flex-col justify-center"
            onSubmit={onFormSubmit}
          >
            <input
              type="text"
              required
              name="name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mb-4 text-[#2F3E46]"
            />
            <input
              name="file"
              className="w-full text-gray-900 bg-gray-50"
              id="file_input"
              type="file"
            />
            {submit ? <p>File submitted successfully</p> : null}
            <button
              type="submit"
              className="bg-[#CAD2C5] hover:bg-[#2F3E46] hover:text-[#CAD2C5] items-center cursor-pointer text-[#52796F] font-bold py-2 px-4 rounded mb-12 mt-6 text-2xl"
            >
              Submit{" "}
            </button>
          </form>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </main>
    </PageLayout>
  );
}
