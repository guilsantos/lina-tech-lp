import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
import IconLogo from "./../../../assets/images/logo.svg";

const Logo = ({ className, ...props }: any) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image src={IconLogo} alt="Open" width={32} height={32} />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
