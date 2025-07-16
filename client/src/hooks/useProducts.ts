import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/utils/apifetch";

export const useProducts = (shouldFetch = true) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    enabled: shouldFetch,
    staleTime: 1000 * 60 * 5, ///tis keeps data fresh for 5 mins
    retry: 2, ///this retries the fetch twice if fails
  });
};
