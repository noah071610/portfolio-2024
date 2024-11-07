import ContentSection from "@/entities/content-section"
import { colors, colors_strong, colors_text } from "@/shared/data/portfolio"
import cs from "classnames/bind"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useState } from "react"
import style from "./style.module.scss"
gsap.registerPlugin(ScrollTrigger)
const cx = cs.bind(style)

const reviews = [
  {
    color: colors[0],
    name: "Ilba Back",
    angle: "rotate-[-8deg]",
    pin: "left-1/2",
    image: "me.png",
    position: "From CTO. 백일다",
    title: "모든 칭찬 할 수 있는 용어를 다 쓰고 싶습니다",
    desc: `<span class='font-semibold'>현수님은 굉장히 열정적인 자기 학습 능력을 가지셨습니다.</span><div class='py-1.5'></div>다른 분들은 대부분 새로운 기술에 대해 피로감을 느끼시는데
현수님은 새로 나오는 기술에 대해 호기심이 많고 스스로 찾아보며 재미있게 일하는 스타일이셔서
<span class='mark'>개발을 좋아해야 개발을 잘할 수 있다는 것</span>을 팀 내에서 몸소 보여주신 멋진 팀원이었습니다.<div class='py-1.5'></div>
또한 개발자임에도 불구하고, <span class='font-semibold'>디자인과 애니메이션</span>에 대한 열정과 능력이 뛰어나 저희 같은 작은 스타트업 팀 내에서 특히 도움이 많이 되었습니다.
<div class='py-2'></div>
꽤나 많은 시간이 흘렀는데도 이따금 팀 내에서 현수님 칭찬을 하고 요즘에도 정말 그리워하고 있답니다.
<span class='mark'>지금까지 본 개발자 중 제일 잘하신 분은 현수님이었습니다.</span> 이직 힘내세요!`,
    ps: [
      "도다마인드 CTO 백일다님의 동의를 구하고 사실만을 작성했다는 것을 알려드립니다.",
      "도다마인드 관련 포트폴리오 성과 등 진위 여부는 직접 CTO에게 사실 확인을 받은 후 작성했다는 것을 알려드립니다.",
      "백일다 이메일: noah071610@gmail.com",
    ],
  },
  {
    color: colors[1],
    name: "Damin Kim",
    angle: "rotate-[12deg]",
    pin: "right-0",
    image: "me.png",
    position: "Graphic Designer. 김다민",
    title: "디자이너로서 가장 편했던 유일한 개발자",
    desc: `<span class='font-semibold'>저는 디자이너이기 때문에 철저히 디자이너로서의 관점으로</span><div class='py-1.5'></div> 
    현수님은 지금까지 만나본 개발자 중 간단한 요청 사항도 디자인적인 요소를 고려해 알아서 구현해주고 때론 피드백도 주는
유일한 개발자였기 때문에 <span class='mark'>다른 개발자와 협업 할 때 보다 상대적으로 가장 편하고 좋았습니다!</span><div class='py-1.5'></div> 
`,
    ps: ["도다마인드 전 디자이너님의 동의를 구하고 사실만을 작성했다는 것을 알려드립니다."],
  },
]

export default function PortfolioContact() {
  const currentYear = new Date().getFullYear()

  const [isActive, setIsActive] = useState({ android: false, github: false })

  const handleMouseEnter = (type: "android" | "github") => {
    setIsActive((obj) => ({ ...obj, [type]: true }))
  }

  const handleMouseLeave = (type: "android" | "github") => {
    setIsActive((obj) => ({ ...obj, [type]: false }))
  }

  return (
    <ContentSection
      title="시간 내주셔서 고마워요"
      subTitle="Thanks for reading"
      number={5}
      noPaddingSide={true}
      content={"여기까지 봐주신 것 만으로도 성공이에요!<br/>오늘 하루는 어제보다 더 행복하세요!"}
    >
      <div className={cx("w-full")}>
        <div
          style={{
            background: `url('./images/wave-1.svg') no-repeat center / cover`,
          }}
          className={cx("w-full h-[150px]")}
        ></div>
        {reviews.map((review, index) => (
          <div
            key={`review-${review.name}`}
            className={cx(
              "relative w-full grid md:grid-cols-[1.5fr_3fr] py-10 sm:px-16 px-10 gap-6 bg-g-ivory",
              index === 0 ? "!pt-16" : ""
            )}
          >
            <div className={cx("w-full flex justify-center md:mb-0 mb-8")}>
              <div
                className={cx("relative w-[200px] h-fit bg-white border border-[rgba(0,0,0,0.1)] p-2", review.angle)}
              >
                <img
                  className={cx("absolute -top-[27px] w-10 h-10", review.pin)}
                  src="/images/icons/pin.png"
                  alt="pin"
                />
                <div className={cx("absolute-full", style.texture)}></div>
                <picture>
                  <img
                    className={cx("w-full h-[200px] object-cover bg-slate-400")}
                    src="https://plus.unsplash.com/premium_photo-1682093244743-29d7a6aee65d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="reviewer_pic"
                  />
                </picture>
                <h4 className={cx("text-center my-3 text-lg edu-vic")}>{review.name}</h4>
              </div>
            </div>

            <div className={cx("w-full bg-red")}>
              <h3 className={cx("text-2xl mb-3 text-left font-semibold")}>{review.title}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: review.desc }}
                className={cx("text-pretty text-[14px] leading-6 mb-3 text-left")}
              ></p>
              <div className={cx("flex justify-start")}>
                <span
                  className={cx(
                    "inline-block edu-vic py-3 px-4 pr-5 text-sm rounded-br-lg",
                    colors_strong[index],
                    colors_text[index]
                  )}
                >
                  {review.position}
                </span>
              </div>
              <ul className={cx("text-xs mt-6")}>
                {review.ps.map((str, i) => (
                  <li className={cx("leading-5 before:content-['•'] before:mr-2")} key={`ps-${review.name}-${i}`}>
                    {str}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className={cx("w-full flex-center-col", style.end)}>
          <div
            style={{
              background: `url('./images/wave-2.svg') no-repeat center / cover`,
            }}
            className={cx("w-full h-[150px]")}
          ></div>
          <div className={cx("flex-center gap-8 md:flex-row flex-col", style["btn-wrapper"])}>
            <div className={cx("relative")}>
              <motion.div
                className={cx("absolute -top-6 left-1/2 -translate-x-1/2", style.lover, {
                  [style.active]: isActive.android,
                })}
              >
                <img className={cx("w-20")} src="./images/android.png" alt="android" />
              </motion.div>
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  borderWidth: "12px",
                  borderRadius: "60px",
                  background: "#d8b4fe",
                  color: "#ffffff",
                }}
                onMouseEnter={() => handleMouseEnter("android")}
                onMouseLeave={() => handleMouseLeave("android")}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 25,
                }}
                className={cx(
                  "relative z-10 inline-block bg-purple-200 rounded-[40px] border-4 overflow-hidden border-purple-50 text-purple-900 font-bold mb-7"
                )}
                href="mailto:noah071610@gmail.com"
              >
                <div className={cx("w-full h-full py-6 px-14 ", style["btn-bg"])}>
                  <span className={cx("text-lg leading-3")}>이메일 보내기</span>
                </div>
              </motion.a>
            </div>
            <div className={cx("relative")}>
              <motion.div
                className={cx("absolute -top-6 left-1/2 -translate-x-1/2", style.lover, {
                  [style.active]: isActive.github,
                })}
              >
                <img className={cx("w-20")} src="./images/github.png" alt="github" />
              </motion.div>
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  borderWidth: "12px",
                  borderRadius: "60px",
                  background: "#86efac",
                  color: "#ffffff",
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 25,
                }}
                onMouseEnter={() => handleMouseEnter("github")}
                onMouseLeave={() => handleMouseLeave("github")}
                className={cx(
                  "relative z-10 inline-block bg-green-200 rounded-[40px] border-4 overflow-hidden border-green-50 text-green-900 font-bold mb-7"
                )}
                href="https://github.com/noah071610"
                target="_blank"
                rel="noreferrer"
              >
                <div className={cx("w-full h-full py-6 px-14 ", style["btn-bg"])}>
                  <span className={cx("text-lg leading-3 ")}>깃허브 둘러보기</span>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
        <footer className={cx("flex-center py-1")}>
          <p className={cx("text-neutral-400 leading-6 edu-vic")}>
            &copy; {currentYear} Jang hyunsoo (Noah Jang). All rights reserved.
          </p>
        </footer>
      </div>
    </ContentSection>
  )
}
