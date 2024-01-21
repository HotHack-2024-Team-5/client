"use client";

import StaysChart from "@/components/StaysChart";
import PageLayout from "@/components/pageLayout";
import { Datepicker } from "flowbite-react";
import React from "react";
import Select from "react-select";
import { CitiesDataType, usecitiesData } from "@/api/index";

type SelectDataType = { value: string; label: string };

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

const Dashboard: React.FC = () => {
  const citiesData = usecitiesData();

  const [cities, setCities] = React.useState<readonly SelectDataType[]>([]);

  const [fromDate, setFromDate] = React.useState<string>(
    formatDate(new Date())
  );
  const [toDate, setToDate] = React.useState<string>("2024-12-31");

  const [roomTypes, setRoomTypes] = React.useState<readonly SelectDataType[]>(
    []
  );

  const options: SelectDataType[] = [
    { value: "King", label: "King" },
    { value: "Suite", label: "Suite" },
    { value: "Twin", label: "Twin" },
  ];

  const citiesOptions = citiesData.map((city: CitiesDataType) => ({
    value: city.id,
    label: city.name,
  }));

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
        <Select
          value={cities}
          onChange={setCities}
          isMulti
          placeholder="City"
          options={citiesOptions}
          className="mr-2 p-2"
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
              onSelectedDateChanged={(newDate) =>
                setFromDate(formatDate(newDate))
              }
            />
          </div>
          <div className="flex">
            <p className="p-2"> To:</p>{" "}
            <Datepicker
              onSelectedDateChanged={(newDate) =>
                setToDate(formatDate(newDate))
              }
              defaultDate={new Date(toDate)}
            />
          </div>
        </div>
      </div>
      <StaysChart
        dateFrom={fromDate}
        dateTo={toDate}
        cityIds={cities.map((city) => city.value)}
        roomTypes={roomTypes}
      />
    </PageLayout>
  );
};

export default Dashboard;
