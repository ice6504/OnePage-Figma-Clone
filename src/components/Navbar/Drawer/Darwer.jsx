import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import { useState } from "react";

function Darwer(props) {
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
          <Navbar />
          <main>{children}</main>
        </div>
        <div className="drawer-side">
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

Darwer.propTypes = { children: PropTypes.node };

export default Darwer;
