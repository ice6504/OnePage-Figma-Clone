import icon from "../../assets/img/section2/icon1.svg";

function IconCard() {
  return (
    <div className="flex flex-col gap-4 px-5">
      <img src={icon} className="w-10" alt="" />
      <h3 className="text-blue-yonder-900 font-medium">Title Goes Here</h3>
      <p className="text-gray-nevada-600 text-sm tracking-wide">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.{" "}
      </p>
    </div>
  );
}

export default IconCard;
