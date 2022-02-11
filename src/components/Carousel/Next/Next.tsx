import { BsChevronRight } from "react-icons/bs";
import classNames from "classnames";

export interface ArrowButtonProps {
  onClick?: () => void;
}

const NextArrow = (props: ArrowButtonProps) => {
  const { onClick } = props;
  return (
    <div className={classNames("bg-black absolute -right-6 transform -translate-y-1/2 top-1/2 p-3 cursor-pointer z-10")} style={{ borderRadius: "50%" }} onClick={onClick}>
      <BsChevronRight size={20} className="text-white" />
    </div>
  );
};

export default NextArrow;
