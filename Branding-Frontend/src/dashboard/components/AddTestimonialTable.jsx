import React from "react";
import { Settings } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import { FaCcStripe } from "react-icons/fa";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


const AddTestimonialTable = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath.split('/').filter(segment => segment);
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  return (
    <div className="h-screen bg-[#edf1f5]">
      <div className="flex flex-col bg-white p-10 m-3 w-90 rounded-sm ">
        <div className="flex flex-col  p-3 ">
          <div className="flex w-full justify-between items-center mb-4 ">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
                Question
              </label>
            </div>
            <div className="flex  flex-row justify-between w-3/4">
            <div className="border border-collapse-700  p-2 m-1">
             <input type="text" placeholder="Customer Name" className="w-full   outline-none"/>
            </div>
            <div className="flex items-center">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
                Designation
              </label>
            </div>
            <div className="border border-collapse-700  p-2 m-1">
             <input type="text" placeholder="CEO" className="w-full   outline-none"/>
            </div>


            </div>
            </div>
          </div>





          <div className="flex w-full justify-between items-start mb-4 ">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
                Testimonial
              </label>
            </div>
            <div className="border border-collapse-700 w-3/4 p-2 m-1">
             <textarea type="text" rows={4} placeholder="What Customer says " className="w-full   outline-none"/>
            </div>
          </div>
          
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 rounded">
            Submit
          </button>
          <button className="bg-slate-300 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonialTable;

