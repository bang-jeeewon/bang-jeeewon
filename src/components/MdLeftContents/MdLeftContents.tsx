import { ReactTyped } from 'react-typed'
import jeeewonImg from '/jeeewon.png'
import githubImg from '/github.svg'
import { Flex } from 'antd'
import './mdLeftContents.css'

const MdLeftContents = () => {
  const clickGithub = () => {
    window.open('https://github.com/bang-jeeewon', '_blank')
  }

  return (
    <>
      <Flex align='center' className='md-left-container'>
        <div className='md-profile-container'>
          <img src={jeeewonImg} alt='jeeewon' className='md-profile' />

          <div className='github-container' onClick={clickGithub}>
            <img src={githubImg} alt='github' className='github-img' />
            <p className='github-text'>bang-jeeewon</p>
          </div>
        </div>

        <div>
          <p className='hi'>안녕하세요.</p>
          <Flex align='center'>
            <Flex align='center'>
              <p className='stack'>
                <ReactTyped
                  strings={[
                    'Front',
                    'Vue3',
                    'TypeScript',
                    'UI',
                    'React',
                    'Next.js',
                  ]}
                  typeSpeed={50}
                  backSpeed={25}
                  loop={true}
                  cursorChar={'l'}
                  className='stack'
                />
                개발자 방지원입니다.
              </p>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </>
  )
}

export default MdLeftContents
