// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";

// export default function TestimonialCard() {
//   return (
//     <>
     
//     </>
//   );
// }




// import React from "react";
// import { Box, Avatar, Typography } from "@mui/material";

// const testimonials = [
//   {
//     name: "Ayesha Khan",
//     title: "CEO, TechCorp",
//     message:
//       "BrandingHopes ne hamari website ko ek nayi pehchaan di. Inki design aur development team bohot hi zabardast hai!",
//     avatar: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     name: "Ali Raza",
//     title: "Founder, StartX",
//     message:
//       "I am super impressed with the quality and professionalism. Highly recommend BrandingHopes for any digital project.",
//     avatar: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     name: "Sara Malik",
//     title: "Marketing Head, Innovate",
//     message:
//       "Their attention to detail and creativity exceeded our expectations. We loved working with BrandingHopes!",
//     avatar: "https://i.pravatar.cc/100?img=3",
//   },
// ];

// const TestimonialSection = () => {
//   return (
//     <Box className="py-10 px-4 max-w-7xl mx-auto">
//       <Typography variant="h4" className="text-center font-bold mb-8 dark:text-white">
//         What Our Clients Say
//       </Typography>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {testimonials.map((item, index) => (
//           <Box
//             key={index}
//             className="bg-white dark:bg-darkCard rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full transition transform hover:-translate-y-1 hover:shadow-xl"
//           >
//             <Typography variant="body1" className="mb-4 text-gray-700 dark:text-gray-300">
//               "{item.message}"
//             </Typography>
//             <div className="flex items-center mt-4">
//               <Avatar src={item.avatar} alt={item.name} className="w-12 h-12 mr-3" />
//               <div>
//                 <Typography variant="subtitle1" className="font-semibold dark:text-white">
//                   {item.name}
//                 </Typography>
//                 <Typography variant="caption" className="text-gray-500 dark:text-gray-400">
//                   {item.title}
//                 </Typography>
//               </div>
//             </div>
//           </Box>
//         ))}
//       </div>
//     </Box>
//   );
// };

// export default TestimonialSection;


//  <Card
//         shadow={false}
//         className="w-full sm:max-w-[20rem] md:max-w-[60rem] lg:max-w-[76rem] mt-[4rem]"
//       >
//         <CardHeader
//           floated={false}
//           shadow={false}
//           className="mx-0 flex items-center gap-4 pt-0 pb-8 pl-[10px]"
//         >
//           <Avatar
//             width={1480}
//             height={1480}
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//             alt="tania andrew"
//             className="rounded-full w-[100px] h-[100px] border-[4px] border-[#fca311]"
//           />
//           <div className="flex w-full flex-col gap-0.5">
//             <div className="flex items-center ">
//               <Typography variant="h5" color="blue-gray">
//                 Alexendra
//               </Typography>
//             </div>
//             <Typography color="blue-gray">CEO of Webdeezien</Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="mb-6 px-5">
//           <Typography>
//             Creative Tim has been a game-changer for all my design projects!
//             Their templates are top-notch, and they've made my freelance work so
//             much easier and enjoyable. Plus, the pricing is super affordable,
//             and the team is incredibly supportive and humble. Highly recommend!
//             🎨🙌
//             {/* &quot; */}
//           </Typography>
//         </CardBody>
//       </Card>

//       <Card
//         shadow={false}
//         className="w-full sm:max-w-[20rem] md:max-w-[60rem] lg:max-w-[76rem] mt-[4rem]"
//       >
//         <CardHeader
//           floated={false}
//           shadow={false}
//           className="mx-0 flex items-center gap-4 pt-0 pb-8 pl-[10px]"
//         >
//           <Avatar
//             width={400}
//             height={400}
//             src="https://media.licdn.com/dms/image/v2/D5603AQHAN2xQnQGNSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686194483238?e=1731542400&v=beta&t=pZZNO3hpHxTjv578NUkCz0oJJjVEaqActK2MWiI3dD8"
//             alt="tania andrew"
//             className="rounded-full w-[100px] h-[100px] border-[4px] border-[#fca311]"
//           />
//           <div className="flex w-full flex-col gap-0.5">
//             <div className="flex items-center ">
//               <Typography variant="h5" color="blue-gray">
//                 Tania Andrew
//               </Typography>
//             </div>
//             <Typography color="blue-gray">Frontend Lead @ Google</Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="mb-6 px-5">
//           <Typography>
//             I found solution to all my design needs from Creative Tim. I use
//             them as a freelancer in my hobby projects for fun! And its really
//             affordable, very humble guys !!!
//           </Typography>
//         </CardBody>
//       </Card>