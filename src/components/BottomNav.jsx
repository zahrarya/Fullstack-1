import SelectDemo from "./SelectBox";
import viewSvg from "../assets/view-1.svg";
import viewSvgTwo from "../assets/view-2.svg";
import Container from "react-bootstrap/Container";

const BottomNav = (text) => {
  return (
    <>
      <Container className=" mb-6 ">
        <p className="text-xl font-semibold text-slate-700 ml-4 mb-4">
          all tasks
        </p>
        <div className="w-full bg-transparent flex justify-between lg-max:flex-col lg-max:items-center p-5">
          <div className="">
            <img src={viewSvg} alt="view-one" className="w-7 inline-block" />
            <img src={viewSvgTwo} alt="view-two" className="w-7 inline-block" />
          </div>
          <SelectDemo />
        </div>
      </Container>
    </>
  );
};

export default BottomNav;
