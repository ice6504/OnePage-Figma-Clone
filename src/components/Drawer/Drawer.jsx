import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import Headroom from "react-headroom";
import { useState } from "react";

function Drawer(props) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="drawer">
        <input
          id="my-drawer-1"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Headroom className="absolute inset-x-0">
            <Navbar />
          </Headroom>
          {/* Content */}
          <main>{children}</main>
        </div>
        {/* Drawer Sidebar */}
        <div className="drawer-side z-50 lg:hidden">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu py-6 px-4 w-80 min-h-full bg-blue-yonder-100 text-blue-yonder-500">
            {/* Sidebar content here */}
            <li>
              <a
                onClick={() => {
                  toggleDrawer();
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a onClick={toggleDrawer}>About</a>
            </li>
            <li>
              <a
                onClick={() => {
                  toggleDrawer();
                  window.scrollTo(0, document.body.scrollHeight);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Drawer.propTypes = { children: PropTypes.node };

export default Drawer;
