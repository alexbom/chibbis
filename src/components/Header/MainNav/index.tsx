import React, { useState } from 'react';
import { Link } from 'gatsby';
import Icon from 'utils/Icon';

import { MainNavWrapper, Nav, NavItem, OpenNavButton, CloseNavButton } from './styles';

interface NavItem {
  title: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    title: 'Рестораны',
    slug: '/'
  },
  {
    title: 'Оформите заказ',
    slug: '/order/'
  },
];

/**
 * MainNav component
 */
const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainNavWrapper>
      <OpenNavButton onClick={() => setOpen(true)}>
        <Icon icon="bars" />
      </OpenNavButton>
      <Nav open={open}>
        <CloseNavButton onClick={() => setOpen(false)}>
          <Icon icon="times" />
        </CloseNavButton>
        {navItems.map((item: NavItem, index: number) => (
          <NavItem key={`nav-item-${index}`}>
            <Link to={item.slug} activeClassName="active">
              {item.title}
            </Link>
          </NavItem>
        ))}
      </Nav>
    </MainNavWrapper>
  );
};

export default MainNav;
