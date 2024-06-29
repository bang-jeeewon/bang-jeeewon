import LgLeftContents from '../LgLeftContents/LgLeftContents'
import MdLeftContents from '../MdLeftContents/MdLeftContents'
import RightCard from '../RightCard/RightCard'
import { Row, Col } from 'antd'
import './home.css'

const Home = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='home'>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          xxl={8}
          className='fixed-col'
        >
          <div className='left-content-wrapper'>
            <div className='md-left'>
              <MdLeftContents />
            </div>
            <div className='lg-left'>
              <LgLeftContents />
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
          xxl={16}
          className='scroll-col'
        >
          <div className='right-content-wrapper'>
            <RightCard />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Home
