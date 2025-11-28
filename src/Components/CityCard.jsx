import { useEffect, useState } from "react";
import { Col, Card, Button, Spinner } from "react-bootstrap";

const CityCard = (props) => {
  const [meteo, setMeteo] = useState(null);

  const getMeteo = () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "8422402238925bc8745d76bf077fb58f";

    fetch(`${apiUrl}${props.city},IT&appid=${apiKey}&units=metric`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Server irragiungibile ${response.status}`);
        }
      })
      .then((cityResult) => {
        setMeteo(cityResult);
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
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Card.Body>
            <Card.Title>{props.city}</Card.Title>
            <Card.Text>
              {meteo
                ? `Temperatura: ${meteo.main.temp}°C - ${meteo.weather[0].description}`
                : null}
            </Card.Text>

            {!meteo && <Spinner animation="border" variant="info" />}
            <Button variant="primary" onClick={getMeteo}>
              Aggiorna
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CityCard;
