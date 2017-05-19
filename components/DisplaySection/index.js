import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import SectionIcon from './SectionIcon';
import DisplayItem from './DisplayItem';

export default (props) => (
    <Wrapper dark={props.dark}>
     <SectionTitle>Developing</SectionTitle>
     <SectionIcon src="https://d30y9cdsu7xlg0.cloudfront.net/png/62495-200.png"/>
     <DisplayItem dark={props.dark}/>
     <DisplayItem dark={props.dark}/>
     <DisplayItem dark={props.dark}/>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.dark ? '#222326': 'white'};
`