import React from "react";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <div className="bg-blue-400 dark:bg-slate-600">
      <div className="flex justify-between">
        <div>LOGO</div>
        <div>{/* <Toggle /> */}</div>
      </div>
    </div>
  );
};

export default Navbar;
