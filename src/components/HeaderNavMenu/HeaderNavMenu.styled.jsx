import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  border-bottom: 2px solid gray;
`;

export const Link = styled(NavLink)`
  padding: 8px 30px;
  border-radius: 1px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
