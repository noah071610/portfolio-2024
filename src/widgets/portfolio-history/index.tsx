import ContentSection from "@/entities/content-section"
import { colors, colors_strong, histories } from "@/shared/data/portfolio"
import cs from "classnames"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
const cx = cs

interface HistoryProps {
  date: string
  title: string
  subTitle?: string
  i: number
}

const History = ({ date, title, subTitle, i }: HistoryProps) => {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const isRight = i % 2 === 0
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const inView = useInView(ref, {
    margin: "-120px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className={cx("w-full flex sm:mb-0 mb-10", { ["sm:justify-end"]: isRight })}>
      <div className={cx(`relative sm:w-1/2 w-full my-2 ${isRight ? "sm:pl-10 sm:pr-6" : "sm:pr-10 sm:pl-6"} p-0`)}>
        <div
          className={cx(
            `absolute top-1/2 ${isRight ? "left-0" : "right-0"} -translate-y-1/2 w-10 h-[1px] ${
              colors_strong[i % 9]
            } z-10 sm:block hidden`
          )}
        ></div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { scale: isDesktop ? 1 : 1.3, translateY: "-50%", translateX: isDesktop ? 0 : "-50%" },
            hidden: { scale: 0, translateY: "-50%", translateX: isDesktop ? 0 : "-50%" },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 8,
          }}
          className={cx(
            `absolute sm:top-1/2 ${
              isRight ? "sm:-left-2" : "sm:-right-2 sm:left-auto"
            } -top-4 left-1/2 right-auto w-4 h-4 ${colors_strong[i % 9]} z-20 rounded-full flex-center p-1`
          )}
        >
          <div className={cx("w-full h-full bg-white rounded-full")}></div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { rotateY: 0 },
            hidden: { rotateY: 90 },
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className={cx("rotate-90 flex flex-col bg-g-ivory rounded-xl overflow-hidden shadow-lg", {
            ["items-end"]: !isRight,
          })}
        >
          <div className={cx(`w-full ${colors[i % 9]} p-4`)}>
            <h3 className={cx(`text-md`)}>{title}</h3>
          </div>
          <div className={cx("w-full p-4")}>
            {subTitle && <p className={cx("text-sm mb-2")} dangerouslySetInnerHTML={{ __html: subTitle }}></p>}
            <span className={cx("text-[12px] text-gray-600")}>{date}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function PortfolioHistory() {
  return (
    <ContentSection
      title="경력 & 자격증"
      subTitle="History"
      number={3}
      content={"지금까지의 경력과 자격증, 활동 등을 소개할게요!"}
    >
      <div className={cx("w-full relative sm:pt-0 pt-4")}>
        <div className={cx("w-[1px] bg-g-blue h-full absolute top-0 left-1/2 -translate-x-1/2")}></div>
        {histories.map(({ date, title, subTitle }, i) => (
          <History date={date} title={title} subTitle={subTitle} i={i} key={`history_${i}`} />
        ))}
      </div>
    </ContentSection>
  )
}
