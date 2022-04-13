import React from "react";
import Accordion from "../Accordion/Accordion";
import {
  Wrapper,
  Nav,
  LogoAccordion,
  NavLogo,
  NavAccordion,
  CTA,
  Button,
  Intro
} from "./Navbar.styles";
import Logo from "../../Assets/images/logo.svg";
import { accordionData } from "../Accordion/accordionData";



const Navbar = () => {

  return (
    <>
    <Wrapper>
      <Nav>
        <LogoAccordion>
          <NavLogo>
            <img src={Logo} alt="Publishing Company Logo" />
          </NavLogo>
          <NavAccordion>
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </NavAccordion>
        </LogoAccordion>
        <CTA>
            <Button>
                Login
            </Button>
            <Button primary>Sign Up</Button>
        </CTA>
      </Nav>
      <Intro>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <Button primary>Start for Free</Button>
        <Button>Learn More</Button>
      </Intro>
      </Wrapper>
    </>
  );
};

export default Navbar;
