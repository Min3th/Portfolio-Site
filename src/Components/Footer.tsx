import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center bg-gray-50 py-12 text-gray-900 dark:bg-black dark:text-white border-t border-gray-200 dark:border-gray-900">
      <div className="text-2xl font-bold tracking-tight">Built With</div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          React
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          TypeScript
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          Tailwind CSS
        </span>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          HTML5
        </span>
      </div>
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Mineth Weerasinghe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
