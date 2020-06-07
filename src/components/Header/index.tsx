import React from 'react';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import SwitchThemeMode from './SwitchThemeMode';
import { HeaderMain, HeaderWrapper, Title } from './styles';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderMain>
      <Link to="/">
        <Title>{siteTitle}</Title>
      </Link>
      <MainNav />
      <SwitchThemeMode />
    </HeaderMain>
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
