import styled from 'styled-components';
import { midGrey, green }from '~/styles/colors';

export default (props) => (
    <Wrapper>
        <MenuItem>{props.children}</MenuItem>
    </Wrapper>
);


const MenuItem =  styled.a`
  color: white;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: none;
  }
`;

const width = 8;
const Wrapper = styled.div`
    border-radius: 50%;
    width: ${width}em;
    height: 0;
    padding-top: calc(${width}em / 2);
    padding-bottom: calc(${width}em / 2);
    background: rgba(255,255,255, 0.05);   
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: rgba(255,255,255, 0.1);
        cursor: pointer;
  }
`;
