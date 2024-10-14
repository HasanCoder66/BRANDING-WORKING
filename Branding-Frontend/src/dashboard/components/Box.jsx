import React from "react";

const Box = ({ title, icon, value }) => {
  const getColorClass = (title) => {
    switch (title) {
      case "TOTAL INVOICE GENERATED":
        return "";
      case "TOTAL APPOINTMENTS":
        return "bg-green-500";
      case "TOTAL PHYSICIANS":
        return "";
      case "TOTAL PATIENTS":
        return "";
      default:
        return "text-sky-500";
    }
  };

  return (
    <div className="p-3 bg-white rounded-sm h-[160px]">
      <h6 className="text-xs font-bold">{title}</h6>
      <div className="flex justify-between items-center">
        <span className="p-1 rounded-md my-5 font-bold">{icon}</span>
        <span className="text-3xl font-semibold">{value}</span>
      </div>
    </div>
  );
};
export default Box;
