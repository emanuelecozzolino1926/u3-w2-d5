import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CityCard from "./CityCard";

const CityContainer = () => {
  return (
    <>
      <Container className="my-3">
        <Row xs={1} md={2} lg={3} xl={4} className="justify-content-center">
          <CityCard city="Naples" />
          <CityCard city="Rome" />
          <CityCard city="Milan" />
          <CityCard city="Turin" />
          <CityCard city="Palermo" />
          <CityCard city="Genoa" />
          <CityCard city="Florence" />
          <CityCard city="Bologna" />
        </Row>
      </Container>
    </>
  );
};

export default CityContainer;
