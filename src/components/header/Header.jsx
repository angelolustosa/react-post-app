import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Nav, Navbar, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import AutoCompleteInput from '../autocomplete/AutoCompleteInput';
import { routes } from '../../routes/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { ThemeContext } from '../../context/ThemeContext.jsx';

export const Header = () => {
    /* // State to manage the theme (light or dark)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle theme function
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

     */

    // Acessando o contexto diretamente
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    // Effect to apply the dark theme to the body element when isDarkMode is true
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme'); // Add class for dark theme
        } else {
            document.body.classList.remove('dark-theme'); // Remove class for light theme
        }
    }, [isDarkMode]);


    return (
        <div>
            <Navbar bg={isDarkMode ? 'dark' : ''} data-bs-theme={isDarkMode ? "dark" : ''} className="bg-body-tertiary mb-3">
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
                                    <AutoCompleteInput options={routes} />
                                </Col>
                                <Col xs="auto">
                                    {/* Tooltip wrapper with a single child */}
                                    {/* <Tooltip title={'Alterar o tema'}>
                                        <FontAwesomeIcon
                                            className="theme-change"
                                            color={isDarkMode ? '#146ebe' : '#ffd43b'}
                                            icon={isDarkMode ? faMoon : faSun}
                                            onClick={toggleTheme}
                                        />
                                    </Tooltip> */}
                                    <OverlayTrigger
                                        placement={'bottom'}
                                        overlay={<Tooltip>{'Alterar o tema'}</Tooltip>}
                                    >
                                        <FontAwesomeIcon
                                            className="theme-change"
                                            color={isDarkMode ? '#146ebe' : '#ffd43b'}
                                            icon={isDarkMode ? faMoon : faSun}
                                            onClick={toggleTheme}
                                        />
                                    </OverlayTrigger>
                                </Col>
                                <Col xs="auto">
                                    <Navbar.Text>
                                        <a href="#login">Mark Otto</a>
                                    </Navbar.Text>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
