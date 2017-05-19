import styled from 'styled-components';
import { black, darkGrey }from '~/styles/colors';

export default styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: ${props => props.light ? darkGrey : black};
`;

