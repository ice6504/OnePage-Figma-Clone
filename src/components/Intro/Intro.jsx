import mobile from "../../assets/img/section2/undraw_mobile_login_ikmv.svg";
import IconCard from "./IconCard";

function Intro() {
  return (
    <>
      <div className="xl:h-screen max-[390px]:py-5 py-10 sm:max-xl:py-5 xl:py-20">
        <div className="grid place-items-center max-xl:grid-rows-4 xl:grid-rows-2 grid-flow-col gap-3 sm:gap-10 xl:gap-x-10 h-full">
          <div className="size-full row-span-1 xl:col-span-2 max-xl:order-none">
            <div className="h-full flex flex-col justify-center gap-5 px-5">
              <h2 className="font-medium text-blue-yonder-900 text-4xl max-[400px]:text-3xl">
                Light, Fast & Powerful
              </h2>
              <p className="text-blue-yonder-400 leading-7 tracking-wider max-sm:line-clamp-3 max-sm:text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                <br /> mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className="size-full row-span-1 xl:col-span-2 max-xl:order-last grid grid-cols-2">
            <IconCard />
            <IconCard />
          </div>
          <figure className="row-span-2 xl:col-span-2">
            <img className="h-full" src={mobile} alt="" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Intro;
