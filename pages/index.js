import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from 'components/Text';
import Button from 'components/Button';
import NavBar from 'components/NavBar';
import { primary, lightPrimary } from 'styles/colors';
import { submit } from 'data/store';
import Page from 'hoc/Page';

const Index = ({ store }) => {
      console.log(store);
      return (
        <div>
          <Background>
            <Title light>Guess My Vote</Title>
          </Background>
          <NavBar />
        </div>
          
      )   
};

Index.getInitialProps = (props) => {
  console.log(props)
}

export default Page(Index);

const Background = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: ${primary};
`
const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 500px) {
		width: 90%;
	}
}
`
