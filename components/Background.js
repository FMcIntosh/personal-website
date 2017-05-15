import React from 'react';

import styled from 'styled-components';

export default styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: ${props => props.light ? '#fc852f' : '#3e3c3e'};
`;

