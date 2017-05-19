import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import DisplayItem from './DisplayItem';

export default (props) => (
    <Wrapper dark={props.dark}>
     <SectionTitle>Developing</SectionTitle>
     <DisplayItem dark={props.dark}/>
     <DisplayItem dark={props.dark}/>
     <DisplayItem dark={props.dark}/>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 15vh;
    background: ${props => props.dark ? '#222326': 'white'};
`