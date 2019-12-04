import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { Link } from "react-router-dom";
import logo from "./assets/deypo-logo.png";

// fixed above
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 3;
`;

const HeaderBackground = styled.div`
  background-color: ${oc.teal[4]};
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 2px;
  font-family: "Mansalva";
  text-decoration: none;
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 하단 그라디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to bottom, #f9fafb, white);
`;

export const BorderedButton = styled(Link)`
  font-weight: 600;
  color: white;
  background-color: ${oc.teal[4]};
  border: 1px solid white;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  margin-right: 0.6rem;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s all;
  &:hover {
    background-color: #61dafb;
    color: white;
  }
  &:active {
    /* 마우스 클릭시 아래로 3px 움직임 */
    transform: translateY(3px);
  }
`;
export const UnBorderedButton = styled(Link)`
  font-weight: 600;
  color: white;
  background-color: ${oc.teal[4]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  margin-right: 0.6rem;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none !important;
  transition: 0.2s all;
  &:hover {
    background-color: ${oc.teal[4]};
    color: white;
  }
  &:active {
    /* 마우스 클릭시 아래로 2px 움직임*/
    transform: translateY(2px);
  }
`;

const LoginButton = () => <BorderedButton to="/login">Login</BorderedButton>;

const SignUpButton = () => (
  <BorderedButton to="/sign-up">Sign Up</BorderedButton>
);

const LogoButton = () => (
  <UnBorderedButton to="/">
    <img src={logo} height="35" width="80" />
  </UnBorderedButton>
);

const StartButton = () => (
  <BorderedButton to="/select">Let's Try</BorderedButton>
);

const HeaderContainer = ({ children }) => {
  return (
    <Positioner>
      <HeaderBackground>
        <HeaderContents>
          <LogoButton></LogoButton>
          <Spacer></Spacer>
          {children}
        </HeaderContents>
      </HeaderBackground>
      <GradientBorder></GradientBorder>
    </Positioner>
  );
};

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <StartButton></StartButton>
      </HeaderContainer>
    );
  }
}

export default Header;
