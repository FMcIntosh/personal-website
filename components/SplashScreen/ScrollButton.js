import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import styled from 'styled-components';

export default class ScrollButton extends Component {

  onClick = () => {
    scroller.scrollTo(this.props.scrollElement, {
        duration: 1500,
        delay: 100,
        smooth: true
    });
  }

  render() {
      console.log(this.props);
    return (
      <button
        className={this.props.className}
        onClick={this.onClick}
       />
    );
  }
}