import ContentSection from "@/entities/content-section"
import { articles, portfolio_data, PortfolioData } from "@/shared/data/portfolio"
import cs from "classnames/bind"
import { motion } from "framer-motion"
import _ from "lodash"
import { useCallback, useRef, useState, useTransition } from "react"
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

const cx = cs.bind(style)

const textDecorator = (text: string, keyword: string) => {
  if (!keyword) return text

  const parts = text.split(new RegExp(`(${keyword})`, "gi"))

  return parts
    .map((part) =>
      part.toLowerCase() === keyword.toLowerCase() ? `<span class="text-blue-600 font-bold">${part}</span>` : part
    )
    .join("")
}

export default function PortfolioContent() {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const [inputValue, setInputValue] = useState("")
  const [filteredPortfolio, setFilteredPortfolio] = useState<PortfolioData[]>(portfolio_data)
  const [, startTransition] = useTransition()
  const searchRef = useRef<HTMLDivElement | null>(null)

  const debouncedHandleInputChange = useCallback(
    _.debounce((value: string) => {
      value = value.toLowerCase().trim()
      const target = portfolio_data.filter(({ tags, title, list }) => {
        return (
          title.toLowerCase().includes(value) ||
          list?.join(" ").toLowerCase().includes(value) ||
          tags
            .map(({ text }) => text)
            .join(" ")
            .includes(value)
        )
      })
      startTransition(() => {
        searchRef?.current?.scrollIntoView()
        setFilteredPortfolio(target)
      })
    }, 300), // 300ms delay
    []
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    debouncedHandleInputChange(event.target.value)
  }

  return (
    <ContentSection
      title="포트폴리오"
      subTitle="Portfolio"
      number={2}
      content={
        "전 근무지에서의 작업물과 1인 개발 인터랙티브 홈페이지 제작 에디터의<br/> 소개와 성과, 사용스킬, 성능지표 등을 알려드릴게요!"
      }
    >
      <div className={cx("w-full flex-col-center gap-7")}>
        {articles.map(({ title, skills, value, desc }, i) => (
          <article className={cx("sm:w-[700px] sm:grid sm:grid-cols-[300px_1fr] w-full flex-col gap-7")} key={title}>
            <Tilt className={cx("cursor-pointer sm:max-h-[175px] max-h-[350px]")} options={defaultOptions(isDesktop)}>
              <div
                className={cx(
                  "overflow-hidden bg-g-blue p-2 h-auto sm:max-h-[175px] max-h-[350px] rounded-tl-[30px] rounded-tr-md rounded-br-[30px] rounded-bl-md"
                )}
              >
                {value === "receptori" ? (
                  <div
                    className={cx(
                      "aspect-video w-full h-full sm:max-h-[175px] max-h-[350px] rounded-tl-3xl rounded-br-3xl flex-center",
                      style.thumbnail
                    )}
                  >
                    <picture>
                      <img
                        className={cx("w-20 h-20", style.thumbnail)}
                        src={`./images/logo.png`}
                        alt={`${value}-thumbnail`}
                      />
                    </picture>
                  </div>
                ) : (
                  <picture>
                    <img
                      className={cx(
                        "aspect-video object-cover w-full h-full sm:max-h-[175px] max-h-[350px] rounded-tl-3xl rounded-br-3xl"
                      )}
                      src={`./images/${value}-thumbnail.png`}
                      alt={`${value}-thumbnail`}
                    />
                  </picture>
                )}
              </div>
            </Tilt>
            <div className={cx("px-1 sm:mt-0 mt-4")}>
              <h2 className={cx("text-2xl mb-2")}>{title}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: desc }}
                className={cx(`text-[14px] leading-5 font-light ${i === 2 ? "mb-1" : "mb-4"} break-keep`)}
              ></p>
              {i === 2 && (
                <span className={cx("block text-xs text-pretty pr-2 mb-4 text-gray-700")}>
                  {"* "} 리셉토리는 현재 유저 수 30명에 운영 중인 사이트입니다. 아무리 적은 수에 유저라도 보안은
                  중요하기 때문에 이 페이지에 코드는 공개 할 수 없습니다.
                </span>
              )}
              <div className={cx("flex flex-wrap gap-1 opacity-90 mb-3")}>
                {skills.map((v, j) => (
                  <span key={`${i}_skill_${j}`}>
                    <img src={`https://img.shields.io/badge/${v}&style=flat-square`} />
                  </span>
                ))}
              </div>
              <div className={cx("flex flex-wrap gap-2")}>
                <motion.a
                  initial={{ scale: 1 }}
                  whileHover={{
                    background: "rgb(168 85 247)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 25,
                  }}
                  className={cx("inline-block bg-purple-400 rounded-[5px] overflow-hidden  text-white font-bold")}
                  href=""
                >
                  <div className={cx("w-full h-full py-1 px-5 ", style["btn-bg"])}>
                    <span className={cx("text-sm leading-7")}>웹사이트 방문</span>
                  </div>
                </motion.a>
                {i === 2 && (
                  <motion.a
                    initial={{ scale: 1 }}
                    whileHover={{
                      background: "rgb(59 130 246)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 25,
                    }}
                    className={cx("inline-block bg-blue-400 rounded-[5px] overflow-hidden  text-white font-bold")}
                    href=""
                  >
                    <div className={cx("w-full h-full py-1 px-5 ", style["btn-bg"])}>
                      <span className={cx("text-sm leading-7")}>프로덕트 설명</span>
                    </div>
                  </motion.a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div ref={searchRef} className={cx("w-full flex justify-center pt-16")}>
        <div className={cx("max-w-[700px] w-full flex-center flex-col")}>
          <h1 className={cx("text-xl sm:text-left text-center")}>
            어떤 기술을 썼고 어떤 성과를 이루어냈는지 확인하세요!
          </h1>
          <div className={cx("sticky w-full pt-3 top-0 bg-[rgba(248,248,252,1)]")}>
            <div className={cx("max-w-[700px] w-full mb-3")}>
              <input
                className={cx(
                  "w-full text-lg py-[14px] px-6 rounded-[40px] bg-white leading-6 text-[#181c31dd]",
                  style.input
                )}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="검색어 입력"
              />
            </div>
          </div>
          <div className={cx("w-full flex flex-col gap-1 pt-2")}>
            {filteredPortfolio.length > 0 ? (
              filteredPortfolio.map(({ tags, title, key, list }) => (
                <div key={`${key}`} className={cx("w-full py-2 px-4")}>
                  <div className={cx("flex flex-wrap gap-1 mb-[5px]")}>
                    {tags.map(({ text, color }, j) => (
                      <div key={`${key}-tag-${j}`} className={cx(`px-[6px] ${color}`)}>
                        <span className={cx("text-[10px] leading-5")}>{text}</span>
                      </div>
                    ))}
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: textDecorator(title, inputValue) }}
                    className={cx("text-[15px] leading-6 font-semibold", { ["mb-2"]: !!list })}
                  ></p>
                  {list && (
                    <ul className={cx("flex flex-col gap-1")}>
                      {list.map((v, i) => (
                        <li className={cx("text-[13px] flex leading-6")} key={`tag_${key}_${i}`}>
                          <span className={cx("pl-2 font-bold mr-1")}>{"-"}</span>
                          <p dangerouslySetInnerHTML={{ __html: textDecorator(v, inputValue) }}></p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <div className={cx("w-full h-[250px] flex-center")}>
                <span className={cx("md:text-lg text-sm text-blue-900")}>검색 결과가 없어요 ¯\_(ツ)_/¯</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
