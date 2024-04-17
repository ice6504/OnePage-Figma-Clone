import heroImage from "../../assets/img/herosection/designer_1.svg";

function Header() {
  return (
    <header>
      <div
        className="max-[390px]:h-[68svh] h-[55svh] sm:h-[80svh] xl:h-[120svh] 2xl:h-[155lvh] bg-cover sm:bg-contain bg-left-bottom sm:bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="h-full max-h-screen">
          <div className="max-w-screen-xl mx-auto h-full max-[390px]:pb-4 pb-10 sm:pb-20 lg:pb-14 xl:pb-16 2xl:pb-2 max-xl:px-5 grid xl:content-end place-content-center">
            <div className="card max-[390px]:w-2/3 w-1/2 gap-2 sm:gap-6">
              <h1 className="font-medium max-[400px]:text-sm text-lg sm:text-3xl lg:text-[2.5rem] xl:text-6xl text-blue-yonder-900">
                Introduce Your Product <br /> Quickly & Effectively
              </h1>
              <p className="w-3/4 max-sm:text-xs text-blue-yonder-500 max-[390px]:line-clamp-4 max-sm:line-clamp-6 max-xl:line-clamp-[7] tracking-wide leading-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="flex gap-4 sm:gap-8 mt-4 sm:mt-10">
                <button className="btn btn-xs sm:btn-sm btn-secondary rounded-sm w-28 max-sm:h-7 sm:w-44 font-medium">
                  Purchase UI Kit
                </button>
                <button className="btn btn-xs sm:btn-sm btn-outline border-2 border-secondary btn-secondary rounded-sm w-28 max-sm:h-7 sm:w-44 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
