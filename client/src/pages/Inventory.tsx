import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/store/hooks";
import { PackagePlus } from "lucide-react";

const Inventory = () => {
  const products = useAppSelector((state) => state.products.items);
  console.log(products);

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Inventory
      </h1>

      <div className="grid">
        <div>
          <h1>Total Items</h1>
          <p>{products.length}</p>
        </div>
        <div>
          <h1>In Stock</h1>
          <p>{products.filter((p) => p.stock > 0).length}</p>
        </div>
        <div>
          <h1>Out of Stock</h1>
          <p>{products.filter((p) => p.stock === 0).length}</p>
        </div>
        <div>
          <h1>Low Stock</h1>
          <p>{products.filter((p) => p.stock > 0 && p.stock < 10).length}</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg py-8 px-6 border border-slate-200 dark:border-slate-700 dark:bg-slate-800">
        <div className="">
          <div className="flex items-center gap-x-3  mb-4">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <PackagePlus size={26} />
            </div>
            <h2 className="text-xl font-medium">Inventory</h2>
          </div>

          <div className="overflow-y-auto max-h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg font-medium">Product</TableHead>
                  <TableHead className="text-lg font-medium">Status</TableHead>
                  <TableHead className="text-lg font-medium text-right">
                    Stock Level
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
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
                      {product.availabilityStatus}
                    </TableCell>
                    <TableCell className="text-lg font-medium text-right">
                      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className={`h-full rounded-full ${
                            product.stock > 0 ? "bg-green-500" : "bg-red-500"
                          }`}
                          style={{
                            width: `${Math.min(product.stock, 100)}%`,
                          }}
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
    </div>
  );
};

export default Inventory;
