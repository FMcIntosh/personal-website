import SplashScreen from '~/components/SplashScreen';
import { Element, Helpers } from 'react-scroll';
import styled from 'styled-components';
import React, { Component } from 'react';

export default () => (
    <div>
        <SplashScreen />
        <Div />
        <eDiv name="myScrollToElement" />
    </div>
);


const Div = styled.div`
    height: 0px
`

class C extends Component {
    
  render() {
      console.log(this.props);
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
const eDiv = Helpers.Element(C);
