import './App.css'

function App() {

  return (
    <>
      Muhammad Hasan Branding Hopes
    </>
  )
}

export default App



// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { useState } from "react";
// import Nav from "./Components/Navbar/Nav";
// import MobileNav from "./Components/MobileNav/MobileNav";
// import HomePage from "./Pages/HomePage/HomePage";
// import Footer from "./Components/Footer/Footer";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
// import BlogPage from "./Pages/BlogPage/BlogPage";
// // import GetConsultant from "./Pages/GetConsultPage/GetConsultant";
// import Portfolio from "./Pages/PortfolioPage/Portfolio";
// import Service from "./Pages/ServicesPage/Service";
// import AllServices from "./Pages/Services/AllServices";

// const Layout = () => {
//   const [nav, setNav] = useState(false);
//   const openNav = () => setNav(true);
//   const closeNav = () => setNav(false);
//   return (
//     <div className="app">
//       <MobileNav nav={nav} closeNav={closeNav} />
//       <Nav openNav={openNav} />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/about",
//         element: <AboutPage />,
//       },
//       {
//         path: "/services",
//         element: <AllServices />,
//       },
//       {
//         path: "/portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "/contact",
//         element: <ContactPage />,
//       },
//       {
//         path: "/blog",
//         element: <BlogPage />,
//       },
//       // {
//       //   path: "/getConsultancy",
//       //   element: <GetConsultant />,
//       // },
//       {
//         path: "/services/:id",
//         element: <Service />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;


