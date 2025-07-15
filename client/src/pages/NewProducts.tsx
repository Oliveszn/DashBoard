import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PackagePlus, UploadCloud } from "lucide-react";

const NewProducts = () => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        New Products
      </h1>

      <div className="bg-white shadow-md rounded-lg py-8 px-6 border border-slate-200 dark:border-slate-700 dark:bg-slate-800">
        <div className="">
          <div className="flex items-center gap-x-3  mb-4">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <PackagePlus size={26} />
            </div>
            <h2 className="text-xl font-medium">Add New Product</h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-y-3 w-full max-w-sm  ">
              <Label htmlFor="product">Email</Label>
              <Input
                type="text"
                id="product"
                placeholder="Enter Product Name"
                className="px-4 h-10 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-3 w-full max-w-sm  ">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                placeholder="Enter Price"
                className="px-4 h-10 focus:outline-none"
              />
            </div>

            <div className="col-span-2 w-full gap-y-3 flex flex-col mt-6">
              <Label htmlFor="message">Description</Label>
              <Textarea
                placeholder="Enter Product Description"
                id="message"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-y-3 col-span-2 mt-6">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Product Image
              </label>
              <div className="flex items-center justify-center w-full h-32 rounded-lg border border-dashed border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900 cursor-pointer hover:border-blue-500 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="product-image"
                />
                <label
                  htmlFor="product-image"
                  className="flex flex-col items-center gap-y-2 cursor-pointer text-slate-500 dark:text-slate-400"
                >
                  <UploadCloud size={24} />
                  <span className="text-sm">
                    Click to upload or drag and drop
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 col-span-2"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
