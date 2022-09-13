import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Badge,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QUERY_UPDATE, getJobsAction } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  //const [query, setQuery] = useState('')
  //const [jobs, setJobs] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.jobs.content);
  const queryString = useSelector((state) => state.jobs.query);
  const favCounter = useSelector((state) => state.favorites.list.length);
  const jobsLoading = useSelector((state) => state.jobs.loading);
  const jobsError = useSelector((state) => state.jobs.error);

  const handleChange = (e) => {
    dispatch({
      type: QUERY_UPDATE,
      payload: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction());
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={2} className="mx-auto mt-4">
          <Button variant="dark" onClick={() => navigate("/favorites")}>
            Favorites
            <Badge className="ml-2 p-2" variant="primary">
              {favCounter}
            </Badge>
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={queryString}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsLoading && <Spinner animation="border" variant="success" />}
          {jobsError && (
            <Alert variant={'danger'}>
              C'è stato un errore!
            </Alert>
          )}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
