function Navbar() {
  return (
    <>
      <div className="navbar fixed top-0 inset-x-0">
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
            <li onClick={() => {
              window.scrollTo(0,0)
            }}>
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
          <a href="#" className="text-3xl text-primary font-black text-center active:scale-90 transition-all" onClick={() => {
            window.scrollTo(0,0)
          }}>
            Landing
          </a>
        </div>
        <div className="navbar-end">
          <a className="btn btn-secondary btn-sm rounded-sm lg:px-16">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
