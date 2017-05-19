import styled from 'styled-components';
import ItemTitle from './ItemTitle';

export default (props) => (
    <Wrapper>
        <ItemTitle dark={props.dark}>Personal Website</ItemTitle>
        <Item />
    </Wrapper>
)


const Item = styled.div`
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-image: url('http://www.seotechexperts.com/blogs/wp-content/uploads/2016/07/architecture-of-website-designing.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const Wrapper = styled.div`
    width: 100%;
`;

 