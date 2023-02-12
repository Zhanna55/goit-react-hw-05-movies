import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderNavMenu } from 'components/HeaderNavMenu/HeaderNavMenu';
import { Loader } from 'components/Loader/Loader';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderNavMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
