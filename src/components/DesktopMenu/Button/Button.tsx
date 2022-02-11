import classNames from "classnames";
import React from "react";
import { Icon } from "types";

export interface ButtonProps {
  active?: boolean;
  text: string;
  startIcon?: React.ComponentType<Icon>;
  endIcon?: React.ComponentType<Icon>;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { active, text, startIcon: StartIcon, endIcon: EndIcon, className } = props;

  return (
    <div className={classNames(className, active && "border-secondary border-b-2")}>
      {StartIcon && <StartIcon size={14} className="text-white" />}
      <p
        className={classNames(
          "tracking-wide font-medium hover:text-secondary duration-300 transition",
          StartIcon && "ml-2",
          EndIcon && "mr-2",
          active ? "text-white text-base" : "text-sm text-gray-300"
        )}>
        {text}
      </p>

      {EndIcon && <EndIcon size={14} className="text-white" />}
    </div>
  );
};
export default Button;
