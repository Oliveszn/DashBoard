import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PackagePlus } from "lucide-react";

const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};

const Products = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    retry: 2, ///this retries the fetch twice if fails
    staleTime: 1000 * 60 * 5, ///tis keeps data fresh for 5 mins
  });
  console.log(products);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        New Products
      </h1>

      <div className="bg-white shadow-md rounded-lg py-8 px-6 border border-slate-200 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-x-3  mb-4">
          <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
            <PackagePlus size={26} />
          </div>
          <h2 className="text-xl font-medium">All Products</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
