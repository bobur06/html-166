import React from "react";
import { Header, Logo, Wrapper } from "./style";
import { Link, NavLink } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";

const Navbar = () => {
  return (
    <Header>
      <Wrapper>
        <Link to="/" className="logo-wrapper">
          <Logo />
          <h3 className="title">houzing</h3>
        </Link>
        <nav className="nav">
          {navbar.map(({ id, path, title }) => (
            <NavLink key={id} to={path}>
              {title}
            </NavLink>
          ))}
        </nav>
        <Button width={"130px"}>login</Button>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
