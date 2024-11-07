export const tags = [
  {
    key: "achieve",
    text: "성과",
    color: "bg-lime-100",
  },
  {
    key: "experience",
    text: "경험",
    color: "bg-rose-100",
  },
  {
    key: "optimization",
    text: "프론트엔드",
    color: "bg-fuchsia-100",
  },
  {
    key: "backend",
    text: "백엔드 & 인프라",
    color: "bg-blue-100",
  },
  {
    key: "startup",
    text: "스타트업",
    color: "bg-emerald-100",
  },
]

export const skillMap = {
  figma: "Figma-F24E1E?logo=figma&logoColor=fff",
  sass: "Sass-C69?logo=sass&logoColor=fff",
  typescript: "TypeScript-3178C6?logo=typescript&logoColor=fff",
  react: "React-20232a?logo=react&logoColor=61DAFB",
  nextjs: "Next.js-000?logo=nextdotjs&logoColor=fff",
  i18next: "i18next-26A69A?logo=i18next&logoColor=fff",
  amplitude: "Amplitude-20232a?logo-amplitude",
  gtm: "Google%20Tag%20Manager-246FDB?logo=googletagmanager&logoColor=fff",
  nodejs: "Node.js-5FA04E?logo=nodedotjs&logoColor=fff",
  adonisjs: "AdonisJS-5A45FF?logo=adonisjs&logoColor=fff",
  redis: "Redis-FF4438?logo=redis&logoColor=fff",
  mysql: "MySQL-4479A1?logo=mysql&logoColor=fff",
  jest: "Jest-C21325?logo=jest&logoColor=fff",
  githubActions: "GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff",
  slack: "Slack-4A154B?logo=slack&logoColor=fff",
  notion: "Notion-000?logo=notion&logoColor=fff",
  auth0: "Auth0-EB5424?logo=auth0&logoColor=fff",
  session: "Session-000?logo=session&logoColor=fff",
  reactQuery: "React%20Query-FF4154?logo=reactquery&logoColor=fff",
  zustand: "Zustand-20232a?logo-Zustand",
  nestjs: "NestJS-E0234E?logo=nestjs&logoColor=fff",
  jwt: "JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff",
  prisma: "Prisma-2D3748?logo=prisma&logoColor=fff",
  docker: "Docker-2496ED?logo=docker&logoColor=fff",
  ubuntu: "Ubuntu-E95420?logo=ubuntu&logoColor=fff",
  nginx: "NGINX-009639?logo=nginx&logoColor=fff",
  pm2: "PM2-2B037A?logo=pm2&logoColor=fff",
  ec2: "Amazon%20EC2-F90?logo=amazonec2&logoColor=fff",
  route53: "Amazon%20Route%2053-8C4FFF?logo=amazonroute53&logoColor=fff",
  s3: "Amazon%20S3-569A31?logo=amazons3&logoColor=fff",
  lambda: "AWS%20Lambda-F90?logo=awslambda&logoColor=fff",
  cloudwatch: "Amazon%20CloudWatch-FF4F8B?logo=amazoncloudwatch&logoColor=fff",
  tailwindcss: "Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff",
  flutter: "Flutter-02569B?logo=flutter&logoColor=fff",
  googleTagManager: "Google%20Tag%20Manager-246FDB?logo=googletagmanager&logoColor=fff",
}

export const articles = [
  {
    value: "doda",
    title: "스모어 홈페이지 & 앱",
    color: "bg-g-blue",
    link: null,
    date: "2021년 11월 ~ 2023년 4월 (1년 5개월)",
    tag: "경력",
    desc: "<span class='font-semibold'>스타트업 풀스택 개발 경력<br/>2021년 11월 ~ 2023년 4월 (1년 5개월)</span><div class='py-1'></div><span class='point'>[웹사이트]</span> 블로그, 가이드 등 서브 페이지를 포함한 웹사이트의 프론트엔드와 백엔드를 100% 전담 개발<div class='py-1'></div> <span class='point'>[앱]</span> 로그인 페이지 100% 전담 개발 / 그 외 리팩토링, API 연동(백엔드), 테스트 코드 작성을 CTO와 협업<div class='py-1'></div><span class='point'>[사이드]</span> 캐시카우 프로젝트, 슬랙 봇, 기술 블로그 등을 개발",
    skills: [
      skillMap.react,
      skillMap.nextjs,
      skillMap.typescript,
      skillMap.i18next,
      skillMap.amplitude,
      skillMap.gtm,
      skillMap.nodejs,
      skillMap.nestjs,
      skillMap.adonisjs,
      skillMap.auth0,
      skillMap.redis,
      skillMap.mysql,
      skillMap.jest,
      skillMap.githubActions,
    ],
  },
  {
    value: "rankingtogether",
    color: "bg-pink-100",
    title: "랭킹투게더",
    link: "https://rankingtogether.com",
    desc: "<span class='font-semibold'>비즈니스 모델 구상부터 배포까지 A-Z 1인 개발<br/>2024년 8월 ~ (2개월 이상)</span><div class='py-1'></div>케이팝, 아이돌, MBTI, 궁합, 연애, 타로 등 다양한 주제로 나만의 아름답고 특별한 심리 테스트와 퀴즈를 만들고 공유해 보세요 😎",
    date: "2024년 8월 ~",
    tag: "1인 개발",
    skills: [
      skillMap.typescript,
      skillMap.react,
      skillMap.nextjs,
      skillMap.tailwindcss,
      skillMap.reactQuery,
      skillMap.zustand,
      skillMap.i18next,
      skillMap.googleTagManager,
      skillMap.amplitude,
      skillMap.nestjs,
      skillMap.redis,
      skillMap.prisma,
      skillMap.mysql,
      skillMap.githubActions,
      skillMap.docker,
      skillMap.ubuntu,
      skillMap.nginx,
      skillMap.ec2,
      skillMap.route53,
      skillMap.s3,
      skillMap.lambda,
      skillMap.cloudwatch,
    ],
  },
  {
    value: "receptori",
    title: "리셉토리",
    date: "2024년 4월 ~ 6월",
    tag: "1인 개발",
    link: null,
    desc: "<span class='font-semibold'>아무도 사용하지 않아 망했지만, 좋은 경험이 된 프로젝트<br/>2024년 4월 ~ 6월 (2개월)</span><div class='py-1'></div>간편하면서도 우아한 홈페이지 제작 SaaS 플랫폼",
    color: "bg-indigo-200",
    skills: [
      skillMap.typescript,
      skillMap.react,
      skillMap.nextjs,
      skillMap.sass,
      skillMap.i18next,
      skillMap.nestjs,
      skillMap.mysql,
      skillMap.githubActions,
      skillMap.docker,
      skillMap.ec2,
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

export const portfolio_comp: {
  [key: string]: JSX.Element
} = {
  rankingtogether: (
    <>
      <h3 className={"border-l-8 border-pink-200 pl-4 mt-8 mb-2 text-xl font-semibold"}>
        내 관심사나 취향을 테스트하고 공유하는 콘텐츠인데 당연히 예뻐야죠 😍
      </h3>
      <div className={"grid grid-cols-3 gap-1"}>
        <video className="w-full  rounded-lg border border-border" autoPlay loop muted playsInline>
          <source src="/images/rankingtogether/play-2.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        <video className="w-full  rounded-lg border border-border" autoPlay loop muted playsInline>
          <source src="/images/rankingtogether/play-3.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        <video className="w-full  rounded-lg border border-border" autoPlay loop muted playsInline>
          <source src="/images/rankingtogether/play-4.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
      </div>

      <h3 className={"border-l-8 border-pink-200 pl-4 mt-8 mb-2 text-xl  font-semibold"}>
        내 테스트 결과를 더욱 더 특별하게, 공유하고 싶어지는 마법 🪄
      </h3>
      <div className={"grid grid-cols-3 gap-1"}>
        <video className="w-full  rounded-lg border border-border" autoPlay loop muted playsInline>
          <source src="/images/rankingtogether/result-1.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        <video className="w-full  rounded-lg border border-border" autoPlay loop muted playsInline>
          <source src="/images/rankingtogether/result-2.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        <video className="w-full  rounded-lg border border-border" autoPlay loop muted playsInline>
          <source src="/images/rankingtogether/result-3.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
      </div>

      <h3 className={"border-l-8 border-pink-200 pl-4 mt-8 mb-2 text-xl  font-semibold"}>
        쉽고 예쁘게 나만의 컨텐츠를 만들어보세요!
        <br />
        <span className="text-pink-600">로그인 없이 무료 체험을 할 수 있어요</span> 😎🚀
      </h3>
      <video className="w-full rounded-lg border border-border" autoPlay loop muted playsInline>
        <source src="/images/rankingtogether/preview-edit.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      <div className="w-full mt-10 mb-16 flex-center flex-col">
        <a
          href="https://rankingtogether.com/ko"
          target="_blank"
          className={
            "w-[90%] xs:w-[400px] py-4 rounded-[40px] bg-gradient-to-r from-rose-400 to-pink-400 text-white flex-center gap-3"
          }
        >
          <div className="w-10 h-10 flex-center rounded-full bg-pink-200">
            <img className="w-8 h-8" src={"/images/rankingtogether/favicon.png"} />
          </div>
          <span className="text-white font-bold text-lg">웹사이트 둘러보기</span>
        </a>
      </div>
    </>
  ),
  receptori: (
    <>
      <h3 className={"border-l-8 border-indigo-200 pl-4 mt-8 mb-2 text-2xl"}>
        리셉토리로 만든 <span className={"text-blue-600"}>블랙핑크 콘서트 예약 폼</span> 제작 예시 🤩🚀
      </h3>
      <video className="w-full rounded-lg border border-border" autoPlay loop muted playsInline>
        <source src="/images/receptori/rece-3.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      <h3 className={"border-l-8 border-indigo-200 pl-4 mt-8 mb-2 text-lg sm:text-xl"}>
        섹션 별로 컴포넌트를 만들고 💫
        <br />
        컬러, 패딩, 디자인, 임베딩 등 다양한 커스터마이징 기능이 있어요.
      </h3>
      <video className="w-full rounded-lg border border-border" autoPlay loop muted playsInline>
        <source src="/images/receptori/rece-1.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      <h3 className={"border-l-8 border-indigo-200 pl-4 mt-8 mb-2 text-lg sm:text-xl"}>
        날짜, 시간, 성별, 선택 리스트, 전화번호, 이메일 등<br className="hidden xs:block" />
        다양한 폼 기능 사용 가능해요.
      </h3>
      <video className="w-full rounded-lg border border-border" autoPlay loop muted playsInline>
        <source src="/images/receptori/rece-2.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      <h3 className={"border-l-8 border-indigo-200 pl-4 mt-8 mb-2 text-lg sm:text-xl"}>
        요청들을 집계해 통계로 볼 수 있고 <br />
        제작자가 직접 분석(Analytic) 가능해요. 📊
      </h3>
      <video className="w-full rounded-lg border border-border" autoPlay loop muted playsInline>
        <source src="/images/receptori/rece-4.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>

      <div className="w-full flex-center flex-col mt-12">
        <div className="w-full xs:w-[90%] sm:w-[600px] mx-auto px-4 xs:px-7 pt-7 ">
          <h4 className="text-2xl font-bold my-1 mb-2.5">망했습니다.</h4>
          <p className="text-md leading-6 mb-6">
            1인 개발로 "리셉토리"라는 폼 빌드 에디터 웹사이트를 만들었지만 결국 사용자가 없어 폐쇄하게 되었습니다. 이
            경험에서 얻은 후기와 피드백은 다음과 같습니다
          </p>
          <h4 className="text-xl font-bold my-1 mb-2">1. 시장 조사 및 레퍼런스 참고 부족</h4>
          <b>사용자 니즈를 제대로 파악하지 못했습니다.</b>
          <p className="text-md leading-6 mt-4">
            실제 경쟁사 에서는 매우 간결하게 폼 자체를 임베드 할 수 있는 여러가지 템플릿 형식으로, 커스터마이징은 텍스트
            정도의 간단한 기능만을 제공 했습니다.
          </p>
          <p className="text-md leading-6 mt-4">
            그리고 유저들은 보통 노션으로 홈페이지를 만들고 임베드하는 방식으로 많이 사용하고 있었습니다...
          </p>
        </div>
        <div className="flex-center flex-col gap-3 pt-6">
          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          <div className="w-1 h-1 rounded-full bg-gray-400 mb-2"></div>
          <span>나머지 읽기 👇🏻</span>
        </div>
      </div>

      <div className="w-full mt-3 flex-center">
        <a
          href="https://jungle-glitter-db0.notion.site/12d967b0358880299774f63213aee2ea?pvs=4"
          target="_blank"
          className={"w-[90%] xs:w-[400px] py-4 rounded-[40px] bg-black flex-center gap-3"}
        >
          <img className="w-12 h-12" src={"/images/icons/notion.png"} />
          <span className="text-white font-bold">피드백 및 후기 보러가기</span>
        </a>
      </div>
    </>
  ),
}

export const portfolio_info: {
  [key: string]: {
    tags: {
      key: string
      text: string
      color: string
    }[]
    title: string
    list?: string[]
  }[]
} = {
  doda: [
    {
      tags: [tags[4]],
      title: "스타트업 초기 멤버 경험",
      list: [
        "C-level만 있는 회사에 초기 멤버로 들어가 풀스택 개발",
        "다양한 스타트업 경영 방식에 대해 적극적으로 의논하고 도입",
        "개발자 면접관 참여, CJ E&M센터 방문 후 고객 피드백 수렴, 일본 진출 서포트 등 개발 외에 다양한 업무 수행",
        "홈페이지 리뉴얼 후 <span class='mark'>MAU 200%</span> 증가",
      ],
    },
    {
      tags: [tags[3], tags[4]],
      title: "대규모 앱 리팩토링 경험",
      list: [
        "실무에서의 <span class='mark'>대규모의 서버를 무중단 리팩토링</span>했던 경험.",
        "Pull Request 템플릿 등의 github 협업 설정 및 Git Flow 전략 수립",
        "수치를 계산하지는 않았지만 성능 개선과 가독성, 코드 컨벤션 등 협업이 용이하게 최적화 완료. 매우 고된 작업이였고 그렇기에 양질의 경험을 쌓게 됨",
      ],
    },
    {
      tags: [tags[2], tags[3]],
      title: "로그인 페이지 개발 (프론트엔드, 백엔드)",
      list: [
        "다른 CSR 프레임워크로 만들어진 서비스에 로그인 페이지를 마이크로 서비스로 이식 후 충돌 문제 해결",
        "Session(local)과 JWT(oauth)를 기반으로 nodemailer, oauth api 등을 사용해 전체적인 로그인 페이지 구현",
        "로그인 유지, 비밀번호 찾기 구현, 템플릿 사용 리디렉트 등 로그인 관련 시스템 구현",
      ],
    },
    {
      tags: [tags[3]],
      title: "유닛 테스트 설계 및 작성 후 CI에서의 테스트 의무화",
      list: [
        "[원인] : 대규모 트래픽에도 대비가 되어있고 문제 없이 잘 돌아갔지만 테스트가 없어 에러에 취약한 상태였다.",
        "[해결] : 약 <span class='mark'>91개의 테스트 코드</span> 작성 및 검토 (Auth 포함) 후 테스트 자동화",
      ],
    },
    {
      tags: [tags[2]],
      title: "프론트엔드 최적화 (Next.js)",
      list: [
        "dynamic import, image lazy loading 사용해 초기 로딩 속도 약 <span class='mark'>30% 개선</span>",
        "react query의 캐싱과 Next.js cache, SSG 적용",
        "Animation 최적화 (reflow 방지, debounce, throttle, will-change)",
      ],
    },
    {
      tags: [tags[0], tags[2]],
      title: "robot.txt와 nextjs sitemap, meta tags 개선으로 SEO 최적화",
      list: [
        "[원인] : 브라우저 검색에 타겟 키워드가 노출되지 않는 상황 발생",
        "[해결] : 검색에 노출되지 않았던 키워드를 robots.txt와 sitemap.xml을 통해 개선<br/>Google search console 분석 결과 특정 페이지 <span class='mark'>일일 평균 클릭 수 1000% 상승</span>",
      ],
    },
    {
      tags: [tags[0], tags[2]],
      title: "이미지 최적화",
      list: [
        "[원인] : 이미지 로딩 속도와 Layout Shift 문제로 사용자 경험(UX)가 떨어짐",
        "[해결] : 이미지 리사이징과 압축으로 최대 용량 <span class='mark'>50%</span> 이상 압축<br/>이미지 스프라이팅을 이용, 최대 <span class='mark'>1/16</span> 이상 http 요청 감소<br/>lazy load에만 의지하지 않고 preload를 섞어 통해 UX와 성능을 동시에 높임<br/>http header의 no cache, ETag등 사용 결과 LCP 약 2s -> 0.9s <span class='mark'>2배 단축</span>",
      ],
    },
    {
      tags: [tags[2]],
      title: "CSS 라이브러리 성능 개선",
      list: [
        "[원인] : styled-component의 props 삽입 시 style-sheet 대량 생성 문제 발견",
        "[해결] : CSS in JS의 문제점과 한계를 인지하고 CTO와 협의 후 SCSS로 변경 (현재는 tailwindcss 선호)",
      ],
    },
    {
      tags: [tags[0], tags[3]],
      title: "Redis를 사용한 DB 요청 최소화",
      list: [
        "[원인] : Blog나 Template에서 사용하는 값은 어드민이 수정하지 않는 한 불변하며 수정 횟수가 매우 적어 db 연결을 최소화 하는게 맞다고 생각",
        "[해결] : Blog나 Template값을 Redis에 저장해 성능 개선 (Json 용량으로 유추해 평균 <span class='mark'>30%</span> 이상 속도 개선 추정), Redis에 값이 없거나 expire되면 DB에서 값을 가져와 레디스로 자동 캐싱하는 함수(Service) 구현",
      ],
    },
    {
      tags: [tags[1], tags[4]],
      title: "마케터와 데이터 분석 협업",
      list: [
        "[구현] : Amplitude와 GA를 사용해 User Flow event 구현 및 마케터와 협업해 대시보드 작성, 분석 참여",
        "[문제] : 마케터가 원하는 프로퍼티 그리고 A/B test 등이 계속 바뀌고 단순 반복 개발 비중이 늘어났다.",
        "[해결] : 모든 event에 대한 코드를 미리 만들어 놓고 switch 시스템을 두어 자동화 했고<br/>확정된 A/B test를 미리 받아 바로 적용 가능하게 standby 시켜 놓았다.",
      ],
    },
    {
      tags: [tags[1], tags[2]],
      title: "i18next SSR 국제화 및 일본어 영어 번역",
      list: [
        "Accept-Language와 path를 사용해 SSR 국제화 적용",
        "번역은 일본어, 영어 통역 자격증을 바탕으로 Chatgpt의 번역을 검수하며 프로젝트 진행",
      ],
    },
    {
      tags: [tags[4]],
      title: "도다 짝꿍 과 점심 추천 Slack Bot 제작 (nest.js)",
      list: [
        "[계기] : 사이드 프로젝트로 사내 문화를 개선시키고 불필요한 시간 낭비를 줄이고자하는 아이디어로 개발",
        "[피드백] : 실생활의 피상적인 알고리즘을 내 것으로 만들며 한정된 자원 내 빠른 개발의 중요성을 통감",
      ],
    },
  ],
  receptori: [],

  rankingtogether: [
    {
      tags: [tags[4]],
      title: "스타트업의 모든 워크 플로를 1인 개발으로 간접 경험",
      list: [
        "붕붕 떠다니는 아이디어를 구체화 하는 작업이 매우 고단했으며 많은 시간을 투자",
        "애써 만든 기능을 버리고 다 된 프로덕트를 엎어버리며 우여곡절으로 1인 개발 진행",
        "마일스톤 확립, 코드 리뷰, 싱크업 회의 등 스타트업 경영 방식의 필요성 통감",
        "<span class='mark'>코딩이 제일 쉽고 개발이 제일 어렵다</span>",
      ],
    },
    {
      tags: [tags[3]],
      title: "실제 활성 사용자를 염두한 웹 보안 구축",
      list: [
        "JWT의 보안 문제점 (XSS, CSRF)을 cookie와 http header token을 조합해 해결",
        "Cookie & CORS security / node helmet & hpp / Rate Limiting / Auth guard<br/>anti SQL injection / SSL / AWS IAM",
      ],
    },

    {
      tags: [tags[3]],
      title: "Mysql 인덱싱 및 fullText 도입",
      list: [
        "[원인] : 많은 칼럼 들을 순차적으로 검색한다면 성능 저하가 우려되었음",
        "[해결] : 검색을 위해 여러 키워드를 하나의 칼럼에 String으로 저장하고 fullText 인덱싱 후 Like절으로 검색",
      ],
    },
    {
      tags: [tags[3]],
      title: "Github actions의 CI/CD 설계와 Docker를 통한 도커라이징",
      list: [
        "도커 컨테이너 간 네트워크 연결 및 yarn,alpine,dockerignore 등을 사용 빌드 용량 최적화",
        "React, Nest+Prisma, Mysql, Redis, Nginx, Certbot(SSL) Dockerizing 경험",
        "Github actions의 Linux AWS runner 및 pull-request 자동 CI 설정",
      ],
    },
    {
      tags: [tags[1], tags[3]],
      title: "AWS EC2와 그 외 마이크로 서비스를 활용한 배포",
      list: [
        "메모리 스왑으로 RAM 최대 용량 개선",
        "Nginx의 리버스 프록시, 포트 포워딩 적용",
        "AWS Route53를 이용한 포트포워딩 및 도메인 등록, Elastic ip, S3, Lambda, cloud watch",
      ],
    },
    {
      tags: [tags[3]],
      title: "AWS S3 비용 절감을 위해 다른 스토리지 탐색 및 적용",
      list: [
        "[원인] : AWS S3에 이미지 리사이징, 프리티어 Request 한도까지 고려하면 생각보다 많은 요금이 부과될 걱정",
        "[해결] : wasabi는 request 요청 무제한의 lambda 연결 가능한데 1TB에 약 6천원 이라는 합리적인 가격으로 제공된다. 규모가 커지면 도입 예정",
      ],
    },
    {
      tags: [tags[0], tags[3]],
      title: "AWS 비용 분석 및 성능 검토",
      list: [
        "[원인] : Lambda에 재귀함수가 들어가 많은 request 발생",
        "[해결] : AWS Cloud watch로 찾아내 개선, 예상 손실 약 <span class='mark'>100달러</span>를 무마했다.",
      ],
    },
  ],
}

export const histories = [
  {
    date: "2013년 11월 ~ 2015년 8월",
    title: "육군병장 만기제대",
  },
  {
    date: "2017년 4월 - 2018년 4월",
    title: "일본 거주 경험",
    subTitle: "도쿄 에비스 소재 여행회사 (株)アドベンチャー 입사 후 근무",
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
    date: "2023년 4월 ~ 2024년 10월",
    title: "세계여행",
    subTitle: "태국 오토바이 전국 여행, 일본 자전거 여행 포함 30개국 이상을 돌며 나 자신을 알게된 세계여행",
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
