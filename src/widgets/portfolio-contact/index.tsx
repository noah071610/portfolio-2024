import ContentSection from "@/entities/content-section"
import { colors, colors_strong, colors_text } from "@/shared/data/portfolio"
import cs from "classnames/bind"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import style from "./style.module.scss"
gsap.registerPlugin(ScrollTrigger)
const cx = cs.bind(style)

const reviews = [
  {
    color: colors[0],
    name: "Kwak Doyoung",
    angle: "rotate-[-8deg]",
    pin: "left-1/2",
    image: "me.png",
    position: "CEO (Chief Executive Officer)",
    title: "현수님은 정말 성실하시고 자기 일에 힘 쓰세요",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non a fuga nam animi maxime. Maxime voluptatem similique voluptatum aliquam illum sequi accusantium repellendus culpa repellat pariatur. Quo, sit. Inventore, cum?",
  },
  {
    color: colors[1],
    name: "Raun Hong",
    angle: "rotate-[12deg]",
    pin: "right-0",
    image: "me.png",
    position: "COO (Chief Operating Officer)",
    title: "현수님은 정말 성실하시고 자기 일에 힘 쓰세요",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non a fuga nam animi maxime. Maxime voluptatem similique voluptatum aliquam illum sequi accusantium repellendus culpa repellat pariatur. Quo, sit. Inventore, cum?",
  },
  {
    color: colors[2],
    angle: "rotate-[0deg]",
    name: "Ilda back",
    pin: "left-2",
    image: "me.png",
    position: "CTO (Chief Technology Officer)",
    title: "현수님은 정말 성실하시고 자기 일에 힘 쓰세요",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non a fuga nam animi maxime. Maxime voluptatem similique voluptatum aliquam illum sequi accusantium repellendus culpa repellat pariatur. Quo, sit. Inventore, cum?",
  },
  {
    color: colors[3],
    angle: "rotate-[-10deg]",
    name: "김성호",
    pin: "left-1/2",
    image: "me.png",
    position: "Web designer",
    title: "현수님은 정말 성실하시고 자기 일에 힘 쓰세요",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non a fuga nam animi maxime. Maxime voluptatem similique voluptatum aliquam illum sequi accusantium repellendus culpa repellat pariatur. Quo, sit. Inventore, cum?",
  },
]

export default function PortfolioContact() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const currentYear = new Date().getFullYear()
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const picturesRef = useRef<HTMLDivElement | null>(null)
  const descRefs = Array.from({ length: reviews.length }, () => useRef<HTMLDivElement | null>(null))

  const [isActive, setIsActive] = useState({ android: false, github: false })

  const handleMouseEnter = (type: "android" | "github") => {
    setIsActive((obj) => ({ ...obj, [type]: true }))
  }

  const handleMouseLeave = (type: "android" | "github") => {
    setIsActive((obj) => ({ ...obj, [type]: false }))
  }

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sceneRef.current,
        pinnedContainer: sceneRef.current,
        markers: true,
        pin: true,
        start: "0px 0px",
        end: "2000px 0px",
        scrub: 1,
      },
    })

    let index = 1

    tl.to(
      picturesRef.current,
      {
        duration: 5,
      },
      index
    )

    for (let i = 0; i < reviews.length - 1; i++) {
      tl.to(
        picturesRef.current,
        {
          translateY: isDesktop ? `-${360 * (i + 1)}px` : `-${50 * (i + 1)}vh`,
          duration: 1,
          ease: "power1.inOut",
        },
        ++index
      )
        .to(
          descRefs[i].current,
          {
            opacity: 0,
            duration: 1,
          },
          index
        )
        .to(
          descRefs[i + 1].current,
          {
            opacity: 1,
            duration: 1,
          },
          index
        )
        .to(
          picturesRef.current,
          {
            duration: 5,
          },
          ++index
        )
    }
  }, [])

  return (
    <ContentSection
      title="시간 내주셔서 고마워요"
      subTitle="Thanks for reading"
      number={5}
      noPaddingSide={true}
      content={
        "만약 제가 마음에 들지 않는다면 그 이유를 알고싶어요.<br/> 여러분의 작은 클릭 몇 번이 저에겐 큰 나무가 됩니다!"
      }
    >
      <div ref={sceneRef} className={cx("w-full")}>
        <div className={cx("relative w-full md:h-[360px] h-auto bg-g-ivory  md:grid md:grid-cols-[2fr_3fr]")}>
          <div className={cx("w-full md:h-full h-[50vh] overflow-hidden")}>
            <div ref={picturesRef} className={cx("flex-col-center")}>
              {reviews.map(({ name, angle, pin }, i) => (
                <div className={cx("w-full md:h-[360px] h-[50vh] flex-center pt-6")} key={`review-picture-${i}`}>
                  <div className={cx("relative w-[200px] bg-white border border-[rgba(0,0,0,0.1)] p-2", angle)}>
                    <img className={cx("absolute -top-6 w-10 h-10", pin)} src="./images/icons/pin.png" alt="" />
                    <div className={cx("absolute-full", style.texture)}></div>
                    <picture>
                      <img
                        className={cx("w-full h-[200px] object-cover bg-slate-400")}
                        // src={`./images/${image}`}
                        src="https://plus.unsplash.com/premium_photo-1682093244743-29d7a6aee65d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </picture>
                    <h4 className={cx("text-center my-3 text-lg edu-vic")}>{name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cx("relative md:h-[360px] h-[50vh]")}>
            {reviews.map(({ title, desc, position }, i) => (
              <div
                ref={descRefs[i]}
                className={cx(
                  "absolute w-full max-w-[500px] md:top-1/2 md:left-0 md:translate-x-0 md:-translate-y-1/2 top-2 left-1/2 -translate-x-1/2 md:p-0 p-4 bg-red ",
                  {
                    ["opacity-0"]: i > 0,
                  }
                )}
                key={`review-${i}`}
              >
                <h3 className={cx("text-2xl font-normal mb-4 md:text-left text-center")}>{title}</h3>
                <p className={cx("text-pretty text-[14px] leading-6 mb-6 md:text-left text-center")}>{desc}</p>
                <div className={cx("flex md:justify-start justify-center")}>
                  <span
                    className={cx(
                      "inline-block edu-vic py-3 px-4 pr-5 text-sm rounded-br-lg",
                      colors_strong[i],
                      colors_text[i]
                    )}
                  >
                    {position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                <img className={cx("w-20")} src="./images/android.png" alt="" />
              </motion.div>
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  borderWidth: "12px",
                  borderRadius: "60px",
                  background: "rgb(216,180,254)",
                  color: "white",
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
                <img className={cx("w-20")} src="./images/github.png" alt="" />
              </motion.div>
              <motion.a
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  borderWidth: "12px",
                  borderRadius: "60px",
                  background: "rgb(134,239,172)",
                  color: "white",
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
