import React from "react";
import { GithubIcon, LinkedInIcon, MailIcon, TwitterIcon } from "../../assets";
import {
  FooterWrapper,
  LeftPane,
  RightPane,
  StyledHead,
  IconWrapper,
  IconBg,
  FooterStrip
} from "./FooterComponents";
import SoicalWell from "../../assets/images/socialwell-logo.png"
import Image from "next/image";

export const Footer = () => {
  return (
      <>
    <FooterWrapper>
      <LeftPane>
        <StyledHead>
          Let’s keep in touch!
          <br />
          Find us on any of these platforms.
        </StyledHead>
        <IconWrapper>
           <IconBg > <TwitterIcon /></IconBg>
           <IconBg > <LinkedInIcon /></IconBg>
           <IconBg > <GithubIcon /></IconBg>
            <IconBg ><MailIcon /></IconBg>
        </IconWrapper>
      </LeftPane>
      <RightPane>
      <StyledHead>Address</StyledHead>
      <div>Flat T-11/805, Tata Ariana, Mahalaxmi Vihar, Bhubaneswar, Odisha 751029 IN</div>
      </RightPane>
    </FooterWrapper>
    <FooterStrip>   
    <Image src={SoicalWell} />
    <small>© SocialWell Technologies Private Limited</small>
    </FooterStrip>
    </>
  );
};
