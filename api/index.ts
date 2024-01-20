
import React, { useEffect, useState } from 'react';

const data = [
    {
      date: '2024-01-20',
      king: 3,
      twin: 2,
      suite: 1,
    },
    {
      date: '2024-01-21',
      king: 5,
      twin: 2,
      suite: 0,
    },
    {
      date: '2024-01-22',
      king: 3,
      twin: 6,
      suite: 0,
    },
    {
      date: '2024-01-32',
      king: 0,
      twin: 0,
      suite: 0,
    },
    
  ];
  

export function useStaysData(cityIds:string[], dateFrom: string, dateTo: string) {
 
const [staysData, setStaysData] = useState(data);

    const serverUrl = 'http://localhost:3001'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${serverUrl}/stays?${new URLSearchParams({
                    from: dateFrom,
                    to : dateTo,
                    city : cityIds.join(',')
                })}`);
                
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
    }, []);// city, dateTo, dateFrom

    return staysData;
}