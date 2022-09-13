import { useState } from 'react'
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Job from './Job'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const [jobs, setJobs] = useState([])
  const favCounter = useSelector((state) => state.favorites.list.length);

  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
