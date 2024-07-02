import { Card, Divider, Row, Col } from 'antd'
import './rightCard.css'
import sbLogoImg from '/softberry.svg'
import Project from '../Project/Project'

const RightCard = () => {
  return (
    <>
      <div className='right-container'>
        <Card className='card'>
          <Card className='card-project'>
            <p className='period'>2022.03 ~ 현재</p>

            <Row style={{ display: 'flex', justifyContent: 'start' }}>
              <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
                <img src={sbLogoImg} alt='sb' className='logo' />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={8}>
                <p className='text'>
                  직책: EVI Hub 연구원 개발자
                  <br />
                  <Divider type='vertical' className='divider' />
                  포지션: Frontend Developer
                </p>
              </Col>
            </Row>

            <Project
              title='스마트시스템 (가제)'
              stacks={[
                'Next.js',
                'TypeScript',
                'TailwindCSS',
                'Zustand',
                'AWS API Gateway',
              ]}
              period='2024.05 ~ 현재'
              front={1}
              back={1}
              url=''
              descriptions={[
                '프로젝트 생성 및 초기화, 코드 구조 셋업',
                '모바일과 키오스크 해상도에 최적화된 반응형 디자인 구현',
                'AWS API Gateway Mock API 구현',
                'AWS S3, Route 53, CloudFront를 활용한 프론트엔드 서버 호스팅',
              ]}
              imgs={[]}
            />

            <Project
              title='EVI Hub Client Admin 웹 서비스 개발'
              stacks={[
                'Vue3',
                'TypeScript',
                'Vuetify3',
                'Vite',
                'Pinia',
                'AWS CodePipeline',
              ]}
              period='2022.03 ~ 현재'
              front={1}
              back={2}
              url=''
              descriptions={[
                'Vue3의 빌트인 컴포넌트 Suspense 사용하여 비동기로 렌더링',
                'AWS CodePipeline과 CodeBuild를 활용하여 CI/CD 파이프라인 구축',
                '함수 기반 유연한 코드 구조를 적용하기 위해 Composition API 사용',
                'Google Maps API 활용하여 지도 기능 구현 및 커스터마이징',
                '시간표 관련 라이브러리가 없어 직접 맞춤형 솔루션을 설계하고 구현',
                'i18n 라이브러리를 사용하여 다국어 처리 구현',
                'AWS EC2 Java에 Vue를 설치 및 빌드하여 배포되어있던 구조를 Vue는 단독으로 S3로 분리하고 CloudFront CDN 적용하여 로딩속도 개선',
                '기존의 조회 기능이 POST 메서드로 구현된 문제를 해결하기 위해 백엔드 개발자와 협력하여 RESTful API에 맞춰 새로운 Client 전용 서비스로 재구현',
                '코드 가독성과 유지보수성을 위해 TypeScript를, 성능 개선과 Composition API와 같은 신기능 사용을 위해 Vue 3로, 빌드 속도 개선과 빠른 개발 서버 시작을 위해 Webpack을 Vite로 마이그레이션',
                '마이그레이션 후 S3 버킷 크기는 32%, 객체 수는 49%로 축소되어 성능 개선 경험',
              ]}
              imgs={['/ca-home.svg', '/price.svg']}
            />

            <Project
              title='도넛 - 전기차 보조금 조회 사이트'
              stacks={['Next.js', 'TypeScript', 'TailwindCSS']}
              period='2024.01 ~ 2024.02'
              front={2}
              back={1}
              url='https://donut.im'
              descriptions={[
                '팀원들과 스터디를 겸해 진행한 토이 프로젝트를 사내 발표 후 긍정적인 피드백을 받아 EV Infra 앱의 신규 기능으로 등록',
                '프로젝트 생성 및 초기화, 코드 구조 셋업',
                '모바일과 PC 해상도에 최적화된 반응형 디자인 구현',
                '디자이너와 협업하여 아이디어를 제안하여 dropdown UI에 적용할 애니메이션 구현',
                '기획 단계에서 디자이너와 함께 UI/UX를 고민하며 sticky 속성을 활용하여 모바일 환경에서의 사용자 경험 향상',
                'AWS S3, Route 53, CloudFront를 활용한 프론트엔드 서버 호스팅',
              ]}
              imgs={['/donut1.svg', '/donut2.svg']}
            />

            <Project
              title='NH올원뱅크 웹뷰 개발'
              stacks={[
                'Nuxt.js',
                'JavaScript',
                'TailwindCSS',
                'Google Analytics',
              ]}
              period='2023.07 ~ 2023.09'
              front={1}
              back={1}
              url='https://nh.ev-infra.com'
              descriptions={[
                '프로젝트 생성 및 초기화, 코드 구조 셋업',
                'Naver Maps API 활용',
                'NH올원뱅크 앱에서 소프트베리 EV Infra 앱으로의 유입과 사용자 경로 분석 등을 위해 Google Analytics를 연동',
                'AWS S3, Route 53, CloudFront를 활용한 프론트엔드 서버 호스팅',
              ]}
              imgs={['/nh1.svg', '/nh2.svg']}
            />
          </Card>
        </Card>
      </div>
    </>
  )
}

export default RightCard
