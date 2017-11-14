import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'material-ui/styles';

const Background = styled.div`
width: 100%;
min-height: 90vh;
display: flex;
position: relative;
flex-direction: column;
align-items: center;
background: ${props => props.theme.palette.primary[500]};
`
export default withTheme()(Background);