import { useMemo } from "react";

export const usePagination = (totalCount) => {
  const pagesArray = useMemo(() => {
    console.log("HOOK PAGINATION");
    let totalPages = Math.ceil(totalCount),
      result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalCount]);
  return pagesArray;
};