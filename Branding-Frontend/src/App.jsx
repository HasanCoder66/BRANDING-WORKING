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
import { Footer, MobileNav, Nav } from "./components";
import AllServices from "./pages/ServicesPage/Services";
import Packages from "./pages/PackagesPage/Packages";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import AllBlog from "./pages/AllBlogPage/AllBlog";

const Layout = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const location = useLocation(); // Current path ko get karta hai
  const hideNavAndFooter = ["/signup", "/login"]; // Pages jahan Nav aur Footer nahi dikhana

  return (
    <div className="app">
      <MobileNav nav={nav} closeNav={closeNav} />
      {!hideNavAndFooter.includes(location.pathname) && (
        <Nav openNav={openNav} />
      )}{" "}
      {/* Nav sirf un pages pe dikhao jo hideNavAndFooter me nahi hain */}
      <Outlet />
      {!hideNavAndFooter.includes(location.pathname) && <Footer />}{" "}
      {/* Footer sirf un pages pe dikhao jo hideNavAndFooter me nahi hain */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/all-blogs",
        element: <AllBlog />,
      },
      {
        path: "/packages/:id",
        element: <Packages />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
