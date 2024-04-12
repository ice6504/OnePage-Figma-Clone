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
          <Headroom>
            <Navbar />
          </Headroom>
          <main className="xl:mt-[-5%]">{children}</main>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu py-6 px-4 w-80 min-h-full bg-blue-yonder-100 text-blue-yonder-500">
            {/* Sidebar content here */}
            <li
              onClick={() => {
                toggleDrawer();
                window.scrollTo(0, 0);
              }}
            >
              <a>Home</a>
            </li>
            <li onClick={toggleDrawer}>
              <a>About</a>
            </li>
            <li onClick={toggleDrawer}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Drawer.propTypes = { children: PropTypes.node };

export default Drawer;
