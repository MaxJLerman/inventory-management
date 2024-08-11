"use client";

import { Menu } from "lucide-react";

export const Sidebar = () => {
  return (
    <div>
      <div
        className={
          "flex gap-3 justify-between md:justify-normal items-center pt-8"
        }
      >
        <div>logo</div>
        <h1 className={"font-extrabold text-2xl uppercase"}>oùesmastuff</h1>
        <button
          className={
            "md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          }
          onClick={() => {}}
        >
          <Menu className={"w-4 h-4"} />
        </button>
      </div>
      <div className={"flex-grow mt-8"}></div>
      <div>
        <p className={"capitalize text-center text-xs text-gray-500"}>
          &copy; 2024 oùesmastuff
        </p>
      </div>
    </div>
  );
};
