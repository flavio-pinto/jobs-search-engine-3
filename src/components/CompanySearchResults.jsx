import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanyJobsAction, SET_COMPANY_NAME } from '../redux/actions'

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobsFetched = useSelector((state) => state.jobs.companyJobs)
  const companyName = useSelector(state => state.jobs.companyName)

  useEffect(() => {
    dispatch({
      type: SET_COMPANY_NAME,
      payload: params.companyName,
    })
    dispatch(getCompanyJobsAction())
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>{companyName} Jobs</h1>
          {jobsFetched.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
