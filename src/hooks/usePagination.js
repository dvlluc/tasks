import { useMemo } from "react";

export const usePagination = (totalCount, limit) => {
  const pagesArray = useMemo(() => {
    console.log("HOOK PAGINATION");
    let totalPages = Math.ceil(totalCount / limit),
      result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
  }, [totalCount, limit]);
  return pagesArray;
};
