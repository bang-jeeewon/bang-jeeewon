import { ToolOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
import { Flex, Typography, Divider, Row, Col, Skeleton } from 'antd'
import './project.css'
import { useEffect, useState } from 'react'

const { Title, Text, Link } = Typography

const Project = ({
  title,
  stacks,
  period,
  front,
  back,
  url,
  descriptions,
  imgs,
}: {
  title: string
  stacks: string[]
  period: string
  front: number
  back: number
  url: string
  descriptions: string[]
  imgs: string[]
}) => {
  const [loading, setLoding] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoding(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!loading ? (
        <Skeleton active />
      ) : (
        <div>
          <Title level={4}>
            {title}
            <Link href={url} target='_blank' style={{ marginTop: '1.5rem' }}>
              {url.substring(8)}
            </Link>
          </Title>

          <Flex align='center' style={{ marginBottom: '0.5rem' }}>
            <ToolOutlined style={{ marginRight: '0.5rem' }} />
            <div className='stack-container'>
              {stacks.map((stack, index) => (
                <Text key={index} code>
                  {stack}
                </Text>
              ))}
            </div>
          </Flex>
          <Flex align='center' style={{ marginBottom: '0.5rem' }}>
            <CalendarOutlined style={{ marginRight: '0.5rem' }} />
            <Text> {period} </Text>
          </Flex>
          <Flex align='center' style={{ marginBottom: '0.5rem' }}>
            <UserOutlined style={{ marginRight: '0.5rem' }} />
            <Text>
              Frontend: {front}명 / Backend: {back}명
            </Text>
          </Flex>

          {descriptions.map((text, index) => (
            <Text key={index} style={{ display: 'block', marginBottom: '8px' }}>
              - {text}
            </Text>
          ))}

          <Row>
            {imgs.map((img, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                style={{ margin: 'auto' }}
              >
                <img src={img} alt='home' style={{ width: '100%' }} />
              </Col>
            ))}
          </Row>

          <Divider />
        </div>
      )}
    </>
  )
}

export default Project
