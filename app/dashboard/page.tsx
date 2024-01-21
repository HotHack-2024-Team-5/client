"use client";
import PageLayout from "@/components/pageLayout";
import { Datepicker } from "flowbite-react";
import React from "react";
import Select from "react-select";
import { CitiesDataType, usecitiesData } from "@/api/index";
import StaysChart from "@/components/StaysChart";

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
      <div className="mx-10 py-10 pl-5">
        <p className="text-6xl py-10 font-bold text-[#52796F]">Dashboard</p>
        <div className="lg:flex space-x-5">
          <Select
            value={cities}
            onChange={setCities}
            isMulti
            placeholder="City"
            options={citiesOptions}
            className="bg-[#354F52] text-[#CAD2C5]"
          />
          <Select
            className="bg-[#354F52] text-[#CAD2C5]"
            options={options}
            isMulti
            onChange={setRoomTypes}
            value={roomTypes}
            placeholder={"Room Type"}
          />
          <p className="text-[#52796F] mt-2 fond-bold">From:</p>
          <Datepicker
            onSelectedDateChanged={(newDate) =>
              setFromDate(formatDate(newDate))
            }
          />

          <p className="text-[#52796F] mt-2 fond-bold"> To:</p>
          <Datepicker
            onSelectedDateChanged={(newDate) => setToDate(formatDate(newDate))}
            defaultDate={new Date(toDate)}
          />
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
