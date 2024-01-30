import { useContext, useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlNotebook, SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsChat, BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line, RiProductHuntFill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdVerticalDistribute } from "react-icons/md";
import swift from '../assets/image/swift.png'
import { AppContext } from "../context/Dashboard";

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen, isTablet } = useContext(AppContext)

  // check on useRef
  const sidebarRef = useRef();
  // this is useParams
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTablet) {
      setSideBarOpen(false)
    } else {
      setSideBarOpen(true)
    }
  }, [isTablet]);



  const overlayClicked = () => {
    setSideBarOpen(false)
  }


  useEffect(() => {
    isTablet && setSideBarOpen(false);
  }, [pathname]);

  const Nav_animation = isTablet
    ? {
      open: {
        x: 0,
        width: "13rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

  return (
    <div className=" absolute">
      <div onClick={() => overlayClicked()} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-gray-500  opacity-30 ${sideBarOpen ? "block" : "hidden"} `}></div>

      <motion.div ref={sidebarRef} variants={Nav_animation} initial={{ x: isTablet ? -250 : 0 }} animate={sideBarOpen ? "open" : "closed"} className="shadow-xl md:z-[9] z-[9999] max-w-[16rem]  w-[16rem] fixed top-0 left-0 h-screen">

      <div className="flex items-center gap-2.5 font-medium bg-white border-b py-4  text-white" >
      <img src={swift} alt="" />
        
      </div>

        <div className="flex flex-col text-4xl bg-white text-black h-full">
          <ul className=" px-2.5 text-[0.9rem] py-5 flex flex-col gap-2  font-serif   dark:scrollbar-track-slate-400  dark:scrollbar-thumb-slate-700  md:h-[78%] h-[75%]">
          <li>
              <NavLink to={"/layout/home"} className="link flex   gap-8  hover:rounded hover:text-black">
                <AiOutlineAppstore size={23} className="mt-2 min-w-max" />
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layout/allapp"} className="link flex gap-8 hover:text-green-700 ">
                <AiOutlineAppstore size={23} className="mt-2 min-w-max" />
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layout/authentication"} className="link flex gap-8 hover:text-green-700">
                <BsPerson size={23} className="mt-2 min-w-max" />
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stroage"} className="link flex gap-8 hover:text-green-700">
                <HiOutlineDatabase size={23} className="mt-2 min-w-max" />
                Storage
              </NavLink>
            </li>
            {/* test routeless */}
            <li>
              <NavLink to={"/post"} className="link flex gap-8 hover:text-green-700">
                <SlNotebook size={23} className="mt-2 min-w-max" />
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to={"/product"} className="link flex gap-8 hover:text-green-700">
                <RiProductHuntFill size={23} className="mt-2 min-w-max" />
                Product
              </NavLink>
            </li>
            

            {/* {(sidebarOpen || isTablet) && ( */}
            <div className="border-y py-5 dark:border-slate-600 md:border-slate-300 ">
              {
                (sideBarOpen || isTablet) &&
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
              }
            </div>

            <li>
              <NavLink to={"/settings"} className="link flex gap-8 hover:bg-white hover:rounded hover:text-black">
                <SlSettings size={23} className="mt-2 min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>

          {sideBarOpen && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y dark:border-slate-600 border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}</div>
      
      </motion.div>

    </div>
  );
};

export default Sidebar;
