import ProductList from "@/components/ProductList";
import { deleteProduct, setProducts } from "@/store/ui-slice/product-slice";
import { useDispatch } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";

const Products = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.products.items);

  // Ensure products is always an array
  const productArray = Array.isArray(products) ? products : [];

  const { data, isLoading, isError, error } = useProducts();

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const deleteItem = (id: number) => {
    dispatch(deleteProduct(id));
  };

  if (isLoading)
    return (
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <Skeleton className="h-16 w-16 rounded-md" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return <ProductList products={products} onDelete={deleteItem} />;
};

export default Products;
