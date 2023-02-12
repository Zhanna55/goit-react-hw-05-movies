import { Header, Link } from './HeaderNavMenu.styled';

export const HeaderNavMenu = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};
