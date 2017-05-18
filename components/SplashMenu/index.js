import styled from 'styled-components';
import StyledMenuItem from './StyledMenuItem';

export default () => (
    <Wrapper>
        <StyledMenuItem href="/dev">Developing</StyledMenuItem>
        <StyledMenuItem href="/blog">Blogging</StyledMenuItem>
        <StyledMenuItem href="/painting">Painting</StyledMenuItem>
        <StyledMenuItem href="/e">Thinking</StyledMenuItem>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: calc(16em + 60px);
    flex-wrap: wrap;
`

