import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(url)
        const data = await response.json();
        setResult(data.bodies);

      } catch (error) {
        setIsError(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fetchData();
  }, [url]);

  return { result, isLoading, isError };
}