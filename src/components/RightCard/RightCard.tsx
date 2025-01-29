'use client'

import { Card, Divider, Row, Col } from 'antd'
import animation from '../../styles/animations.module.css'
import './rightCard.css'
import sbLogoImg from '/softberry.svg'
import ptLogoImg from '/proptier.jpeg'
import Project from '../Project/Project'

const RightCard = () => {
  const companies = [
    {
      name: '소프트베리',
      start: '2022-03-08',
      end: '2024-10-11',
      logo: sbLogoImg,
      description: 'EVI Hub 연구원 개발자',
      position: 'Frontend Developer',
    },
    {
      name: '프롭티어',
      start: '2024-12-16',
      end: '',
      logo: ptLogoImg,
      description: '서비스개발Part 매니저 개발자',
      position: 'Frontend Developer',
    },
  ]

  const computedPeriod = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = new Date(end)

    let years = endDate.getFullYear() - startDate.getFullYear()
    let months = endDate.getMonth() - startDate.getMonth()

    if (months < 0) {
      years--
      months += 12
    }

    return `${years}년 ${months}개월`
  }

  return (
    <>
      <div className='right-container'>
        <Card className={`card ${animation['fade-in']}`}>
          <Card className='card-project'>
            <p className='period'>
              {companies[0].start.substring(0, 7).replace(/-/g, '.')} ~ {companies[0].end.substring(0, 7).replace(/-/g, '.')} ({computedPeriod(companies[0].start, companies[0].end)})
            </p>

            <Row style={{ display: 'flex', justifyContent: 'start' }}>
              <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
                <img src={companies[0].logo} alt='sb' className='logo' />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={8}>
                <div className='text'>
                  직책: {companies[0].description}
                  <br />
                  <Divider type='vertical' className='divider' />
                  포지션: {companies[0].position}
                </div>
              </Col>
            </Row>

            <Project
              title='스마트시스템 (가제)'
              stacks={['Next.js', 'TypeScript', 'TailwindCSS', 'Zustand', 'AWS API Gateway', 'Vercel']}
              period='2024.05 ~ 2024.10'
              front={1}
              back={1}
              url=''
              descriptions={[
                'App Router, Route Handlers 사용하여 외부 백엔드 API key 보호, API 엔드포인트를 생성하여 BFF 패턴으로 활용',
                'Dynamic rendering 시 Hydration error 트러블슈팅',
                '재사용 가능한 custom Hooks 구현',
                '공통 UI 컴포넌트 구현',
                'Zustand 활용 및 persist 미들웨어로 localStorage 사용',
                '피그마 기반 화면 기획으로 Tailwind config 사전 작성, 개발 효율 증대',
                '모바일과 키오스크 해상도에 최적화된 반응형 디자인 구현',
                'AWS API Gateway Mock API 구현',
              ]}
              imgs={[]}
            />

            <Project
              title='도넛 - 전기차 보조금 조회 사이트'
              stacks={['Next.js', 'TypeScript', 'TailwindCSS', 'Google Analytics']}
              period='2024.01 ~ 현재'
              front={2}
              back={1}
              url='https://donut.im'
              descriptions={[
                '팀원들과 스터디를 겸해 진행한 토이 프로젝트를 사내 발표 후 긍정적인 피드백을 받아 EV Infra 앱의 신규 기능으로 등록',
                '모바일과 PC 해상도에 최적화된 반응형 디자인 구현',
                '신규 유저 유입을 위해 서비스 기획에 참여하고, 초기 UI/UX 화면 기획 담당',
                '전기차 동호회 카페에서 서비스 추천 게시글 확인, 유저 사이에서 긍정적인 피드백 획득',
                'Google Analytics 연동 및 서비스의 성장 가능성 확인',
                '출시 3개월 내 MAU 3만 초과 달성',
                'WAU/MAU 22.3%를 달성하여 주기적으로 방문하는 높은 지표 기록 확인',
                '‘전기차 보조금 조회’와 같은 자연 Google 검색어로 유저 유입 확인',
              ]}
              imgs={['/donut1.png', '/donut2.png']}
            />

            <Project
              title='EVI Hub Client Admin 웹 서비스 개발'
              stacks={['Vue3', 'TypeScript', 'Vuetify3', 'Vite', 'Pinia', 'AWS CodePipeline']}
              period='2022.03 ~ 현재'
              front={1}
              back={2}
              url=''
              descriptions={[
                'Vue3의 빌트인 컴포넌트 Suspense 사용하여 비동기로 렌더링',
                'AWS CodePipeline 활용하여 CI/CD 파이프라인 구축',
                'Google Maps API 활용',
                'i18n 라이브러리를 사용하여 다국어 처리 구현',
                'AWS EC2 Java에 Vue를 설치 및 빌드하여 배포되어있던 구조를 Vue는 단독으로 S3로 분리하고 CloudFront CDN 적용',
                '기존의 조회 기능이 POST 메서드로 구현된 문제를 해결하기 위해 백엔드 개발자와 협력하여 RESTful API에 맞춰 새로운 Client 전용 서비스로 재구현',
                '코드 가독성과 유지보수성을 위해 TypeScript를, 성능 개선과 Composition API와 같은 유연한 코드 구조를 위해 Vue3로, 빌드 속도 개선과 빠른 개발 서버 시작을 위해 Webpack을 Vite로 마이그레이션',
                '마이그레이션 후 S3 버킷 크기는 32%, 객체 수는 49%로 축소되어 성능 개선',
              ]}
              imgs={['/ca-home.png', '/ca-price.png']}
            />

            <Project
              title='NH올원뱅크 & NHpay 앱 웹뷰 개발'
              stacks={['Nuxt.js', 'JavaScript', 'TailwindCSS', 'Google Analytics']}
              period='2023.07 ~ 2023.09'
              front={1}
              back={1}
              url='https://nh.ev-infra.com'
              descriptions={['Naver Maps API 활용', 'NH올원뱅크 앱에서 소프트베리 EV Infra 앱으로의 유입과 사용자 경로 분석 등을 위해 Google Analytics를 연동']}
              imgs={['/nh1.png', '/nh2.png']}
            />
          </Card>
        </Card>
      </div>
    </>
  )
}

export default RightCard
