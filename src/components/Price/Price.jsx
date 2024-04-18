import rectangle from "../../assets/img/section6/rectangle.svg";

function Price() {
  return (
    <>
      <div
        className="h-[80svh] sm:h-screen bg-no-repeat bg-cover bg-center grid place-items-center"
        style={{ backgroundImage: `url(${rectangle})` }}
      >
        <div className="flex flex-col items-center w-full sm:w-2/3 lg:w-1/2">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-medium text-blue-yonder-900">
              A Price To Suit Everyone
            </h2>
            <p className="text-blue-yonder-400 tracking-wide sm:tracking-widest px-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
          </div>
          <div className="my-10 space-y-2 text-center">
            <p className="text-blue-yonder-700 text-5xl sm:text-6xl font-medium">
              $40
            </p>
            <p className=" text-blue-yonder-600 ">UI Design Kit</p>
          </div>
          <p className="text-gray-nevada-600 text-center my-2">
            See, One price. Simple.
          </p>
          <button className="btn btn-secondary btn-sm rounded-sm w-36 sm:w-52 ">
            Purchase Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Price;
