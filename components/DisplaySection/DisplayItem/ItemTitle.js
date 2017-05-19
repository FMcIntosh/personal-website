import styled from 'styled-components';
import { darkOrange } from '~/styles/colors';

export default styled.h3`
    color: ${props => props.dark ? 'white': 'darkOrange'};
    font-size: 80px;
    margin-top: 15vh;
    text-align: center;
`;