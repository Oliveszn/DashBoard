import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useMemo, useState } from "react";

type Customer = {
  id: number;
  name: string;
  email: string;
  status: string;
  orders: number;
  spent: number;
};
type SortKey = keyof Customer | null;

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: "ascending" | "descending";
  }>({
    key: null,
    direction: "ascending",
  });
  const customerData = [
    {
      id: 1,
      name: "Emeka Okoli",
      email: "emekaokoli@gmail.com",
      status: "Active",
      orders: 35,
      spent: 10000,
    },
    {
      id: 2,
      name: "Olamide Ola",
      email: "olamideola@gmail.com",
      status: "Active",
      orders: 9,
      spent: 300,
    },
    {
      id: 3,
      name: "Pamela Anderson",
      email: "pamelaanderson@gmail.com",
      status: "Inactive",
      orders: 30,
      spent: 8800,
    },
    {
      id: 4,
      name: "Miguel Nigel",
      email: "miguelnigel@gmail.com",
      status: "Active",
      orders: 22,
      spent: 980,
    },
    {
      id: 5,
      name: "Jordan James",
      email: "jordanjames@gmail.com",
      status: "Active",
      orders: 23,
      spent: 1500,
    },
    {
      id: 6,
      name: "Ade Osas",
      email: "adeosas@gmail.com",
      status: "Inactive",
      orders: 5,
      spent: 410,
    },
    {
      id: 7,
      name: "Osahon Ogunlade",
      email: "osahonogunlade@gmail.com",
      status: "Active",
      orders: 10,
      spent: 890,
    },
    {
      id: 8,
      name: "Fenty fenti",
      email: "fentyfenti@gmail.com",
      status: "Active",
      orders: 7,
      spent: 660,
    },
  ];

  const summaryStats = useMemo(() => {
    const total = customerData.length;
    const active = customerData.filter((c) => c.status === "Active").length;
    const avgSpent =
      customerData.reduce((acc, curr) => acc + curr.spent, 0) / total;

    return {
      total,
      active,
      activePercentage: ((active / total) * 100).toFixed(0),
      avgSpent: avgSpent.toFixed(2),
    };
  }, []);

  const handleSort = (key: keyof Customer) => {
    setSortConfig((current) => {
      if (current.key === key) {
        return {
          ...current,
          direction:
            current.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return { key, direction: "ascending" };
    });
  };

  const filteredCustomers = useMemo(() => {
    let filtered = [...customerData];

    if (searchTerm) {
      filtered = filtered.filter(
        (customer) =>
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (customer) =>
          customer.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (sortConfig.key !== null) {
      const key = sortConfig.key;
      filtered.sort((a, b) => {
        if (a[key] < b[key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, sortConfig]);

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Customers
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Customers
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {summaryStats.total}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            Updated just now
          </p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Active Customers
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {summaryStats.active}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            {summaryStats.activePercentage}% of total
          </p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Spent</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${summaryStats.avgSpent}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            Per customer
          </p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Churn Rate</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            2.4%
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            Last 30 days
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-slate-800 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border px-10 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border px-4 py-2 text-gray-900 dark:bg-slate-900 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="rounded-lg border bg-white dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-slate-700">
                <th
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center gap-2">
                    Name
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">
                  Email
                </th>
                <th
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center gap-2">
                    Status
                    {sortConfig.key === "status" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </th>
                <th
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort("orders")}
                >
                  <div className="flex items-center gap-2">
                    Orders
                    {sortConfig.key === "orders" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </th>
                <th
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort("spent")}
                >
                  <div className="flex items-center gap-2">
                    Total Spent
                    {sortConfig.key === "spent" &&
                      (sortConfig.direction === "ascending" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-50 dark:hover:bg-slate-700"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">
                    ${customer.spent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
