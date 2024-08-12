import cs from "classnames/bind"
import { motion } from "framer-motion"
import style from "./style.module.scss"

const cx = cs.bind(style)

const popup_icons = [
  {
    stack: "javascript",
    xy: ["-120px", "40px"],
  },
  {
    stack: "nodejs",
    xy: ["-90px", "-45px"],
  },
  {
    stack: "aws",
    xy: ["-30px", "-110px"],
  },
]

export default function PortfolioBanner() {
  return (
    <section
      className={cx(
        "w-full md:h-[420px] h-auto overflow-hidden relative md:grid md:grid-cols-2 block bg-g-ivory rounded-tl-2xl rounded-tr-2xl"
      )}
    >
      <div className={cx("absolute top-0 left-0 w-full h-[300px] opacity-50", style.gradient)}></div>
      <div
        className={cx(
          "relative z-10 w-full md:pl-14 md:px-0 pt-14 px-7 rounded-lg md:mb-6 mb-4 flex flex-col justify-center"
        )}
      >
        {/* <div className={cx("absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#dedeff]")}></div> */}
        <h1 className={cx("text-4xl mb-6", style.header)}>
          <span>Hello Noah's Portfolio</span>
        </h1>
        <p className={cx("sm:text-md text-sm leading-7 font-medium")}>
          바쁘신 와중에 저의 포트폴리오 페이지를 방문해주셔서 고마워요!
          <br />
          저는 스타트업 초기멤버로 1년 6개월 풀스택 근무 경험 후,
          <br />
          풀스택 1인 개발으로 MAU 100명 그리고 회원수 30명의
          <br /> 인터랙티브 폼을 운영해본 경험이 있는 장현수입니다.
        </p>
      </div>
      <div className={cx("relative w-full h-full flex justify-end items-end", style.icon)}>
        <div className={cx("relative", style.bg)}>
          {popup_icons.map(({ stack, xy }, i) => (
            <motion.div
              initial={{ scale: 0, translateX: 0, translateY: 0 }}
              animate={{ scale: [0, 0, 1], translateX: xy[0], translateY: xy[1] }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 15,
                delay: 1 * (i * 0.2),
              }}
              key={`${stack}_banner`}
              className={cx("absolute top-[35%] left-1/3")}
            >
              <div className={cx(``, style.shadow)}></div>
              <img src={`../images/icons/${stack}.png`} alt={stack} className={cx("w-14 h-14")}></img>
            </motion.div>
          ))}
          <picture>
            <img
              className={cx("relative z-30 object-cover md:w-[420px] md:h-[420px] w-[350px] h-[350px]")}
              src="./images/me.png"
              alt="me"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
