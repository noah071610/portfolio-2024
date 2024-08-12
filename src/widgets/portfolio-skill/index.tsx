import ContentSection from "@/entities/content-section"
import cs from "classnames/bind"
import { motion, useAnimation } from "framer-motion"
import style from "./style.module.scss"

// Import Swiper styles
import { useEffect } from "react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useIntersectionObserver } from "usehooks-ts"

const cx = cs.bind(style)

const skills = {
  frontend: ["figma", "javascript", "typescript", "react", "nextjs", "sass", "tailwind-css", "react-query", "zustand"],
  backend: ["nodejs", "nestjs", "mysql", "jest"],
  infra: ["github", "docker", "nginx", "aws"],
}

const conveyor = {
  top: ["nodejs", "nestjs", "mysql", "jest", "sass", "react-query", "zustand", "nodejs", "nestjs", "mysql", "jest"],
  middle: ["figma", "javascript", "typescript", "react", "nextjs", "figma", "javascript", "typescript"],
  bottom: ["github", "docker", "nginx", "aws", "tailwind-css", "github", "docker", "nginx"],
}

const skill_arr = Object.entries(skills)
const conveyor_arr = Object.entries(conveyor)

export default function PortfolioSkill() {
  const { isIntersecting, ref: skillRef } = useIntersectionObserver({
    threshold: 0.5,
  })
  const controls = useAnimation()
  useEffect(() => {
    if (isIntersecting) {
      controls.start("start")
    }
  }, [isIntersecting])

  return (
    <ContentSection
      title="기술스택"
      subTitle="Skill set"
      content={
        '"해봤다", "흥미있다" 는 전부 제외하고 점수를 매기지도 않았어요. <br /> 당장 실무에서 써도 제 최대 실력을 발휘할 기술만 작성했습니다.'
      }
      number={1}
    >
      <div className={cx("w-full md:grid md:grid-cols-2 gap-4")}>
        <div className={cx("xs:p-4 p-0 flex-center")}>
          <div
            className={cx(
              "xs:w-[430px] xs:h-[430px] w-full h-[400px]  bg-g-ivory rounded-lg border border-gray-100 relative overflow-hidden"
            )}
          >
            <div className={style.conveyor}>
              {conveyor_arr.map(([title, arr], i) => (
                <Swiper
                  key={`conveyor_${title}`}
                  slidesPerView={"auto"}
                  spaceBetween={5}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    reverseDirection: true,
                    disableOnInteraction: false,
                  }}
                  speed={i === 1 ? 1400 : i === 0 ? 2000 : 2700}
                  modules={[Autoplay]}
                  allowTouchMove={false}
                  preventClicks={true}
                  preventClicksPropagation={true}
                  className={cx(style.swiper)}
                >
                  {arr.map((skill, j) => (
                    <SwiperSlide key={`conveyor_${skill}_${j}`}>
                      <div className={cx("w-full h-full p-4")}>
                        <div
                          className={cx(
                            "w-full h-full bg-white rounded-xl shadow-md flex-center",
                            i === 1 ? style.card : ""
                          )}
                        >
                          <img
                            src={`./images/icons/${skill}.png`}
                            alt={skill}
                            className={cx("w-20 h-20 -rotate-90")}
                          ></img>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
            </div>
          </div>
        </div>
        <div ref={skillRef} className={cx("p-4")}>
          {skill_arr.map(([title, values], i) => (
            <div key={title}>
              <h3 className={cx("text-xl mb-2 md:text-left text-center")}>{title.toUpperCase()}</h3>
              <div className={cx("flex flex-wrap md:justify-start justify-center gap-3 mb-4")}>
                {values.map((v, j) => (
                  <motion.div
                    initial="stop"
                    animate={controls}
                    variants={{
                      stop: { opacity: 0, translateY: "40px", scale: 0 },
                      start: { opacity: 1, translateY: "0", scale: 1 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 15,
                      delay: i * 0.4 + j * 0.08,
                    }}
                    key={`${title}_${j}`}
                  >
                    <img src={`./images/icons/${v}.png`} alt={v} className={cx("xs:w-14 xs:h-14 w-12 h-12")}></img>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentSection>
  )
}
