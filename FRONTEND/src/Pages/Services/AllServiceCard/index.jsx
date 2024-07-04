import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "../../../Components/ButtonNew/Button";

function AllServiceCardCmp({ data }) {
  // console.log(data, "data from service card");
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={data?.imgUrl}
        title={data?.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography sx={{ minHeight: 80 }} variant="body2" color="text.secondary">
          {data?.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button text={data?.buttonContent} link={data?.link} />
      </CardActions>
    </Card>
  );
}

export default AllServiceCardCmp;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

//  function ServiceCard() {
//   return (
//     <div className="w-[100%]">
//       <div className="p-4 w-[82%] mr-[1rem]">
//         <div className="bg-white shadow-md rounded-md overflow-hidden">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt=""
//             className="w-full h-40 object-cover object-center"
//           />
//           <div className="p-4">
//             <p className="text-gray-700">
//               We are providing you with web development services to make work
//               easier through online.
//             </p>
//             <div className="flex justify-between items-center mt-4">
//               <div className="space-x-2 ">
//                 <button className="cursor-pointer btn">
//                   <span>View</span>
//                 </button>
//                 <button className="cursor-pointer btn">
//                   <span>Edit</span>
//                 </button>
//               </div>
//               <small className="text-[#2c2e48]">9 mins</small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiceCard
