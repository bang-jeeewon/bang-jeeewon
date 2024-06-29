import { ToolOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
import { Flex, Typography, Divider } from 'antd'

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
  return (
    <>
      <div>
        <Flex align='center' justify='space-between'>
          <Title level={4}>{title}</Title>

          <Link href={url} target='_blank' style={{ marginTop: '1.5rem' }}>
            {url.substring(8)}
          </Link>
        </Flex>

        <Flex align='center' style={{ marginBottom: '0.5rem' }}>
          <ToolOutlined style={{ marginRight: '0.5rem' }} />
          <Text>개발언어: </Text>
          {stacks.map((stack, index) => (
            <Text code>{stack}</Text>
          ))}
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

        <Flex justify='space-between'>
          {imgs.map((img, index) => (
            <img src={img} alt='home' style={{ width: '45%' }} />
          ))}
        </Flex>

        <Divider />
      </div>
    </>
  )
}

export default Project
