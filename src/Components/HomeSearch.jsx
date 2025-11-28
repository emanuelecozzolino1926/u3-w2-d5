import { useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const apiKey = "8422402238925bc8745d76bf077fb58f";

  const fetchCities = (cityName) => {
    if (cityName.length < 1) {
      setSuggestions([]);
      return;
    }

    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

    fetch(`${apiUrl}${cityName}&appid=${apiKey}&units=metric&lang=it`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setSuggestions([]);
          throw new Error(`Server irragiungibile ${response.status}`);
        }
      })
      .then((result) => {
        if (result && result.city) {
          setSuggestions([
            {
              name: result.city.name,
              country: result.city.country,
            },
          ]);
        } else {
          setSuggestions([]);
        }
      })
      .catch((error) => {
        console.log(`Errore di connessione al server ${error}`);
        setSuggestions([]);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchCities(value);
  };

  const handleSelect = (cityName) => {
    setQuery(cityName);
    setSuggestions([]);
    navigate(`/MeteoDetails/${cityName}`);
  };

  return (
    <>
      <InputGroup className="mb-3 position-relative">
        <InputGroup.Text>
          <i className="bi bi-search"></i>
        </InputGroup.Text>

        <Form.Control
          value={query}
          onChange={handleChange}
          placeholder="Esempio Napoli"
        />
      </InputGroup>

      {suggestions.length > 0 && (
        <ListGroup style={{ maxWidth: "400px" }}>
          {suggestions.map((city, index) => (
            <ListGroup.Item key={index} onClick={() => handleSelect(city.name)}>
              {city.name} ({city.country})
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default HomeSearch;
