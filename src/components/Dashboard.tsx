import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsCard, Snackbar } from "./common";
import { resetStatus, logout } from "../redux/authSlice";
import { DashboardIcon, SignoutIcon, DrawerMenuIcon } from "../assests/index";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { status, user } = useSelector((state: any) => state.auth);
  const {
    name: userName,
    id: userID,
    job: userJob,
    createdAt: userCreatedDate,
    token: userToken,
  } = user;

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/signin", { replace: true });
  };

  return (
    <>
      {status === "succeeded" && (
        <Snackbar
          type="succeeded"
          message={`${
            userToken
              ? `Welcome Back 🔓 ${userToken}`
              : `Hey ${userName} your account is successfully created! 🥳`
          }`}
          onClose={() => dispatch(resetStatus())}
        />
      )}
      <div>
        <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  aria-controls="logo-sidebar"
                  type="button"
                  onClick={toggleSidebar}
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <DrawerMenuIcon className="w-6 h-6" />
                </button>
                <div className="flex ms-2 md:me-24">
                  <img
                    src="https://media.glassdoor.com/sqll/919385/webreinvent-technologies-squarelogo-1633085146199.png"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    webreinvent
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative flex items-center ms-3">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded={isDropdownOpen}
                    aria-controls="dropdown-user"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user snap"
                    />
                  </button>
                  <div
                    className={`absolute right-0 mt-36 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                      isDropdownOpen ? "block" : "hidden"
                    }`}
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        {userName ? userName : userToken}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        {userID}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <div className="flex items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <DashboardIcon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">Dashboard</span>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center cursor-pointer p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={handleSignOut}
                >
                  <SignoutIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign out
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        {userToken ? (
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <span className="text-2xl font-extrabold tracking-tight">
                {userToken}
              </span>
            </div>
          </div>
        ) : (
          <DetailsCard
            name={userName}
            ID={userID}
            job={userJob}
            joiningDate={userCreatedDate}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
