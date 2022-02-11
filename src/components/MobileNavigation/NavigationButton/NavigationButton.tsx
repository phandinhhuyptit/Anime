import React from "react";
import { Route } from "models/Route";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface NavigationButtonProps {
  isActive?: boolean;
  icon: Route["icon"];
  name: string;
}
const NavigationButton: React.FC<NavigationButtonProps> = ({ isActive, icon: Icon, name }) => {
  return (
    <div className={classNames("flex flex-col justify-center items-center grow", isActive ? "text-secondary" : "text-white")}>
      {" "}
      {Icon && <Icon className="w-6 h-6" />}
      <h1 className="line-clamp-1">{name}</h1>
    </div>
  );
};

export default NavigationButton;
