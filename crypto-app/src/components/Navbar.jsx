import React from "react";
import { Avatar, Typography, Button } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-conatiner">
      <Avatar />
      <Typography.Title level={2} className="logo">
        <Link to="/">Crypto Verse</Link>
      </Typography.Title>
      <Button className="menu-control-container"></Button>
    </div>
  );
};

export default Navbar;
