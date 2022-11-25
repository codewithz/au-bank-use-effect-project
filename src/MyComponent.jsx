import { useEffect, useState } from "react";
import { getColors } from "./colors";

export function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getColors().then((myData) => setData(myData));
    console.log("I am in Use Effect !!");
  }, []);

  return (
    <ul>
      {data.length > 0 ? (
        data.map((item) => <li key={item}>{item}</li>)
      ) : (
        <h3>Loading....</h3>
      )}
    </ul>
  );
}
