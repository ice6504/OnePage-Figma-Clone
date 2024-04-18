function Footer() {
  return (
    <>
      <footer className="footer gap-y-5 sm:gap-y-10 footer-center bg-blue-yonder-100 max-2xl:mt-[-2%] pt-10 pb-5 sm:px-10 lg:px-32">
        <nav className="flex justify-between items-center w-full px-5 max-sm:flex-wrap max-sm:gap-5 max-sm:justify-evenly sm:py-5">
          <h6 className="font-medium text-sm mb-0 text-gray-nevada-400 ">
            ©2023 Yourcompany
          </h6>
          <a
            className="text-3xl text-primary font-black text-center active:scale-90 transition-all cursor-pointer max-sm:order-last"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Landing
          </a>
          <button className="btn btn-secondary btn-sm rounded-sm">
            Purchase Now
          </button>
        </nav>
        <nav className="flex justify-between items-center w-full max-sm:flex-col sm:pt-5 sm:border-t-2 border-gray-nevada-200">
          <ul className="menu menu-horizontal gap-8 text-blue-yonder-300">
            <li>
              <a
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="menu menu-horizontal items-center gap-4 text-gray-nevada-300">
            <li>
              <a href="">
                <i className="fa-brands fa-facebook-f fa-lg py-3"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin-in fa-lg py-3"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-twitter fa-lg py-3"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-youtube fa-lg py-3"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram fa-lg py-3"></i>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
