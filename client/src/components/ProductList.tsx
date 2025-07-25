import { PackagePlus, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useSidebar } from "./ui/sidebar";

interface ProductProps {
  products: any[];
  onDelete: (id: number) => void;
}

const ProductList = ({ products, onDelete }: ProductProps) => {
  const { open, isMobile } = useSidebar();

  // Calculate available width based on sidebar state
  const getMaxWidth = () => {
    if (isMobile) {
      return "calc(100vw - 3rem)"; // Account for container padding
    }

    if (open) {
      return "calc(100vw - 16rem - 3rem)"; // Sidebar width + padding
    }

    return "calc(100vw - 3rem)";
  };
  return (
    <div className="mx-auto container">
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Products
      </h1>

      <div className="bg-white shadow-md rounded-lg py-8 px-6 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 sticky top-0 w-full max-w-full min-w-0 overflow-hidden">
        <div className="flex items-center gap-x-3  mb-4">
          <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
            <PackagePlus size={26} />
          </div>
          <h2 className="text-xl font-medium">All Products</h2>
        </div>

        <div
          className="overflow-auto w-full h-[400px] -mx-6 px-6"
          style={{
            width: "calc(100% + 2rem)",
            maxWidth: getMaxWidth(),
          }}
        >
          <Table className="min-w-[600px]">
            <TableHeader className="">
              <TableRow>
                <TableHead className="text-lg font-medium">#</TableHead>
                <TableHead className="text-lg font-medium">Product</TableHead>
                <TableHead className="text-lg font-medium">Price</TableHead>
                <TableHead className="text-lg font-medium">Stock</TableHead>
                <TableHead className="text-right text-lg font-medium">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center text-lg font-medium">
                      <span>
                        <img
                          src={product.thumbnail}
                          alt=""
                          className="size-14 rounded-lg object-cover"
                        />
                      </span>
                      {product.title}
                    </div>
                  </TableCell>
                  <TableCell className="text-lg font-medium">
                    ${product.price}
                  </TableCell>
                  <TableCell className="text-lg font-medium">
                    {product.stock}
                  </TableCell>
                  <TableCell className="text-right text-lg font-medium">
                    <div className="flex justify-end">
                      <Trash
                        onClick={() => onDelete(product.id)}
                        className="cursor-pointer text-red-500"
                        size={20}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
