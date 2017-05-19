import styled from 'styled-components';
import { darkOrange } from '~/styles/colors';

export default styled.h2`
    color: ${props => props.dark ? 'white': darkOrange};
    font-size: 150px;
    margin-top: 0;
    text-align: center;
`;