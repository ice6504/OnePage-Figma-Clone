import { useState } from "react";

function Navbar() {
  const [color, setColor] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  });

  return (
    <>
      <div
        className={`z-40 transition-all duration-200 ease-in-out  ${
          color ? "bg-blue-yonder-200 bg-opacity-50 backdrop-blur-sm" : null
        }`}
      >
        <nav className={`navbar max-w-screen-xl mx-auto`}>
          <div className="navbar-start max-[390px]:w-2/5">
            {/* Button Drawer Toggle */}
            <div className="lg:hidden">
              <label
                htmlFor="my-drawer-1"
                aria-label="open sidebar"
                className="btn btn-sm btn-ghost btn-square text-blue-yonder-500"
              >
                <i className="fa-solid fa-bars fa-xl"></i>
              </label>
            </div>
            <ul className="menu menu-horizontal px-1 text-blue-yonder-500 hidden lg:flex">
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-center">
            <a
              className="text-3xl text-primary font-black text-center active:scale-90 transition-all cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Landing
            </a>
          </div>
          <div className="navbar-end">
            <a className="btn btn-secondary btn-sm rounded-sm lg:px-16">
              Buy Now
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
