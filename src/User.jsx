import React, { useEffect } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

export default function User({ name }) {
  useEffect(() => {
    document.title = name;
  }, [name]);

  // useDocumentTitle(name);

  return <h1>Hello {name}</h1>;
}
