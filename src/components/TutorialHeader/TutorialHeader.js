import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="Carbon Header">
        <HeaderName element={Link} to="/" prefix="">
          CRYPTO PONG
        </HeaderName>
      </Header>
    )}
  />
);

export default TutorialHeader;
