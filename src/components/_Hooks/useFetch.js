import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState({});

  useEffect(() => {
    fetch(URL, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((err) => setError(err));
  }, [URL]);

  if (error) {
    console.log(value);
    return <p>Error!</p>;
  }
  return [value];
};

export default useFetch;
