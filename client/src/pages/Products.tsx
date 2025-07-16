import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProductList from "@/components/ProductList";
import { deleteProduct, setProducts } from "@/store/ui-slice/product-slice";
import { useDispatch } from "react-redux";

const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};

const Products = () => {
  const dispatch = useDispatch();
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
    //    onSuccess: (data) => {
    //   dispatch(setProducts(data));
    // },
  });
  console.log(products);

  const deleteItem = (id: number) => {
    dispatch(deleteProduct(id));
  };

  if (isLoading) return <p>Loadingoliv...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return <ProductList products={products} onDelete={deleteItem} />;
};

export default Products;
