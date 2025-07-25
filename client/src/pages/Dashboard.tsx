import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProducts } from "@/hooks/useProducts";
import { useAppSelector } from "@/store/hooks";
import {
  CreditCard,
  DollarSign,
  Package,
  PencilLine,
  Trash,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSidebar } from "@/components/ui/sidebar";

type SalesItem = {
  name: string;
  total: number;
};

const Dashboard = () => {
  const products = useAppSelector((state) => state.products.items);
  const { open, isMobile } = useSidebar();
  const { isLoading, isError, error } = useProducts();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalRevenue: 0,
    averagePrice: 0,
    totalStock: 0,
  });
  // Calculate monthly sales data for the chart
  const [salesData, setSalesData] = useState<SalesItem[]>([]);

  // Calculate available width based on sidebar state
  const getMaxWidth = () => {
    if (isMobile) {
      // On mobile, sidebar is overlay so full width is available
      return "calc(100vw - 2rem)";
    }

    if (open) {
      // Sidebar is open, subtract sidebar width (usually 16rem/256px)
      return "calc(100vw - 16rem - 2rem)";
    }

    // Sidebar is closed, only subtract padding
    return "calc(100vw - 2rem)";
  };

  useEffect(() => {
    const calcStats = () => {
      const totalProducts = products.length;
      const totalRevenue = products.reduce(
        (sum, product) => sum + product.price * product.stock,
        0
      );
      const averagePrice = totalRevenue / totalProducts;
      const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
      );

      setStats({
        totalProducts,
        totalRevenue,
        averagePrice,
        totalStock,
      });

      // Generate mock monthly sales data based on products
      const monthlyData = Array.from({ length: 12 }, (_, i) => {
        const month = new Date(2024, i).toLocaleString("default", {
          month: "short",
        });
        const total = Math.floor(
          (totalRevenue * (0.5 + Math.random() * 0.5)) / 12
        );
        return { name: month, total };
      });

      setSalesData(monthlyData);
      if (isLoading) return <p>Loading...</p>;
    };
    calcStats();
  }, []);

  if (isLoading)
    return <p className="text-center text-gray-500">Loading dashboard...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  // Get top rated products
  const topRatedProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
    .map((product, index) => ({
      number: index + 1,
      id: product.id,
      image: product.thumbnail,
      name: product.title,
      description: product.description,
      price: product.price,
      status: product.stock > 0 ? "In Stock" : "Out of Stock",
      rating: product.rating,
    }));
  return (
    <div className="flex flex-col gap-y-4 container mx-auto py-4">
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Package size={26} />
            </div>
            <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
              Total Products
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-lg p-6 bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              {stats.totalProducts.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <DollarSign size={26} />
            </div>
            <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
              Total Revenue
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-lg p-6 bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              ${stats.totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Users size={26} />
            </div>
            <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
              Average Price
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-lg p-6 bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              ${stats.averagePrice.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <CreditCard size={26} />
            </div>
            <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
              Total Stock
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-lg p-6 bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              {stats.totalStock.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900 col-span-1 md:col-span-2 lg:col-span-4">
          <div className="flex items-center gap-x-2">
            <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
              Monthly Revenue Overview
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-lg p-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={salesData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  cursor={false}
                  formatter={(value) => `$${value.toLocaleString()}`}
                  active={true}
                />
                <XAxis
                  dataKey="name"
                  strokeWidth={0}
                  // stroke={theme === "light" ? "#475569" : "#94a3b8"}
                  tickMargin={6}
                />
                <YAxis
                  strokeWidth={0}
                  // stroke={theme === "light" ? "#475569" : "#94a3b8"}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                  tickMargin={6}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#2563eb"
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="flex items-center gap-x-2">
            <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
              Recent Products
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-lg p-6 h-[300px] overflow-auto p-0">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-x-4 py-2 pr-2"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="size-10 flex-shrink-0 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      {product.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {product.category}
                    </p>
                  </div>
                </div>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900 w-full max-w-full min-w-0 overflow-hidden">
        <div className="flex items-center gap-x-2">
          <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">
            Top Rated Products
          </p>
        </div>
        <div
          className="overflow-x-auto w-full -mx-4 px-4"
          style={{
            width: "calc(100% + 2rem)",
            // maxWidth: "calc(100vw - 2rem)",
            maxWidth: getMaxWidth(),
          }}
        >
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg font-medium ">#</TableHead>
                <TableHead className="text-lg font-medium ">Product</TableHead>
                <TableHead className="text-lg font-medium ">Price</TableHead>
                <TableHead className="text-lg font-medium ">Status</TableHead>
                <TableHead className="text-right text-lg font-medium">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topRatedProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="text-lg font-medium">
                    {product.number}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-lg font-medium">
                      <span className="mr-3 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="size-14 rounded-lg object-cover"
                        />
                      </span>
                      <div className="flex flex-col min-w-0 flex-1">
                        <p className="whitespace-nowrap">{product.name}</p>
                        <p className="font-normal text-slate-600 dark:text-slate-400 whitespace-nowrap">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-lg font-medium whitespace-nowrap">
                    {product.price}
                  </TableCell>
                  <TableCell className="text-lg font-medium whitespace-nowrap">
                    {product.status}
                  </TableCell>
                  <TableCell className="text-right text-lg font-medium flex items-end gap-x-4">
                    <button className="text-blue-500 dark:text-blue-600">
                      <PencilLine size={20} />
                    </button>
                    <button className="text-red-500">
                      <Trash size={20} />
                    </button>
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

export default Dashboard;
