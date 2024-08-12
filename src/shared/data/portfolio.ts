export const tags = [
  {
    key: "achieve",
    text: "성과",
    color: "bg-lime-100",
  },
  {
    key: "optimization",
    text: "최적화 & 리팩토링",
    color: "bg-fuchsia-100",
  },
  {
    key: "frontend",
    text: "프론트엔드",
    color: "bg-purple-100",
  },
  {
    key: "backend",
    text: "백엔드",
    color: "bg-pink-100",
  },
  {
    key: "infra",
    text: "인프라",
    color: "bg-gray-200",
  },
  {
    key: "startup",
    text: "스타트업",
    color: "bg-emerald-100",
  },
]

export const articles = [
  {
    value: "doda",
    title: "스모어 홈페이지",
    desc: "디자이너와 협업하여 홈페이지 프론트엔드 백엔드 1인 개발. 팀 페이지, 블로그 등을 포함한 프로덕트의 모든 개발 업무 전담",
    skills: [
      "Figma-F24E1E?logo=figma&logoColor=fff",
      "Sass-C69?logo=sass&logoColor=fff",
      "JavaScript-F7DF1E?logo=javascript&logoColor=000",
      "TypeScript-3178C6?logo=typescript&logoColor=fff",
      "React-20232a?logo=react&logoColor=61DAFB",
      "Next.js-000?logo=nextdotjs&logoColor=fff",
      "i18next-26A69A?logo=i18next&logoColor=fff",
      "Amplitude-20232a?logo-amplitude",
      "Google%20Tag%20Manager-246FDB?logo=googletagmanager&logoColor=fff",
      "Node.js-5FA04E?logo=nodedotjs&logoColor=fff",
      "AdonisJS-5A45FF?logo=adonisjs&logoColor=fff",
      "Redis-FF4438?logo=redis&logoColor=fff",
      "MySQL-4479A1?logo=mysql&logoColor=fff",
      "Jest-C21325?logo=jest&logoColor=fff",
      "GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff",
      "Slack-4A154B?logo=slack&logoColor=fff",
      "Notion-000?logo=notion&logoColor=fff",
    ],
  },
  {
    value: "doda",
    title: "스모어 앱",
    desc: "CTO와 협업해 대규모 리팩토링과 테스트코드 작성, 로그인 페이지 프론트엔드와 백엔드 1인 개발",
    skills: [
      "Figma-F24E1E?logo=figma&logoColor=fff",
      "React-20232a?logo=react&logoColor=61DAFB",
      "Node.js-5FA04E?logo=nodedotjs&logoColor=fff",
      "AdonisJS-5A45FF?logo=adonisjs&logoColor=fff",
      "Auth0-EB5424?logo=auth0&logoColor=fff",
      "Session-000?logo=session&logoColor=fff",
      "Redis-FF4438?logo=redis&logoColor=fff",
      "MySQL-4479A1?logo=mysql&logoColor=fff",
      "Jest-C21325?logo=jest&logoColor=fff",
    ],
  },
  {
    value: "receptori",
    title: "리셉토리",
    desc: "아이디어를 개발로 현실화하고 배포, 나아가 번역과 마케팅까지 모든 워크 플로를 경험하며 제작한 1인 개발 인터랙티브 홈페이지 제작 에디터",
    skills: [
      "Sass-C69?logo=sass&logoColor=fff",
      "JavaScript-F7DF1E?logo=javascript&logoColor=000",
      "TypeScript-3178C6?logo=typescript&logoColor=fff",
      "React-20232a?logo=react&logoColor=61DAFB",
      "Next.js-000?logo=nextdotjs&logoColor=fff",
      "React%20Query-FF4154?logo=reactquery&logoColor=fff",
      "Zustand-20232a?logo-Zustand",
      "i18next-26A69A?logo=i18next&logoColor=fff",
      "Amplitude-20232a?logo-amplitude",
      "Node.js-5FA04E?logo=nodedotjs&logoColor=fff",
      "NestJS-E0234E?logo=nestjs&logoColor=fff",
      "Auth0-EB5424?logo=auth0&logoColor=fff",
      "JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff",
      "Redis-FF4438?logo=redis&logoColor=fff",
      "Prisma-2D3748?logo=prisma&logoColor=fff",
      "MySQL-4479A1?logo=mysql&logoColor=fff",
      "GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff",
      "Docker-2496ED?logo=docker&logoColor=fff",
      "Ubuntu-E95420?logo=ubuntu&logoColor=fff",
      "NGINX-009639?logo=nginx&logoColor=fff",
      "PM2-2B037A?logo=pm2&logoColor=fff",
      "Amazon%20EC2-F90?logo=amazonec2&logoColor=fff",
      "Amazon%20Route%2053-8C4FFF?logo=amazonroute53&logoColor=fff",
      "Amazon%20S3-569A31?logo=amazons3&logoColor=fff",
      "AWS%20Lambda-F90?logo=awslambda&logoColor=fff",
      "Amazon%20CloudWatch-FF4F8B?logo=amazoncloudwatch&logoColor=fff",
    ],
  },
]

export const titles = articles.map(({ title }) => title)

export interface PortfolioData {
  key: number
  tags: {
    key: string
    text: string
    color: string
  }[]
  title: string
  list?: string[]
  portfolio: string
}

export const portfolio_data = [
  {
    tags: [tags[0], tags[1]],
    title: "애니메이션 및 3D 프론트엔드 기술 사용 경험",
    list: [
      "Matter.js 물리엔진 구현",
      "Three.js의 기본 개념은 모두 숙지하고 있지만 테스트 이외에 실제 사용 경험은 없음",
      "framer motion 경험 허나 bootstrap과 mui등은 선호하지 않음.",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "CSS를 사랑하는 마음 ❤️",
    list: [
      "다들 CSS가 싫다고 하는데... 저는 좋습니다!",
      "CSS module, tailwind, CSS in js, Zero runtime CSS in js 등 다양한 CSS 라이브러리 경험",
      "튜닝의 끝은 순정입니다. SCSS module을 가장 선호합니다.",
      "줄이 길게 늘어선 맛집이 실망스러울순 있겠지만 실패는 없죠. Nextjs가 비공식 추천하는 tailwind도 선호합니다.",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Scroll magic, Gasp 라이브러리를 사용한 스크롤 트리거 이벤트 구현",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "프론트엔드 최적화 경험",
    list: [
      "리셉토리 앱에서 이미지 리사이징과 압축으로 업로드 속도 (LCP, no cache) 약 2s -> 0.9s 2배 단축",
      "HTTP cache, Next.js cache 이해 및 적용",
      "리셉토리 앱에서 필요에 따라 SSG 사용 (허나 리셉토리는 홈페이지 제작 에디터이기 때문에 대부분 SSR+CSR로 해야했음)",
      "리셉토리 앱 S3 서버를 서울에서 싱가폴으로 이동 (엄청난 속도 향상 경험...)",
      "dynamic import, image lazy loading 사용",
      "검색 api 요청 최소화를 위해 debounce, 스크롤 이벤트에 throttle 사용",
      "Reflow를 이해하고 최소화",
      "필요 없는 컴포넌트는 display none을 시켜 render tree 제외",
      "CSS 최적화 (CSS in JS의 script 삽입 방식의 문제점 파악 및 개선, 코드 재사용, inline style 최소화 등)",
      "React memoization (19에선 안써도 되지만..!) 사용 및 useEffect 사용 최대한 자제 (React 공식문서를 믿습니다!)",
      "react query의 캐싱과 optimistic ui를 이해 및 적용",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "백엔드와 프론트엔드의 에러 핸들링 방법 합일화 후 Nest.js Exception filters 사용 에러 Response 획일화",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "도다마인드 웹페이지 리뉴얼 후 MUA [???]% 증가",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Amplitude를 사용해 Scroll Depth & User event 및 A/B Test 구현 및 분석",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Google Ads 수익 요청 및 광고 삽입",
    list: ["전 회사에서 캐시카우 프로젝트에서 경험, 아쉽게도 이 서비스는 현재 종료되었음."],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Slack API 사용 및 Slack Bot 실제 제작 경험",
    list: ["전 근무지에서 Bot을 만들어 점심 추천을 받고 투표를 진행하게 하는 Bot 제작"],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "이미지 Lazy 로딩, 이미지 스프라이팅, 이미지 리사이징 (Sharp)등의 이미지 최적화",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "로그인 기능 및 Google, Microsoft Oauth 구현",
    list: [
      "Session 기반 로그인, JWT 기반 로그인 구현",
      "nodemailer를 사용한 확인 코드 이메일 발송",
      "로그인 유지, 비밀번호 찾기 구현",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Twitter(엑스) API 연동",
    list: ["특정 키워드가 포함된 트위터 포스트를 뿌려주는 API였는데 아쉽게도 배포 이후 사용성 문제로 삭제되었다."],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "데이터베이스 정규화 및 역정규화",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "인덱싱 및 fullText 인덱싱 적용",
    list: [
      "url의 query로 자주 get하는 칼럼에 인덱싱 적용 (custom link라는 칼럼이 였는데 primary key와는 다른 칼럼이다.)",
      "검색을 위해 여러 키워드를 하나의 칼럼에 String으로 저장하고 fullText 인덱싱 적용 후 Like절 검색",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Redis를 사용한 성능 최적화 [???]",
    list: [
      "자주 Get하고 변하지 않는 데이터를 Redis에 저장해 성능 개선",
      "Redis에 값이 없거나 expire되면 DB에서 값을 가져와 레디스로 자동 캐싱하는 함수(Service) 구현",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "유닛 테스트 설계 및 작성 후 Git Merge, Pull request, Push 에서의 테스트 의무화",
    list: ["약 [???]의 테스트 코드 작성 및 검토"],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Pull Request 템플릿 등의 github 협업 설정 및 Git Flow 전략 수립",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Github actions 와 Docker (도커)를 통한 CI/CD 설계",
    list: [
      "컨테이너 간 네트워크 연결 및 yarn,alpine,dockerignore 등을 사용 빌드 용량 최적화",
      "React, Nest+Prisma, Mysql, Redis, Nginx, Certbot(SSL) Dockerizing 경험",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "AWS S3 이미지 리사이징 및 Lambda 연결, 비용 절감을 위해 다른 스토리지 탐색 및 적용",
    list: [
      "S3 Lens는 시기상조이고 S3 Intelligent-Tiering도 좋지만, 마이크로 서비스는 wasabi를 사용하면 경제적이다!",
      "리셉토리 서비스는 Image request가 빈번히 일어나기에 S3 프리티어의 request 한도가 감당을 하지 못한다.",
      "wasabi는 request 요청 무제한의 lambda 연결 가능! 1TB에 약 6천원 이라는 착한 가격을 자랑한다.",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "실제 앱에 Nginx를 사용 리버스 프록시, 포트 포워딩 적용",
    list: [
      "로드 밸런싱은 규모가 크지 않아 적용하지 않았지만 개념은 물론 적용법까지 알고있다.",
      "같은 맥락으로 리셉토이 앱의 규모가 커질 것을 우려해 김칫국을 마시며 JWT로 stateless하게 로그인을 구현했다.",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Certbot 을 사용한 SSL 발급 및 자동 갱신",
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "AWS 비용 분석 및 성능 검토, 최적화",
    list: [
      "Lambda에 재귀함수를 AWS Cloud watch를 찾아내 개선, 예상 지출 약 100달러의 손해를 무마했다.",
      "근데 Cloud watch에서 10달러가 청구됐다 ㅠㅠ AWS 고객센터에 아부해서 봐줬다.",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "AWS Route53를 이용한 포트포워딩 및 도메인 등록",
    list: ["기본적인 네트워크 지식이 큰 도움이 되었다."],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "웹 보안",
    list: [
      "JWT의 보안 문제점 (XSS, CSRF)을 cookie와 http header token을 조합해 해결",
      "Cookie http only 및 secure, origin 및 CORS 설정 보안",
      "JWT, session, Cookie secret",
      "node helmet, hpp 라이브러리 사용",
      "Throttle ttl, limit 사용으로 무리한 요청 (DDoS) '어느정도' 예방",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "CORS 해결",
    list: ["1인 개발으로 백엔드를 바로 고칠 수 있으니 전혀 힘들지 않았다."],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "robot.txt와 nextjs sitemap, utm, 메타 태그 개선으로 SEO 최적화",
    list: ["검색에 노출되지 않았던 사이트를 SEO로 개선해 Google analyst 분석 결과 [???]상승"],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "i18next SSR 국제화 및 한국어 일본어 영어 번역",
    list: [
      "path를 오염시키지 않기 위해 Accept-Language 헤더와 Cookie를 사용해 SSR 국제화 적용",
      "번역은 일본어, 영어 통역 자격증이 있지만 Chatgpt에게 맡기고 검수만 진행",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "NestJS의 라이프사이클 이해",
    list: ["Middleware, Guard, Interceptor, Decorators, Exceptions", "Controller, Service, Module의 이해 및 모듈화"],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Bundle-analyzer를 사용한 최적화 및 라이브러리 간소화",
    list: [
      "라이브러리를 사랑하지만 용량 문제로 최대한 간소화 했다.",
      "최대한 라이브러리를 제거하고 Custom hooks, util등은 직접 구현했다.",
      "Tree shaking으로 빌드 용량 최소화",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "AWS EC2 초기 설정",
    list: [
      "운영체제에 대한 기본 지식 (RAM, CPU, Proxy server)를 바탕으로 EC2 검토 및 선택 (그래도 프리티어..)",
      "메모리 스왑으로 RAM 최대 용량 개선",
      "권한, 보안그룹, IAM, 인바운드 규칙 등 기본 설정에 대한 지식",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "대규모 앱 리팩토링 경험",
    list: ["실무에서의 매우 대규모의 서버 앱을 무중단 리팩토링했던 경험."],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "1인 개발로 유저 수 30명, MCU 300명 달성",
    list: ["실무에서의 매우 대규모의 서버 앱을 무중단 리팩토링했던 경험."],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "스타트업의 모든 워크 플로를 1인 개발으로 간접 경험",
    list: [
      "붕붕 떠다니는 아이디어를 구체화 하는 작업이 매우 고단했으며 많은 시간을 투자했다.",
      "나조차도 나자신과 싸우며 애써 만든 기능을 버리고 다 된 프로덕트를 엎어버리며 우여곡절으로 1인 개발을 했다.",
      "코드 리뷰, 싱크업 회의, 트와일라잇 등 경험한 스타트업의 경영 방식이 사실 다 필요하다는 걸 깨달았다.",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "스타트업 초기멤버 경험",
    list: [
      "C-level만 있는 회사에 초기멤버로 들어가 회사와 같이 성장함",
      "다양한 스타트업 경영 방식을 직접 보고 느끼고 경험하며 애정을 가지게 됨",
      "우여곡절은 당연히 많았지만 같은 목표를 바라보며 서로 믿고 의지하는 스타트업에 매력을 느끼게 됨",
    ],
    portfolio: titles[0],
  },
  {
    tags: [tags[0], tags[1]],
    title: "Chat GPT, Claude 등 인공지능 언어 모델 활용",
    portfolio: titles[0],
  },
].map((v, i) => ({ ...v, key: i + 1 }))

export const keywords = portfolio_data.map(
  ({ title, list, tags }) => `${title} ${list ? list.join(" ") : ""} ${tags.join(" ")}`
)

export const histories = [
  {
    date: "2013년 11월 ~ 2015년 8월",
    title: "육군병장 만기제대",
  },
  {
    date: "2017년 4월 - 2018년 3월",
    title: "(株)アドベンチャー 입사",
    subTitle: "도쿄 에비스 소재 여행회사에서 마케팅과 티켓발권 담당.",
  },
  {
    date: "2018년 11월 - 2020년 2월",
    title: "호텔 매니저 근무",
    subTitle:
      "호텔 업무를 총괄하는 책임자로서 근무. 어린 나이에 막중한 책임감으로 부담도 됬지만 한 층 더 성숙해질 수 있었던 경험",
  },
  {
    date: "2019년 12월",
    title: "일본어 통역 자격증 취득",
    subTitle: "문화체육관광부에서 실시하는 통역분야의<br/>유일한 일본어 국가공인자격증.",
  },
  {
    date: "2020년 12월",
    title: "영어 통역 자격증 취득",
    subTitle: "문화체육관광부에서 실시하는 통역분야의<br/>유일한 영어 국가공인자격증.",
  },
  {
    date: "2021년 4월",
    title: "학점은행제(4년제) 졸업",
    subTitle: "경영학과 전공(학사)",
  },
  {
    date: "2021년 6월",
    title: "정보처리기사 취득",
    subTitle: "자격증 번호 : 21201071076K",
  },
  {
    date: "2021년 11월 ~ 2023년 4월 (1년 5개월)",
    title: "도다마인드 입사",
    subTitle: "풀스택 개발, 일본어 번역",
  },
  {
    date: "2023년 4월",
    title: "서울에서 삿포로까지 3500km 자전거 여행",
    subTitle: "포기하지 않는 마음과 끈기 그리고 할 수 있다는<br/>자존감을 갖게된 뜻 깊은 여행",
  },
  {
    date: "2023년 6월",
    title: "세계여행",
    subTitle: "25개국 이상을 돌며 견문을 넓히고<br/>세상 속의 나 자신을 알게된 세계여행",
  },
  {
    date: "2024년 1월 ~ 2024년 8월",
    title: "태국 북중부 5000km 오토바이 전국 여행",
    subTitle:
      "오토바이로 산을 넘고 강도 건너 도시부터 시골까지 관광으로선 알 수 없는 가슴 따뜻한 진짜 태국을 알 수 있었던 여행",
  },
]

export const colors = [
  "bg-pink-50",
  "bg-blue-50",
  "bg-lime-50",
  "bg-purple-50",
  "bg-sky-50",
  "bg-emerald-50",
  "bg-fuchsia-50",
  "bg-indigo-50",
  "bg-rose-50",
]

export const colors_strong = [
  "bg-pink-300",
  "bg-blue-300",
  "bg-lime-300",
  "bg-purple-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-fuchsia-300",
  "bg-indigo-300",
  "bg-rose-300",
]

export const colors_text = [
  "text-pink-800",
  "text-blue-800",
  "text-lime-800",
  "text-purple-800",
  "text-sky-800",
  "text-emerald-800",
  "text-fuchsia-800",
  "text-indigo-800",
  "text-rose-800",
]
