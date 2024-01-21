import { useEffect, useState } from "react";

export function useStaysData(
  cityIds: string[],
  dateFrom: string,
  dateTo: string
) {
  const [staysData, setStaysData] = useState([]);

  const serverUrl = "https://hothack-team5-server.vercel.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${serverUrl}/stays?${new URLSearchParams({
            from: dateFrom,
            to: dateTo,
            cities: cityIds.join(","),
          })}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setStaysData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed (e.g., show a user-friendly message)
      }
    };

    fetchData();
  }, [cityIds, dateFrom, dateTo]);

  return staysData;
}

//BELOW IS THE CITIES DATA
export type CitiesDataType = {
  id: string;
  name: string;
};
export function usecitiesData() {
  const [citiesData, setCitiesData] = useState<CitiesDataType[]>([]);

  const serverUrl = "https://hothack-team5-server.vercel.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${serverUrl}/cities`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setCitiesData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return citiesData;
}
