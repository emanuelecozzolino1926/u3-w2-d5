import { Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="fixed-bottom">
        <Container fluid className="bg-primary text-center text-white p-5">
          <Col>EpiMeteo &copy; 2025 created by Emanuele Cozzolino</Col>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
