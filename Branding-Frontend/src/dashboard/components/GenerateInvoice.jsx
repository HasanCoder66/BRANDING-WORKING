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


const GenerateInvoice = () => {
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
      <div className="flex items-center justify-between font-bold text-3xl text-[#CECECE] p-5 bg-white">
        <div className="flex">
          <FaCcStripe style={{ fontSize: "35px", marginRight: "10px" }} />
          Generate Invoice
        </div>
        <div>
          {/* <Link to="/home">{currentPath}</Link> */}
          <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex">
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLastSegment = index === pathSegments.length - 1;
          const className = isLastSegment ? 'breadcrumb-item active' : 'breadcrumb-item';

          return (
            <li key={path} className="breadcrumb-item">
              <Link to={path} style={isLastSegment ? { color: '#fca389' } : {}}>{segment}/</Link>
            </li>
          );
        })}
      </ol>
    </nav>
        </div>
      </div>
      <div className="flex flex-col bg-white p-10 m-5 w-90 rounded-sm ">
        <div className="flex flex-row  p-3 ">
          <div className="flex w-full items-center  mb-4 ">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500 mr-3"
              >
                Appointment #
              </label>
            </div>
            <div className="flex flex-col">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 500 , padding: "0px" }}
                renderInput={(params) => (
                  <TextField {...params} label="Please Select" />
                )}
              />
            </div>
          </div>
          <div className="flex w-1/5 items-center justify-center mb-4">
            <div className=" text-center">
              <label
                htmlFor="oldPassword"
                className="text-sm font-bold text-slate-500"
              >
                Price
              </label>
            </div>
            <div className="flex flex-col item-center">
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start" >$</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
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

export default GenerateInvoice;
