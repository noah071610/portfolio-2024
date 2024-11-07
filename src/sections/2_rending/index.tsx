import useCloudMatter from "@/shared/hooks/useCloudMatter"
import cs from "classnames/bind"
import { motion, useAnimation } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { useEventListener, useMediaQuery } from "usehooks-ts"
import style from "./style.module.scss"
gsap.registerPlugin(ScrollTrigger)

const cx = cs.bind(style)

const sunAnimationVariants = {
  hidden: { translateY: 440, opacity: 0 },
  visible: { scale: 1, translateY: 0, opacity: 1 },
  show: { scale: 0.9 },
}

const backgroundAnimationVariants = {
  hidden: { translateY: 250, scale: 0.85, opacity: 0 },
  visible: { translateY: 0, scale: 1, opacity: 1 },
}

const sunAnimationTransition = (stage: string, delay?: number) => ({
  type: "spring",
  stiffness: 200,
  damping: 22,
  delay: stage === "show" || stage === "visible" ? 0 : (delay ?? 0) + 0.6,
})

export default function RendingPage({ readyToAnimate }: { readyToAnimate: boolean }) {
  const isDesktop = useMediaQuery("(min-width: 465px)")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const backgrounds = Array.from({ length: 4 })

  const [stage, setStage] = useState("rended")
  const controls = useAnimation()

  const backgroundAnimationTransition = (delay?: number, noSpring?: boolean) => ({
    type: noSpring ? "Decay" : "spring",
    stiffness: 140,
    damping: 13,
    delay: stage === "show" ? 0 : delay,
  })

  const onClickScrollDown = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    })
  }

  useCloudMatter(canvasRef, readyToAnimate)

  useEffect(() => {
    if (readyToAnimate) {
      controls.start("visible")
    }
  }, [readyToAnimate])

  const handleScroll = () => {
    // Check if the element is within the viewport
    if (window.scrollY > 30) {
      setStage("show")
    } else {
      setStage("visible")
    }
  }
  useEventListener("scroll", handleScroll)

  useEffect(() => {
    if (stage === "rended") return
    controls.start(stage === "show" ? "show" : "visible")
  }, [stage])

  return (
    <section className={cx("fixed top-0 left-0 w-screen h-screen overflow-hidden", style.screen)}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={sunAnimationVariants}
        transition={sunAnimationTransition(stage)}
        className={cx("absolute top-[50px] right-[50px] w-[500px] h-[500px] bg-orange-100 rounded-full flex-center")}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sunAnimationVariants}
          transition={sunAnimationTransition(stage, 0.1)}
          className={cx("w-[350px] h-[350px] bg-orange-200 rounded-full flex-center")}
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={sunAnimationVariants}
            transition={sunAnimationTransition(stage, 0.25)}
            className={cx("w-[200px] h-[200px] bg-orange-400 rounded-full")}
          ></motion.div>
        </motion.div>
      </motion.div>
      <div className={cx("w-screen h-screen relative overflow-hidden z-60")} ref={containerRef}>
        <canvas className="relative z-10" ref={canvasRef} />
      </div>
      {backgrounds.map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          initial="hidden"
          animate={controls}
          variants={{
            ...backgroundAnimationVariants,
            ...(i === 0 ? { show: { translateY: 100, scale: 1.2, opacity: 1 } } : {}),
          }}
          transition={backgroundAnimationTransition(i === 0 ? 0 : backgrounds.length * 0.1 - i * 0.15, i === 3)}
          style={{
            background: `url('./images/bg-${i + 1}.png') no-repeat center / cover`,
          }}
          className={cx(`absolute-screen z-20`)}
        ></motion.div>
      ))}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { translateY: 250, opacity: 0 },
          visible: { translateY: 0, scale: 1, opacity: 1 },
          show: { scale: 0.7, opacity: 1 },
        }}
        transition={backgroundAnimationTransition(0, true)}
        className="absolute origin-bottom-left top-[0px] left-[0px] w-screen h-screen z-20 flex items-end"
      >
        <img
          src="./images/people.png"
          className={cx("md:w-[600px] md:h-[670px] w-[350px] h-[410px]", style.people)}
        ></img>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, translateX: isDesktop ? 0 : "-50%" },
          visible: { translateY: 0, scale: 1, opacity: 1, translateX: isDesktop ? 0 : "-50%" },
          show: { translateY: 170, opacity: 0, translateX: isDesktop ? 0 : "-50%" },
        }}
        transition={{
          type: "Decay",
          stiffness: 200,
          damping: 22,
        }}
        className={cx("absolute top-14 xs:left-auto xs:right-[6%] left-1/2 z-[100]")}
      >
        <img className={cx("w-[330px] h-[330px] max-w-fit")} src="./images/title.png" />
        <div className={cx("w-full flex-center absolute -bottom-4")}>
          <button onClick={onClickScrollDown} className={cx(style["scroll-btn"])}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
