import React from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SearchIcon from "@mui/icons-material/Search";

const ACOperationLog = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <SouthEastIcon className="text-[#60cea4]" /> AC Opertaion Log
      </div>
      <div>
        <SearchIcon /> Search
      </div>
      <div className="bg-gray-200 text-[#60cea4] font-bold text-sm p-2">
        <span className="mr-10">SN</span>
        <span className="ml-10 mr-40">Time</span>
        <span className="ml-40">Description</span>
      </div>
      <div className="text-center border-y p-2 text-gray-400">There are no records currently</div>
      <div>Home Pre page Next page Last page Turn to page</div>
    </div>
  );
};

export default ACOperationLog;
