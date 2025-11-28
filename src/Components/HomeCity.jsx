import { Container, Row } from "react-bootstrap";
import CityCard from "./CityCard";

const HomeCity = () => {
  return (
    <>
      <Container className="my-3">
        <h2 className="text-center">Citta italiane</h2>
        <Row xs={1} md={2} lg={3} xl={4} className="justify-content-center">
          <CityCard city="Napoli,IT" />
          <CityCard city="Roma,IT" />
          <CityCard city="Milano,IT" />
          <CityCard city="Taranto, IT" />
          <CityCard city="Palermo, IT" />
          <CityCard city="Torino, IT" />
          <CityCard city="Bologna, IT" />
          <CityCard city="Lecce, IT" />
        </Row>
      </Container>
    </>
  );
};

export default HomeCity;
