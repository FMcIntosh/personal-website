import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'material-ui/styles';

const Background = withTheme()(styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => 0 ? "white" : props.theme.palette.primary[800]};
`)
const MainSection = withTheme()(styled.div`
  display: flex;
  height: 85vh;
`)

const Title = withTheme()(styled.h2`
  font-size: 40px;
  margin: 0;
  margin-top: -7px;
  letter-spacing: 3px;
  color: ${props => 1 ? "white" : props.theme.palette.secondary[400]};
`)


const Subtitle = withTheme()(styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: ${props => 0 ? "white" : props.theme.palette.primary[300]};
`)

const Pop = withTheme()(styled.h3`
  margin: 0;
  margin-top: -5px;
  font-size: 60px;
  letter-spacing: 3px;
  color: ${props => 0 ? "white" : props.theme.palette.primary[200]};
`)

const SubPop = withTheme()(styled.h2`
  margin: 0;
  margin-top: -10px;
  margin-left: -2px;
  font-size: 80px;
  letter-spacing: 5px;
  color: ${props => 0 ? "white" : props.theme.palette.secondary[200]};
`)

const LeftBlock = styled.div`
  flex-grow: 1.4;
  width: 0;
  display: flex;
`

const LeftContent = styled.div`
  max-width: 100%;
  flex-grow: 1;
  padding-left: 30%;
  padding-top: 20%;
`

const RightContent = styled.div`
  max-width: 100%;
  flex-grow: 1;
  padding-left: 30%;
  padding-top: 20%;
`

const Block = styled.div`
  background: red;
  flex-grow: 1;
  width: 0;
  display: flex;
`

const RightBlock = styled.div`
  flex-grow: 1;
  width: 0;
`
const Span = withTheme()(styled.span`
  color: ${props => props.theme.palette.primary[200]};
`)

const Footer = styled.div`
  max-width: 100%;
`
const FooterText = withTheme()(styled.h4`
  color: ${props => props.theme.palette.primary[200]};
  text-align: center;
  font-weight: 300;
`)


const Splash = ({ theme }) => {
  return (
    <Background >
      <MainSection>
        <LeftBlock>
          <LeftContent>
            <Pop>Oh hey!</Pop>
            <SubPop><Span>I'm</Span> <span style={{}}> Fraser</span></SubPop>
            <Title>I code a bit</Title>
            <Subtitle>And I like to make stuff</Subtitle>
          </LeftContent>
        </LeftBlock>
        <RightBlock>
          <RightContent>
            <Title>Find me here</Title>
          </RightContent>
        </RightBlock>
      </MainSection>
      <Footer>
        <FooterText>Come and see</FooterText>
      </Footer>
    </Background>
  )
} 

export default withTheme()(Splash);