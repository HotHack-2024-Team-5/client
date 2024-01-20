// pages/Dashboard.tsx

import PageLayout from "@/components/pageLayout";
import { Datepicker } from "flowbite-react";
import React from "react";

const Dashboard: React.FC = () => {
  //   const handleSubmit = async () => {
  //     try {
  //       const response = await api.post("/stays", formData);

  //       console.log("Data sent successfully:", response.data);
  //     } catch (error) {
  //       console.error("Error sending data:", error);
  //     }
  //   };

  return (
    <PageLayout>
      <p className="text-3xl pt-10 font-bold text-[#606C38]">
        Welcome to the dashboard!!! 🎉
      </p>
      <p className="text-xl pb-10 text-[#606C38]">
        Please use the search bar feature below to find the best prices for your
        touring bands. 🎸🥁🎤🎶
      </p>
      <div className="lg:flex space-x-5">
        <p className="text-3xl font-bold text-[#283618] mr-5">Search by:</p>
        <input
          type="text"
          placeholder="City"
          className="mr-2 p-2 rounded outline-[#283618] outline-1 outline"
        />
        <input
          type="text"
          placeholder="Room Type"
          className="p-2 mr-2 rounded outline-[#283618] outline-1 outline"
        />
        <Datepicker />
        <button
          type="button"
          className="bg-[#DDA15E] hover:bg-[#BC6C25] text-white px-10 rounded mx-5"
          //   onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
