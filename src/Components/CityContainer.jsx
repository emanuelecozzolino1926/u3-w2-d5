import { Container, Row } from "react-bootstrap";
import CityCard from "./CityCard";

const CityContainer = () => {
  return (
    <>
      <Container className="my-3 min-vh-100">
        <h2 className="text-center">Capitali in Europa</h2>
        <Row xs={1} md={2} lg={3} xl={4} className="justify-content-center">
          <CityCard city="Roma,IT" />
          <CityCard city="Vienna" />
          <CityCard city="Bruxelles" />
          <CityCard city="Copenaghen" />
          <CityCard city="Parigi" />
          <CityCard city="Berlino" />
          <CityCard city="Atene" />
          <CityCard city="Stoccolma" />
          <CityCard city="Oslo" />
          <CityCard city="Amsterdam" />
          <CityCard city="Lisbona" />
          <CityCard city="Londra" />
          <CityCard city="Madrid" />
          <CityCard city="Berna" />
          <CityCard city="Kiev" />
        </Row>
      </Container>
    </>
  );
};

export default CityContainer;
