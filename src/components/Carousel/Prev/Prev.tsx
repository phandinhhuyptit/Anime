import { BsChevronLeft } from "react-icons/bs";
import classNames from "classnames";

export interface ArrowButtonProps {
  onClick?: () => void;
}

const PrevArrow = (props: ArrowButtonProps) => {
  const { onClick } = props;
  return (
    <div className={classNames("bg-black absolute -left-6 transform -translate-y-1/2 top-1/2 p-3 cursor-pointer z-10")} style={{ borderRadius: "50%" }} onClick={onClick}>
      <BsChevronLeft size={20} className="text-white" />
    </div>
  );
};

export default PrevArrow;
