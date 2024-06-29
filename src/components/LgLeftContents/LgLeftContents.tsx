import './lgLeftContents.css'
import { ReactTyped } from 'react-typed'
import jeeewonImg from '/jeeewon.png'
import githubImg from '/github.svg'
import emailImg from '/email.png'
import { Typography } from 'antd'

const { Title, Text } = Typography

const LeftContents = () => {
  const clickGithub = () => {
    window.open('https://github.com/bang-jeeewon', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:giw0233@gmail.com'
  }

  return (
    <>
      <div className='left-title-container'>
        <div className='profile-container'>
          <img src={jeeewonImg} alt='jeeewon' className='profile' />

          <div className='github-container' onClick={clickGithub}>
            <img src={githubImg} alt='github' className='github-img' />
            <p className='github-text'>bang-jeeewon</p>
          </div>
        </div>

        <p className='title hi'>안녕하세요.</p>
        <div className='sub-title'>
          <ReactTyped
            strings={['Front', 'Vue3', 'TypeScript', 'UI', 'React', 'Next.js']}
            typeSpeed={50}
            backSpeed={25}
            loop={true}
            cursorChar={'l'}
            className='title stack'
          />
          <p className='title name'>개발자 방지원입니다.</p>
        </div>
      </div>

      <div className='left-contents-container'>
        <Title level={5}>
          현재 사이트는 <br />
          React / AntDesign / TypeScript <br />
          등을 사용하여 제작되었습니다.
        </Title>
        <Title level={5}>
          제가 만드는 서비스와 함께 성장하는 기쁨, <br />
          그리고 사용자가 유용하게 사용할 때의 기쁨으로 인해 <br />
          즐겁게 개발해 나가는 주니어 개발자입니다.
        </Title>
        <Title level={5}>
          함께 성장해나가는 팀 분위기를 선호하며, <br />
          좋은 품질로 전달하겠다는 진심, <br />
          신기술에 대한 호기심과 적극성을 가지고 있습니다. <br />
          봐주셔서 감사합니다. <br />
          방지원 올림.
        </Title>

        <Text onClick={handleEmail} className='email'>
          <img src={emailImg} alt='email' style={{ marginRight: '0.25rem' }} />
          giw0233@gmail.com
        </Text>
      </div>
    </>
  )
}

export default LeftContents
