import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavoritesAction, removeFromFavoritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        {favorites.find((el) => data.company_name === el.company_name) ? (
          <i
            role="button"
            className="bi bi-suit-heart-fill mr-5 text-danger"
            onClick={() => {
              dispatch(removeFromFavoritesAction(data._id));
            }}
          ></i>
        ) : (
          <i
            role="button"
            className="bi bi-suit-heart mr-5"
            onClick={() => {
              dispatch(addToFavoritesAction(data));
            }}
          ></i>
        )}

        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
