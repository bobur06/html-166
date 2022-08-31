import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: var(--primary-color);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  color: white;
  .logo-wrapper {
    display: flex;
    align-items: center;
  }
  a{
    text-decoration: none;
  }
  .title {
    margin-left: 7px;
    text-transform: capitalize;
    color: #fff;
    margin-top: 5px;
  }
  .nav {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    a {
      color: white;
      padding-bottom: 5px;
      text-decoration: none;
    }
    .active {
      font-weight: 600;
      border-bottom: 1px solid white;
    }
  }
`;
const Logo = styled(logo)``;

export { Header, Wrapper, Logo };
