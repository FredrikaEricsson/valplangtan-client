import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../assets/colors";
import Link from "next/link";
interface IMenuProps {
  isOpen: boolean;
}
export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source sans pro', serif;
    
  }
  body {
    overflow-x:hidden;
    margin: 0;
   
  }
  html {
    scroll-behavior: smooth;
   

  }
`;
export const MainContainer = styled.main`
  padding: 10% 5%;
  background-color: ${colors.colorLightBlue};
  min-height: 91vh;
  @media screen and (min-width: 1024px) {
    padding: 5% 5%;
  }
`;

export const HeadingWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${(props: IMenuProps) => (props.isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 800;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  h1 {
    font-size: 2rem;
    font-family: "Patrick Hand", "Open sans";
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuLink = styled.a`
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: color 0.2s;
  font-size: 0.9rem;
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
  &:hover {
    color: ${colors.colorDarkOrange};
  }
`;

export const Headline = styled.h1`
  font-family: "Patrick Hand", "Open sans";
  font-size: 1.7rem;
  letter-spacing: 0.2rem;
  color: black;
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  border: 2px solid ${colors.colorLightOrange};
  border-radius: 5px;
  padding: 2%;
  box-shadow: 2px 2px 0px ${colors.colorLightOrange};
  input:-internal-autofill-selected {
    background-color: white;
  }
  @media screen and (min-width: 1024px) {
    padding: 2%;
    font-size: 1rem;
    max-height: 50px;
  }
`;

export const Button = styled.button`
  border: 2px solid ${colors.colorDarkOrange}};
  border-radius: 5px;
  padding: 2%;
  background-color: ${colors.colorLightOrange};
  box-shadow: 2px 2px 0px ${colors.colorDarkOrange};
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    padding: 1%;
    font-size: 1rem
  }
`;

export const ErrorMessageStyle = styled.small`
  color: ${colors.colorBrown};
  text-decoration: underline ${colors.colorDarkOrange};
`;
