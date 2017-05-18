import styled from 'styled-components';
import ScrollButton from './ScrollButton';

const width = 12;
const lWidth =6;

export default styled(ScrollButton)`
    background: white;
    border-radius: 50%;
    width: ${width}em;
    height: 0;
    padding-top: calc(${width}em / 2);
    padding-bottom: calc(${width}em / 2);
    border: none;
    bottom: calc(-${width}em / 2);
    position: absolute;
    transition: fill .3s ease-in-out,transform .3s ease-in-out,color .3s ease-in-out;
    border-radius: 50%;
    box-shadow: 0 0 7px 0 rgba(0,0,0,.13);
    outline: none;

    &:hover {
        transform: scale(1.13, 1.13);
        cursor: pointer;
        }

`;