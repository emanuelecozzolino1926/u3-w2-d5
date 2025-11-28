import { Alert } from "react-bootstrap";

const HomeAlert = () => {
  return (
    <Alert variant="info">
      <Alert.Heading>
        <i className="bi bi-search-heart"></i> Ricerca Mondiale
      </Alert.Heading>
      <hr />
      <p>
        Hei epicoders ora puoi cercare le città di tutto il mondo{" "}
        <i className="bi bi-globe-americas"></i>
      </p>
    </Alert>
  );
};

export default HomeAlert;
