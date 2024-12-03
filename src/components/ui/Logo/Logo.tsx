import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  img {
    width: 109px;
    margin: 64px auto 0 auto;
  }
`;

const Logo = () => {
  return (

    <Root>
      <img alt={''} src={'/images/logo/logo.svg'} />
    </Root>
  );
};
export default Logo;
