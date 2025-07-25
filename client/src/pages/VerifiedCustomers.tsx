import { LoaderCircle } from "lucide-react";

const VerifiedCustomers = () => {
  return (
    <div className="mx-auto container">
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Verified Customers
      </h1>
      <section>
        <div className="relative h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <LoaderCircle className="size-12 rounded-full animate-spin" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifiedCustomers;
