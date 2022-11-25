import React, { useEffect, useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

export default function Counter() {
  const [name, setName] = useState("");
  const [hits, setHits] = useState(0);

  //   useEffect(() => {
  //     document.title = `${name} have hit ${hits} times`;
  //   }, [name, hits]);

  useDocumentTitle(`${name} have hit ${hits} times`);

  return (
    <div>
      Name: <input onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setHits(hits + 1)}>Hit Me</button>
      <br />
      <label htmlFor="">{`${name} have hit ${hits} times`}</label>
    </div>
  );
}
