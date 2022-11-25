import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title.toUpperCase();
  });
}

export default useDocumentTitle;
