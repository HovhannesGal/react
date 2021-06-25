import { useEffect } from "react";

export const useSiteTitle = (title) => {
  useEffect(() => {
    document.title = `Instagram | ${title}`;
  }, []);
};
