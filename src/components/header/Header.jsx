import React from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { DataList } from '../autocomplete/DataList'
import AutoCompleteInput from '../autocomplete/AutoCompleteInput'
import { routes } from '../../routes/routes'

export const Header = () => {
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
                        />{' '}
                        JsonPlaceholder
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
                                   {/* <Form.Control
                                        size='sm'
                                        type="text"
                                        placeholder="Acesso rápido"
                                        className=" mr-sm-2"
                                    /> */}
                                    {/* <DataList /> */}
                                    <AutoCompleteInput options={routes}/>
                                </Col>
                                <Col xs="auto">
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">Mark Otto</a>
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
    )
}
