import { useEffect, useState } from "react";
import { Col, Card, Button, Spinner, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CityCard = (props) => {
  const [meteo, setMeteo] = useState(null);

  const getMeteo = () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "8422402238925bc8745d76bf077fb58f";

    fetch(`${apiUrl}${props.city}&appid=${apiKey}&units=metric&lang=it`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Server irragiungibile ${response.status}`);
        }
      })
      .then((cityResult) => {
        setMeteo(cityResult);
        console.log(cityResult);
      })
      .catch((error) => {
        console.log(`Eorre di connesasione al server ${error}`);
      });
  };

  useEffect(() => {
    getMeteo();
  }, []);

  return (
    <>
      <Col className="d-felx justify-content-center my-3">
        <Card style={{ width: "18rem" }} className="mx-auto text-center">
          <Card.Body>
            <Card.Title>
              <i className="bi bi-geo-alt-fill"></i>
              {meteo?.name}
            </Card.Title>
            <Card.Text>
              {meteo && (
                <>
                  <i className="bi bi-thermometer-half"></i> Temperatura:{" "}
                  {meteo.main.temp}°C
                  <br />
                  <i className="bi bi-cloud-fill"></i>{" "}
                  {meteo.weather[0].description}
                </>
              )}
            </Card.Text>

            {!meteo && <Spinner animation="border" variant="info" />}
            <Row xs={1} md={2}>
              <Link
                style={{ width: "8rem" }}
                className="btn btn-warning m-auto"
                to={`/MeteoDetails/${props.city}`}
              >
                Dettagli
              </Link>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CityCard;
