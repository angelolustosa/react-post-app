import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top mt-3">
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <img
              className="mb-2"
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt=""
              width={24}
              height={19}
            />
            <small className="d-block mb-3 text-body-secondary">
              © 2017–2024
            </small>
          </Col>
          <Col xs={6} md={3}>
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Cool stuff
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Random feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Stuff for developers
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another one
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
