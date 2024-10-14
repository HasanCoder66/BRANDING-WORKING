import React, { useState } from "react";
import { MdOutlineDashboard, MdGroups, MdLogout } from "react-icons/md";
import { FaCcStripe, FaCalendarCheck } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menus = [
  { title: "Dashboard", src: "home", icon: <MdOutlineDashboard /> },
  {
    title: "Invoices",
    icon: <FaCcStripe />,
    subMenus: [
      { title: "All Invoices List", src: "allinvoices" },
      { title: "Pending Invoices List", src: "pendinginvoices" },
      { title: "Completed Invoices List", src: "completedinvoices" },
      { title: "Generate Invoice", src: "generateinvoice" },
    ],
    isOpen: false,
  },
  {
    title: "Appointments",
    src: "Services",
    icon: <FaCalendarCheck />,
    subMenus: [
      { title: "All Appointments List", src: "allappointments" },
      { title: "Pending Appointments List", src: "pendingappointments" },
      { title: "Approved Appointments", src: "approvedappointments" },
      { title: "Completed Appointments", src: "completedappointments" },
      { title: "Rejected Appointments", src: "rejectedappointments" },
    ],
    isOpen: false,
  },
  {
    title: "Products",
    src: "Services",
    icon: <MdGroups />,
    subMenus: [
      { title: "Products List", src: "allproducts" },
      { title: "Add Product", src: "addpro" },
      { title: "Recoder Products", src: "reorderproducts" },
    ],
    isOpen: false,
  },

  { title: "Logout", src: "Logout", icon: <MdLogout /> },
];

const App = () => {
  const [Menu, SetMenu] = useState(Menus);
  const [open, setOpen] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const setSubMenuOpen = (index) => {
    SetMenu((prevMenus) =>
      prevMenus.map((menu, i) => {
        if (i === index) {
          return { ...menu, isOpen: !menu.isOpen };
        }
        return menu;
      })
    );
  };

  const handleSubMenuClick = (subMenuSrc) => {
    setActiveSubMenu(subMenuSrc);
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#14213d] hover:text-[#fca311] text-white flex items-end justify-end mt-[85px] ">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300"
        onClick={toggleSidebar}
      >
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={`${
          open ? "w-50 px-2" : "w-0"
        } lg:w-72 bg-white-600 h-full relative duration-500`}
      >
        <ul className="pt-2">
          {Menu.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`flex rounded-md p-2 font-semibold cursor-pointer hover:text-[#fca311]  text-xl items-center gap-x-4 ${
                  menu.gap ? "mt-9" : "mt-2"
                }`}
              >
                {menu.icon ? menu.icon : <MdOutlineDashboard />}
                <span className="flex-1">
                  <Link to={menu.src}>{menu.title}</Link>
                </span>
                {menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(index)}
                    className={`${menu.isOpen && "rotate-180"}`}
                  />
                )}
              </li>
              {menu.subMenus && menu.isOpen && open && (
                <ul>
                  {menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className={`flex cursor-pointer hover:text-fuchsia-400 text-md py-2 px-11 ${
                        activeSubMenu === subMenuItem.src
                          ? "text-hot"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleSubMenuClick(subMenuItem.src)}
                    >
                      <Link to={subMenuItem.src}>{subMenuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
