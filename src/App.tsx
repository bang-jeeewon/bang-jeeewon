import HomePage from './pages/home/Home'
import './App.css'
import { Layout } from 'antd'

const App = () => {
  return (
    <>
      <Layout className='layout'>
        <Layout.Content>
          <HomePage />
        </Layout.Content>
      </Layout>
    </>
  )
}

export default App
