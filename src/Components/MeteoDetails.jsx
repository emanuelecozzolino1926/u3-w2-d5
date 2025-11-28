import { useEffect, useState } from "react";
import { Col, Card, Button, Spinner, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MeteoDetails = () => {
  const { city } = useParams();
  const [meteo, setMeteo] = useState(null);

  const getMeteo = () => {
    setMeteo(null);
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const apiKey = "8422402238925bc8745d76bf077fb58f";

    fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric&lang=it`)
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

  const first = meteo?.list?.[0];

  return (
    <>
      <Col className="d-felx justify-content-center my-3">
        <Card style={{ width: "22rem" }} className="mx-auto p-3">
          <Card.Body>
            <Card.Title className="text-center fs-3 fw-bold">
              {meteo?.city.name}
            </Card.Title>

            <div className="text-center">
              {first && (
                <>
                  <div>
                    <strong>Orario:</strong> {first.dt_txt}
                  </div>
                  <div>
                    <strong>Temperatura:</strong> {first.main.temp}°C
                  </div>
                  <div>
                    <strong>Min:</strong> {first.main.temp_min}°C -{" "}
                    <strong>Max:</strong> {first.main.temp_max}°C
                  </div>
                  <div>
                    <strong>Meteo:</strong> {first.weather[0].description}
                  </div>
                  <div>
                    <strong>Umidità:</strong> {first.main.humidity}%
                  </div>
                  <div>
                    <strong>Vento:</strong> {first.wind.speed} km/h
                  </div>
                  <div>
                    <strong>Nuvolosità:</strong> {first.clouds.all}%
                  </div>
                </>
              )}
            </div>

            {!meteo && (
              <div className="text-center">
                <Spinner animation="border" variant="info" />
              </div>
            )}

            <Row className="mt-3 justify-content-center">
              <Button
                variant="primary"
                onClick={getMeteo}
                style={{ width: "10rem" }}
              >
                Aggiorna
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MeteoDetails;
