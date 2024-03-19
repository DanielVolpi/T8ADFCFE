import { useEffect, useState } from 'react';

const FETCH_ERROR = 'The fetch was not done successfully';

const useFetch = <T,>(url: string): { data: T[] | T | null; error: any } => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(FETCH_ERROR);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
