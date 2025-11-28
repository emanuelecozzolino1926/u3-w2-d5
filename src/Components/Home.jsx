import { Container } from "react-bootstrap";
import HomeAlert from "./HomeAlert";
import HomeSearch from "./HomeSearch";
const Home = () => {
  return (
    <>
      <Container className="my-4">
        <HomeAlert />
        <HomeSearch />
      </Container>
    </>
  );
};

export default Home;
