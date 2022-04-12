import React from "react";
import Accordion from "../Accordion";
import {
  Nav,
  LogoAccordion,
  NavLogo,
  NavAccordion,
  CTA,
} from "./Navbar.styles";
import Logo from "../../Assets/images/logo.svg";

const Navbar = () => {
  const accordionData = [
    {
      title: "Product",
      content: `{Overview},
                      {Pricing}
                      Marketplace 
                      Features
                      Integrations`,
    },
    {
      title: "Company",
      content: `About
                      Team
                      Blog
                      Careers`,
    },
    {
      title: "Product",
      content: `  Contact
                        Newsletter
                        LinkedIn`,
    },
  ];

  return (
    <>
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
        <CTA></CTA>
      </Nav>
    </>
  );
};

export default Navbar;
