import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 10px;

  & h4 {
    margin-bottom: 10px;
  }

  & a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 5px;
    display: block;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #444;
  padding-top: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterTop>

                <FooterSection>

                    <img src="/" alt="///" />

                    <h1>Quanta</h1>

                    <SocialIcons>
                        <SocialIcon href="#"><img src="/path/to/icon1.png" alt="Icon 1" /></SocialIcon>
                        <SocialIcon href="#"><img src="/path/to/icon2.png" alt="Icon 2" /></SocialIcon>
                        <SocialIcon href="#"><img src="/path/to/icon3.png" alt="Icon 3" /></SocialIcon>
                    </SocialIcons>

                </FooterSection>

                <FooterSection>
                    <h4>Ecosystem</h4>
                    <a href="#development">Development</a>
                    <a href="#blog">Blog</a>
                    <a href="#learn">Learn</a>
                </FooterSection>
                <FooterSection>
                    <h4>Docs</h4>
                    <a href="#github">Github</a>
                    <a href="#audit-report">Audit Report</a>
                    <a href="#media-kit">Media Kit</a>
                </FooterSection>
                <FooterSection>
                    <h4>Privacy</h4>
                    <a href="#privacy-policy">Privacy Policy</a>
                    <a href="#terms">Terms and Conditions</a>
                    <a href="#cookie-policy">Cookie Policy</a>
                    <a href="#contact-us">Contact Us</a>
                </FooterSection>
            </FooterTop>
            <FooterBottom>

                <div>Copyright © 2024 by Quanta Tech. All rights reserved.</div>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
