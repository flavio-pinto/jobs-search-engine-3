import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Button variant="light" onClick={() => navigate("/")}>
          Home Page
        </Button>
      </Row>
      <Row>
        <Col className="mx-auto mb-5">
          {favorites.map((el) => (
            <Job key={el._id} data={el} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
