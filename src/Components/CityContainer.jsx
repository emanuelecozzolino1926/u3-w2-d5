import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CityCard from "./CityCard";

const CityContainer = () => {
  return (
    <>
      <Container className="my-3">
        <Row xs={1} md={2} lg={3} xl={4} className="justify-content-center">
          <CityCard city="Roma,IT&" />
          <CityCard city="Madrid" />
          <CityCard city="Vienna" />
          <CityCard city="Bruxelles" />
          <CityCard city="Copenaghen" />
          <CityCard city="Parigi" />
          <CityCard city="Berlino" />
          <CityCard city="Oslo" />
          <CityCard city="Oslo" />
          <CityCard city="Amsterdam" />
          <CityCard city="Lisbona" />
          <CityCard city="Londra" />
          <CityCard city="Stoccolma" />
          <CityCard city="Berna" />
          <CityCard city="Kiev" />
          <CityCard city="Washington" />
          <CityCard city="Ottawa" />
          <CityCard city="Città del Messico" />
          <CityCard city="Tokyo" />
          <CityCard city="Pechino" />
        </Row>
      </Container>
    </>
  );
};

export default CityContainer;
