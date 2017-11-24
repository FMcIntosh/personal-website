import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from 'components/Text';
import Button from 'components/Button';
import NavBar from 'components/NavBar';
import { primary, lightPrimary } from 'styles/colors';
import { submit } from 'data/store';
import Page from 'hoc/Page';
import Pages from 'data/pages';
import Splash from 'components/Splash';
import { withTheme } from 'material-ui/styles';

const Index = (props) => {
  return (
    <div>
      <Splash>
        <Title light>Fraser McIntosh</Title>
      </Splash>
      <Background />
      
    </div>
      
  )   
};

const mapStateToProps = (state) => {
  return { page: state.page }
}

export default Page(Index, mapStateToProps);

const Background = withTheme()(styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: white;
`)
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
const Content = styled.div`
  max-width: 100%;
  height: 300px;
  padding: 20px;
  color: white;
  text-align: center;
  font-size: 30px;
  background: #BDBDBD;
`
