import React, {useState} from "react";
import Accordion from "../Accordion/Accordion";
import {
  Wrapper,
  Nav,
  // LogoAccordion,
  NavLogo,
  MobileMenu,
  NavMenu,
  NavAccordion,
  CTA,
  Button,
  Intro
} from "./Navbar.styles";
import Logo from "../../Assets/images/logo.svg";
import CloseMenu from '../../Assets/images/icon-close.svg'
import OpenMenu from '../../Assets/images/icon-hamburger.svg'
import { accordionData } from "../Accordion/accordionData";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


  return (
    <>
    <Wrapper>
      <Nav>
        {/* <LogoAccordion> */}
          <NavLogo to='/' onClick={closeMobileMenu} >
            <img src={Logo} alt="Publishing Company Logo" />
          </NavLogo>
          <MobileMenu onClick={handleClick}>
            {click ? <img src={CloseMenu} alt='' /> : <img src={OpenMenu} alt='' /> }
          </MobileMenu>
          <NavMenu onClick='handleClick' click={click}>
          <NavAccordion>
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </NavAccordion>
        {/* </LogoAccordion> */}
        <CTA>
            <Button>
                Login
            </Button>
            <Button primary>Sign Up</Button>
        </CTA>
        </NavMenu>
      </Nav>
      <Intro>
        <span>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </span>
        <div>
          <Button primary>Start for Free</Button>
          <Button secondary>Learn More</Button>
        </div>
      </Intro>
      </Wrapper>
    </>
  );
};

export default Navbar;
