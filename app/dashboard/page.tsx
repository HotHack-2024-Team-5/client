"use client";

import StaysChart from "@/components/StaysChart";
import PageLayout from "@/components/pageLayout";
import { Datepicker } from "flowbite-react";
import React from "react";
import Select from "react-select";
import OptionTypeBase from "react-select";

type SelectRoomType = { value: string; label: string };

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

const Dashboard: React.FC = () => {
  const [city, setCity] = React.useState<string>("");
  const [fromDate, setFromDate] = React.useState<string>(
    formatDate(new Date())
  );
  const [toDate, setToDate] = React.useState<string>(formatDate(new Date()));
  const [roomTypes, setRoomTypes] = React.useState<readonly SelectRoomType[]>(
    []
  );

  const handleSubmit = () => {
    console.log("City:", city);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
    console.log("Room Type:", roomTypes);
  };

  const options: SelectRoomType[] = [
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
        <Select
          className="p-2 mr-2"
          options={options}
          isMulti
          onChange={setRoomTypes}
          value={roomTypes}
        />
        <div className="flex space-x-3">
          <div className="flex">
            <p className="p-2">From:</p>
            <Datepicker
              value={fromDate}
              onSelectedDateChanged={(newDate) =>
                setFromDate(formatDate(newDate))
              }
            />
          </div>
          <div className="flex">
            <p className="p-2"> To:</p>{" "}
            <Datepicker
              value={toDate}
              onSelectedDateChanged={(newDate) =>
                setToDate(formatDate(newDate))
              }
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-[#DDA15E] hover:bg-[#BC6C25] text-white px-10 rounded mx-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <StaysChart dateFrom={fromDate} dateTo={toDate} cityIds={[]} roomTypes={roomTypes} />
    </PageLayout>
  );
};

export default Dashboard;
