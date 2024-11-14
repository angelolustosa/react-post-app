import { useEffect, useState } from "react";
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import './Header.css'
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [usuario, setUsuario] = useState({});
  const navigate = useNavigate();

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
    navigate("/");
  };


  useEffect(() => {
    // Recupera o usuário do localStorage e define no estado
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsuario(user);
    }
  }, []);

  return (
    <div>
      <Navbar className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="https://react-bootstrap.netlify.app/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/post">Post</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Acesso rápido"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Navbar.Text>
                    {/* Login: <a href="#login">{usuario.nome}</a> */}
                    <NavDropdown  drop={'down'} title={<a href="#login">{usuario.nome}</a>} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Dashboard
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Administração
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Editar 
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item /* href="#action/3.4" */ onClick={logout}>
                        Sair
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Navbar.Text>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>

          {/* <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};
