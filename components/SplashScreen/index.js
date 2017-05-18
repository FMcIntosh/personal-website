import styled from 'styled-components';
import Background from './Background';
import Title from './Title';
import Menu from '~/components/SplashMenu';
import StyledScrollButton from './StyledScrollButton';


export default () => (
    <div>
        <Background light>
            <Title>Fraser McIntosh is...</Title>
            <Menu />
            <StyledScrollButton scrollElement="myScrollToElement" />
        </Background>
        
    </div>
);
