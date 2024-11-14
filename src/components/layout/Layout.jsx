import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Footer } from '../footer/Footer.jsx';
import { Header } from '../header/Header.jsx';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};