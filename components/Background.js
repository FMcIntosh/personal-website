import styled from 'styled-components';
import { lightGrey, darkGrey }from '~/styles/colors';

export default styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: ${props => props.light ? lightGrey : darkGrey};
`;

