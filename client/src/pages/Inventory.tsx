import { useSidebar } from "@/components/ui/sidebar";
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
    <div className="flex flex-col gap-y-4 mx-auto container py-4">
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Inventory
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <div className="card">
          <h1 className="card-header">Total Items</h1>
          <p className="card-desc">{products.length}</p>
        </div>
        <div className="card">
          <h1 className="card-header">In Stock</h1>
          <p className="card-desc">
            {products.filter((p) => p.stock > 0).length}
          </p>
        </div>
        <div className="card">
          <h1 className="card-header">Out of Stock</h1>
          <p className="card-desc">
            {products.filter((p) => p.stock === 0).length}
          </p>
        </div>
        <div className="card">
          <h1 className="card-header">Low Stock</h1>
          <p className="card-desc">
            {products.filter((p) => p.stock > 0 && p.stock < 10).length}
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg py-8 px-6 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 w-full max-w-full min-w-0 overflow-hidden">
        <div className="">
          <div className="flex items-center gap-x-3  mb-4">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <PackagePlus size={26} />
            </div>
            <h2 className="text-xl font-medium">Inventory</h2>
          </div>

          <div
            className="overflow-auto w-full h-[400px] -mx-6 px-6"
            style={{
              width: "calc(100% + 3rem)",
              maxWidth: getMaxWidth(),
            }}
          >
            <Table className="min-w-[600px]">
              <TableHeader className="sticky top-0 z-20 bg-white dark:bg-slate-800">
                <TableRow>
                  <TableHead className="text-base md:text-lg font-normal md:font-medium">
                    Product
                  </TableHead>
                  <TableHead className="text-base md:text-lg font-normal md:font-medium">
                    Status
                  </TableHead>
                  <TableHead className="text-base md:text-lg font-normal md:font-medium text-right">
                    Stock Level
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center text-base md:text-lg font-normal md:font-medium">
                        <span>
                          <img
                            src={product.thumbnail}
                            alt=""
                            className="size-14 rounded-lg object-cover flex-shrink-0"
                          />
                        </span>
                        {product.title}
                      </div>
                    </TableCell>
                    <TableCell className="text-base md:text-lg font-normal md:font-medium">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.availabilityStatus === "In Stock"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : product.availabilityStatus === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {product.availabilityStatus}
                      </span>
                    </TableCell>
                    <TableCell className="text-base md:text-lg font-normal md:font-medium text-right">
                      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            product.stock > 50
                              ? "bg-green-500"
                              : product.stock > 20
                              ? "bg-yellow-500"
                              : product.stock > 0
                              ? "bg-orange-500"
                              : "bg-red-500"
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
