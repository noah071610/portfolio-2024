import ContentSection from "@/entities/content-section"
import { articles, portfolio_comp, portfolio_info } from "@/shared/data/portfolio"
import cs from "classnames/bind"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { useMediaQuery } from "usehooks-ts"
import style from "./style.module.scss"

const defaultOptions = (isDesktop?: boolean) => ({
  reverse: false, // reverse the tilt direction
  max: isDesktop ? 35 : 0, // max tilt rotation (degrees)
  perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: isDesktop ? 1.05 : 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
})

// 단점: 굳이 말해된다면은 주석을 잘 써줬으면 좋겠다. + 코드에 이상하다고 느낀 것은 없었는데, 변수 이름 짓기

// ㅇㅇ : nodejs는 아직... 백엔드 쪽 생각하면 jang-go. (만족도가 높다. AI)

const cx = cs.bind(style)

export default function PortfolioContent() {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  const onClickLink = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <ContentSection
      title="포트폴리오"
      subTitle="Portfolio"
      number={2}
      content={"전 근무지에서의 작업물과 개인 프로젝트의<br/> 소개와 성과, 사용스킬 등을 알려드릴게요"}
    >
      <div className={cx("w-full flex-col-center gap-7")}>
        {articles.map(({ title, skills, value, desc, link, color, tag }, i) => (
          <article className={cx("sm:w-[700px] w-full flex-col pb-6")} key={title}>
            <div className={cx("w-full sm:grid sm:grid-cols-[300px_1fr] gap-7")}>
              <Tilt className={cx("cursor-pointer sm:max-h-[175px] max-h-[350px]")} options={defaultOptions(isDesktop)}>
                <div
                  className={cx(
                    "overflow-hidden  p-2 h-auto sm:max-h-[175px] max-h-[350px] rounded-tl-[30px] rounded-tr-md rounded-br-[30px] rounded-bl-md",
                    color
                  )}
                  onClick={() => !!link && onClickLink(link)}
                >
                  <picture>
                    <img
                      className={cx(
                        "aspect-video object-cover w-full h-full sm:max-h-[175px] max-h-[350px] rounded-tl-3xl rounded-br-3xl"
                      )}
                      src={`./images/${value}-thumbnail.png`}
                      alt={`${value}-thumbnail`}
                    />
                  </picture>
                </div>
              </Tilt>
              <div className={cx("px-1 sm:mt-0 mt-4")}>
                <h2 className={cx("text-2xl mb-2 flex items-center gap-3 font-semibold")}>
                  {title}
                  <span
                    className={cx("inline-block mb-1 px-4 py-1.5 rounded-sm text-xs text-[#1a160b] font-medium", color)}
                  >
                    {tag}
                  </span>
                </h2>
                <p
                  dangerouslySetInnerHTML={{ __html: desc }}
                  className={cx(
                    `text-[14px] leading-5 font-light ${value.includes("ranking") ? "mb-1" : "mb-4"} break-keep`
                  )}
                ></p>
                {value.includes("ranking") && (
                  <span className={cx("block text-xs text-pretty pr-2 mb-4 text-gray-700")}>
                    {"* "} 랭킹투게더는 실제 운영 중인 사이트입니다. 개인정보처리방침과 이용약관을 준수하고 있으며
                    그러기에 보안상 코드는 공개 할 수 없습니다.
                  </span>
                )}
                <div className={cx("flex flex-wrap gap-1 opacity-90 mb-3")}>
                  {skills.map((v, j) => (
                    <span key={`${i}_skill_${j}`}>
                      <img src={`https://img.shields.io/badge/${v}&style=flat-square`} />
                    </span>
                  ))}
                </div>
                {!!link && (
                  <div className={cx("flex flex-wrap gap-2")}>
                    <motion.a
                      initial={{ scale: 1 }}
                      whileHover={{
                        background: "#a855f7",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 25,
                      }}
                      className={cx("inline-block bg-purple-400 rounded-[5px] overflow-hidden  text-white font-bold")}
                      href={link}
                      target="_blank"
                    >
                      <div className={cx("w-full h-full py-1 px-5 ", style["btn-bg"])}>
                        <span className={cx("text-sm leading-7")}>
                          {value === "wordbook" ? "앱스토어 바로가기" : "웹사이트 방문"}
                        </span>
                      </div>
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
            <div className={cx("w-full flex flex-col gap-1 py-5 mt-9 border-t-2 border-gray-200")}>
              {portfolio_comp[value as any]}
              {portfolio_info[value as any].map(({ tags, title, list }, i) => (
                <div key={`portfolio_${i}`} className={cx("w-full py-2 px-4")}>
                  <div className={cx("flex flex-wrap gap-1 mb-[6px]")}>
                    {tags.map(({ text, color, key }, j) => (
                      <div key={`${key}-tag-${j}`} className={cx(`px-[6px] ${color}`)}>
                        <span className={cx("text-[10px] leading-5")}>{text}</span>
                      </div>
                    ))}
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={cx("text-[17px] leading-6 font-bold", { ["mb-2"]: !!list })}
                  ></p>
                  {list && (
                    <ul className={cx("flex flex-col gap-1")}>
                      {list.map((v, i) => (
                        <li className={cx("text-[14px] flex leading-6")} key={`list_${i}`}>
                          <span className={cx("pl-2 font-bold mr-1")}>{"-"}</span>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: v.replace(/\[([^\]]+)\]/g, '<span class="font-bold">[$1]</span>'),
                            }}
                          ></p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </ContentSection>
  )
}
