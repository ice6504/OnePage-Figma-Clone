import PropTypes from "prop-types";

function Info(props) {
  const { img, hasBtn, btnTitle } = props;  
  return (
    <>
      <div className="min-h-[60vh] xl:h-screen flex max-lg:flex-col justify-center items-center gap-16">
        <img src={img} alt="" className="w-full sm:w-2/3 lg:w-1/2" />
        <div className="flex flex-col lg:w-2/5 sm:px-10 gap-5">
          <h2 className="text-blue-yonder-900 font-medium text-4xl">
            Light, Fast & Powerful
          </h2>
          <p className="text-blue-yonder-400 leading-7 tracking-wide">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          {hasBtn ? (
            <button className="btn btn-secondary btn-sm rounded-sm w-36 sm:mt-5">
              {btnTitle}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

Info.propTypes = {
  img: PropTypes.string.isRequired,
  hasBtn: PropTypes.bool,
  btnTitle: PropTypes.string,
};

export default Info;
