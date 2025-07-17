import { useTheme } from "@/hooks/useTheme";
import { useAppDispatch } from "@/store/hooks";
import { setDarkMode } from "@/store/ui-slice/theme-slice";
import { Lock, Palette } from "lucide-react";

const Settings = () => {
  const dispatach = useAppDispatch();
  const theme = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as "light" | "dark";
    dispatach(setDarkMode(selectedTheme));
  };
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl md:text-2xl font-medium md:font-bold mb-6">
        Customers
      </h1>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Lock size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Security Settings
            </p>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Current Password
              </label>
              <input
                type="password"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter current password"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                New Password
              </label>
              <input
                type="password"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter new password"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Confirm New Password
              </label>
              <input
                type="password"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Confirm new password"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Palette size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Appearance
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Theme
              </label>
              <select
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                value={theme}
                onChange={handleThemeChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
