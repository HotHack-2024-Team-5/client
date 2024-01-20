// @ts-nocheck
"use client";
import PageLayout from "@/components/pageLayout";
import { Datepicker } from "flowbite-react";
import React from "react";
import Select from "react-select";

const Dashboard: React.FC = () => {
  const [city, setCity] = React.useState<string>("");
  const [fromDate, setFromDate] = React.useState<Date>(new Date());
  const [toDate, setToDate] = React.useState<Date>(new Date());

  const handleSubmit = () => {};

  const options = [
    { value: "King", label: "King" },
    { value: "Suite", label: "Suite" },
    { value: "Twin", label: "Twin" },
  ];
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
          className="mr-2 p-2 rounded outline-[#283618] outline-1 outline"
        />
        <Select className="p-2 mr-2" options={options} isMulti />
        <div className="flex space-x-3">
          <div className="flex">
            <p className="p-2">From:</p>
            <Datepicker
              value={fromDate}
              onSelectedDateChanged={(newDate) => setFromDate(newDate)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="flex">
            <p className="p-2"> To:</p>{" "}
            <Datepicker
              value={toDate}
              onSelectedDateChanged={(newDate) => setToDate(newDate)}
              onChange={(e) => console.log(e)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-[#DDA15E] hover:bg-[#BC6C25] text-white px-10 rounded mx-5"
          //   submit={handleSubmit}
        >
          Submit
        </button>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
