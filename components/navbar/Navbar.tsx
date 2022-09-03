import * as React from "react";
import { NavStripe ,Nav,LogoWrapper,NavLinkWrapper,ActiveLink} from "./navbarComponent";
import { GithubIcon, MailIcon, TwitterIcon, LinkedInIcon } from "../../assets";
import SoicalWell from "../../assets/images/socialwell-logo.png"
import Image from "next/image";




export const Navbar = ():JSX.Element => {
  return (
    <>
      <NavStripe>
        <TwitterIcon />
        <LinkedInIcon />
        <MailIcon />
        <GithubIcon />
      </NavStripe>
      <Nav>
        <LogoWrapper>
        <Image src={SoicalWell} alt="Logo" />
        </LogoWrapper>
       <NavLinkWrapper>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Solutions</li>
          <ActiveLink>Blogs</ActiveLink>
       </NavLinkWrapper>

      </Nav>
    </>
  );
};
