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

const FooterTopLineBlock = styled.div`

  display: flex;
    
`

const FooterLogoBlock = styled.div`

    display: flex;

`;

const FooterNameBlock = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;

`

const FooterName = styled.span`

    display: flex;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 5px;
    color: white;
    align-items: flex-start;
    flex-direction: column;

`;

const FooterSmallName = styled.div`

  font-weight: 300;
  letter-spacing: 2px;
  font-size: 10px;
  margin-top: 3px;

`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;

  & h4 {
    margin-bottom: 10px;
  }

  & a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 5px;
    display: block;
  }

`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
    padding-top: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const SocialIcon = styled.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  gap: 20px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Footer: React.FC = () => {

  return (

    <FooterContainer>

      <FooterTopLineBlock>

        <img src={require('../assets/wrapperFooter2.png')} />
        <img src={require('../assets/wrapperFooter.png')} />

      </FooterTopLineBlock>

      <FooterTop>

        <FooterSection>

          <FooterLogoBlock>

            <img src={require('../assets/logo.svg').default} alt="logo" />

            <FooterNameBlock>

              <FooterName>
                Quanta

                <FooterSmallName>

                  Technology

                </FooterSmallName>


              </FooterName>


            </FooterNameBlock>

          </FooterLogoBlock>

          <SocialIcons>
            <SocialIcon href="#"><img src={require('../assets/twitter.svg').default}
              alt="Twitter" /></SocialIcon>
            <SocialIcon href="#"><img src={require('../assets/discord.svg').default}
              alt="Discord" /></SocialIcon>
            <SocialIcon href="#"><img src={require('../assets/telegram.svg').default}
              alt="Telegram" /></SocialIcon>
            <SocialIcon href="#"><img src={require('../assets/git.svg').default} alt="Git" /></SocialIcon>
          </SocialIcons>

        </FooterSection>

        <FooterSection>
        <a href="#ecosystem">Ecosystem</a>
          <a href="#development">Development</a>
          <a href="#blog">Blog</a>
          <a href="#learn">Learn</a>
        </FooterSection>
        <FooterSection>
        <a href="#docs">Docs</a>
          <a href="#github">Github</a>
          <a href="#audit-report">Audit Report</a>
          <a href="#media-kit">Media Kit</a>
        </FooterSection>
        <FooterSection>
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
