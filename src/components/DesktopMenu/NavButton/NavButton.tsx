import classNames from "classnames";
import { To } from "history";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ButtonProps } from "../Button/Button";

export type NavButtonProps = {
  redirect?: boolean;
  to?: To | undefined;
} & ButtonProps;

const NavButton = (props: NavButtonProps) => {
  const { active, text, startIcon, endIcon, className, redirect = true, to } = props;

  return redirect ? (
    <Link to={to!}>
      <Button active={active} text={text} startIcon={startIcon} endIcon={endIcon} className={className} />
    </Link>
  ) : (
    <Button active={active} text={text} startIcon={startIcon} endIcon={endIcon} className={classNames("cursor-pointer", className)} />
  );
};

export default NavButton;
