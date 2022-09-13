import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { getJobsAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobsFetched = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(getJobsAction(params))
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          {jobsFetched.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
