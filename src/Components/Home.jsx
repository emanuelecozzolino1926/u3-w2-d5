import { Container } from "react-bootstrap";
import HomeAlert from "./HomeAlert";
import HomeSearch from "./HomeSearch";
import HomeCity from "./HomeCity";
const Home = () => {
  return (
    <>
      <Container className="my-4">
        <HomeAlert />
        <HomeSearch />
        <HomeCity />
      </Container>
    </>
  );
};

export default Home;
