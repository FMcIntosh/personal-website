import styled from 'styled-components';
import { midGrey, green }from '~/styles/colors';

export default (props) => (
    <Wrapper>
        <MenuItem>{props.children}</MenuItem>
    </Wrapper>
);


const MenuItem =  styled.a`
  color: white;
  font-size: 45px;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: none;
  }
`;

const width = 20;
const Wrapper = styled.div`
    border-radius: 50%;
    width: ${width}em;
    height: 0;
    padding-top: calc(${width}em / 2);
    padding-bottom: calc(${width}em / 2);

    background: rgba(255,255,255, 0.05);   
    box-shadow: 10px 10px 10px 0px rgba(0,0,0,.03);
    margin-left: 4em;
    margin-top: 4em;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: rgba(255,255,255, 0.1);
        cursor: pointer;
  }
`;
