// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
//   useLocation,
// } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/HomePage/Home";
// import Portfolio from "./pages/PortfolioPage/Portfolio";
// import Blog from "./pages/BlogPage/Blog";
// import Contact from "./pages/ContactPage/Contact";
// import About from "./pages/AboutPage/About";
// import { Footer, MobileNav, Nav } from "./components";
// import AllServices from "./pages/ServicesPage/Services";
// import Packages from "./pages/PackagesPage/Packages";
// import Signup from "./pages/SignupPage/Signup";
// import Login from "./pages/LoginPage/Login";
// import AllBlog from "./pages/AllBlogPage/AllBlog";

// const Layout = () => {
//   const [nav, setNav] = useState(false);
//   const openNav = () => setNav(true);
//   const closeNav = () => setNav(false);

//   const location = useLocation(); // Current path ko get karta hai
//   const hideNavAndFooter = ["/signup", "/login"]; // Pages jahan Nav aur Footer nahi dikhana

//   return (
//     <div className="app">
//       <MobileNav nav={nav} closeNav={closeNav} />
//       {!hideNavAndFooter.includes(location.pathname) && (
//         <Nav openNav={openNav} />
//       )}{" "}
//       {/* Nav sirf un pages pe dikhao jo hideNavAndFooter me nahi hain */}
//       <Outlet />
//       {!hideNavAndFooter.includes(location.pathname) && <Footer />}{" "}
//       {/* Footer sirf un pages pe dikhao jo hideNavAndFooter me nahi hain */}
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
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
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
//         element: <Contact />,
//       },
//       {
//         path: "/blog",
//         element: <Blog />,
//       },
//       {
//         path: "/all-blogs",
//         element: <AllBlog />,
//       },
//       {
//         path: "/packages/:id",
//         element: <Packages />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
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


















































// import React from 'react'; // Import React
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
//   useLocation,
// } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/HomePage/Home";
// import Portfolio from "./pages/PortfolioPage/Portfolio";
// import Blog from "./pages/BlogPage/Blog";
// import Contact from "./pages/ContactPage/Contact";
// import About from "./pages/AboutPage/About";
// import AllServices from "./pages/ServicesPage/Services";
// import Packages from "./pages/PackagesPage/Packages";
// import Signup from "./pages/SignupPage/Signup";
// import Login from "./pages/LoginPage/Login";
// import AllBlog from "./pages/AllBlogPage/AllBlog";
// import Footer from "./components/Footer";
// import GenerateInvoice from "./dashboard/components/GenerateInvoice";
// import PasswardSetting from "./dashboard/components/PasswardSetting";
// import AllInvoices from "./dashboard/pages/AllInvoices";
// import CompletedInvoices from "./dashboard/pages/CompletedInvoices";
// import Sidebar from "./dashboard/components/Sidebar";
// import ReorderProducts from "./dashboard/pages/ReorderProducts";
// import PendingInvoices from "./dashboard/pages/PendingInvoices";
// import AllAppointments from "./dashboard/pages/AllAppointments";
// import PendingAppointments from "./dashboard/pages/PendingAppointments";
// import CompAppList from "./dashboard/pages/CompAppList";
// import ApprovedAppointments from "./dashboard/pages/ApprovedAppointments";
// import RejectedAppointments from "./dashboard/pages/RejectedAppointments";
// import { Nav } from './components';
// import DashboardHome from './dashboard/pages/DashboardHome';


// // Layout for the main website pages
// const WebLayout = () => {
//   const [nav, setNav] = useState(false);
//   const openNav = () => setNav(true);
//   const closeNav = () => setNav(false);
  
//   const location = useLocation(); // Get current path
//   const hideNavAndFooter = ["/signup", "/login"]; // Pages where Nav and Footer won't be displayed

//   return (
//     <div className="app">
//       {/* MobileNav and Nav components */}
//       {/* Add MobileNav component if needed */}
//       {!hideNavAndFooter.includes(location.pathname) && (
//         <Nav openNav={openNav} />
//       )}
//       <Outlet />
//       {!hideNavAndFooter.includes(location.pathname) && <Footer />}
//     </div>
//   );
// };

// // Layout for the dashboard
// const DashboardLayout = () => {
//   return (
//     <>
//       <div className="overflow-hidden">
//         <Nav />
//         <div className="flex">
//           <Sidebar />
//           <main className="flex-1 bg-gray-100 ">
//             <Outlet />
//           </main>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <WebLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/services", element: <AllServices /> },
//       { path: "/portfolio", element: <Portfolio /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/blog", element: <Blog /> },
//       { path: "/all-blogs", element: <AllBlog /> },
//       { path: "/packages/:id", element: <Packages /> },
//       { path: "/signup", element: <Signup /> },
//       { path: "/login", element: <Login /> },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardLayout />,
//     children: [
//       { path: "/dashboard/home", element: <DashboardHome /> }, // You may want to replace this with the appropriate dashboard home component
//       { path: "/dashboard/allinvoices", element: <AllInvoices /> },
//       { path: "/dashboard/pendinginvoices", element: <PendingInvoices /> },
//       { path: "/dashboard/completedinvoices", element: <CompletedInvoices /> },
//       { path: "/dashboard/accountsetting", element: <PasswardSetting /> },
//       { path: "/dashboard/generateinvoice", element: <GenerateInvoice /> },
//       { path: "/dashboard/reorderproducts", element: <ReorderProducts /> },
//       { path: "/dashboard/allappointments", element: <AllAppointments /> },
//       { path: "/dashboard/pendingappointments", element: <PendingAppointments /> },
//       { path: "/dashboard/completedappointments", element: <CompAppList /> },
//       { path: "/dashboard/approvedappointments", element: <ApprovedAppointments /> },
//       { path: "/dashboard/rejectedappointments", element: <RejectedAppointments /> },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

































import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/HomePage/Home";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import Blog from "./pages/BlogPage/Blog";
import Contact from "./pages/ContactPage/Contact";
import About from "./pages/AboutPage/About";
import AllServices from "./pages/ServicesPage/Services";
import Packages from "./pages/PackagesPage/Packages";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import AllBlog from "./pages/AllBlogPage/AllBlog";
import Footer from "./components/Footer";
import GenerateInvoice from "./dashboard/components/GenerateInvoice";
import PasswardSetting from "./dashboard/components/PasswardSetting";
import AllInvoices from "./dashboard/pages/AllInvoices";
import CompletedInvoices from "./dashboard/pages/CompletedInvoices";
import Sidebar from "./dashboard/components/Sidebar";
import ReorderProducts from "./dashboard/pages/ReorderProducts";
import PendingInvoices from "./dashboard/pages/PendingInvoices";
import AllAppointments from "./dashboard/pages/AllAppointments";
import PendingAppointments from "./dashboard/pages/PendingAppointments";
import CompAppList from "./dashboard/pages/CompAppList";
import ApprovedAppointments from "./dashboard/pages/ApprovedAppointments";
import RejectedAppointments from "./dashboard/pages/RejectedAppointments";
import { Nav } from './components';
import DashboardHome from './dashboard/pages/DashboardHome';
import DashboardFooter from './dashboard/components/DashboardFooter';
import DashboardNavbar from './dashboard/components/DashboardNavbar';

// Layout for the main website pages
const WebLayout = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  
  const location = useLocation(); // Get current path
  const hideNavAndFooter = ["/signup", "/login"]; // Pages where Nav and Footer won't be displayed

  return (
    <div className="app">
      {/* MobileNav and Nav components */}
      {/* Add MobileNav component if needed */}
      {!hideNavAndFooter.includes(location.pathname) && (
        <Nav openNav={openNav} />
      )}
      <Outlet />
      {!hideNavAndFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

// Layout for the dashboard
const DashboardLayout = () => {
  return (
    <div className="overflow-hidden">
      <DashboardNavbar /> {/* You can customize the Nav for the dashboard */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <DashboardFooter /> {/* You can customize the Footer for the dashboard */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <AllServices /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/all-blogs", element: <AllBlog /> },
      { path: "/packages/:id", element: <Packages /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/home", element: <DashboardHome /> }, 
      { path: "/dashboard/allinvoices", element: <AllInvoices /> },
      { path: "/dashboard/pendinginvoices", element: <PendingInvoices /> },
      { path: "/dashboard/completedinvoices", element: <CompletedInvoices /> },
      { path: "/dashboard/accountsetting", element: <PasswardSetting /> },
      { path: "/dashboard/generateinvoice", element: <GenerateInvoice /> },
      { path: "/dashboard/reorderproducts", element: <ReorderProducts /> },
      { path: "/dashboard/allappointments", element: <AllAppointments /> },
      { path: "/dashboard/pendingappointments", element: <PendingAppointments /> },
      { path: "/dashboard/completedappointments", element: <CompAppList /> },
      { path: "/dashboard/approvedappointments", element: <ApprovedAppointments /> },
      { path: "/dashboard/rejectedappointments", element: <RejectedAppointments /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
