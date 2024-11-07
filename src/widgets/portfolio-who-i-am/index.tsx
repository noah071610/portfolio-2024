import ContentSection from "@/entities/content-section"
import cs from "classnames/bind"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import style from "./style.module.scss"
gsap.registerPlugin(ScrollTrigger)
const cx = cs.bind(style)

const whoILike = [
  {
    title: "책임감과 주인의식",
    bg: "blob.svg",
    icon: "programming.png",
    borderColor: "border-g-blue-strong",
    desc: "<span class='text-point-bold'>C-level과 같은</span> 리스크와 책임감은 아니지만 스타트업 초기멤버로서 회사를 같이 성장시키며 책임감과 주인의식을 깊게 배웠습니다. 저의 책임감은 같이 일하는 사람들에게 보답하고 인정받기 위해 나오며 주인의식은 내가 프로덕트를 주체적으로 성장시키고 키워냈다는 자부심에서 나옵니다.",
  },
  {
    title: "자율성과 창의성",
    bg: "blob2.svg",
    icon: "dizzy.png",
    borderColor: "border-[#faac7f]",
    desc: "<span class='text-point-bold'>책임감을 바탕으로</span> 능동적이고 자유롭게 일하는 분위기를 선호합니다. 물론 무작정 자유로운 것은 방임에 불과하지만, 자율성이라는 가치를 서로 믿는다면 저는 좀 더 창의적이고 능동적인 아이디어와 결과물이 나오는 스타일입니다.",
  },
  {
    title: "협업과 고객중심",
    bg: "blob3.svg",
    icon: "run.png",
    borderColor: "border-purple-300",
    desc: "<span class='text-point-bold'>기업의 목표</span>는 상장, 새로운 투자, 엑시트 등 여러가지가 있겠지만 목표를 위해서는 반드시 고객이 필요합니다. 기업은 개인을 포함, 일원이 협업하는 모든 활동이 고객을 위한것인가를 1차적으로 고민해야 한다고 생각합니다.",
  },
]

const animateElement = (tl: any, ref: any, animation: any, index: number) => {
  tl.to(ref.current, animation, index)
}

export default function PortfolioWhoIAM() {
  const isDesktop = useMediaQuery("(min-width: 435px)")
  const [sceneRef, gridRef, descBoxRef, content1Ref, content2Ref, content3Ref, desc1Ref, desc2Ref, desc3Ref] =
    Array.from({ length: 9 }, () => useRef<HTMLDivElement | null>(null))
  const [icon1Ref, icon2Ref, icon3Ref] = Array.from({ length: 3 }, () => useRef<HTMLImageElement | null>(null))

  useLayoutEffect(() => {
    if (!sceneRef.current) return

    // ScrollTrigger 초기화 함수
    const initAnimation = () => {
      // 기존 ScrollTrigger들을 정리
      ScrollTrigger.getAll().forEach((st) => st.kill())

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          pin: true,
          pinnedContainer: sceneRef.current,
          start: "0px 0px",
          end: "4000px 0px",
          scrub: true,
        },
      })

      let index = 0

      const commonAnimations = [
        !isDesktop ? { ref: gridRef, animation: { translateX: "33%", duration: 1 }, increaseIndex: true } : {}, // 1
        { ref: content1Ref, animation: { filter: "grayscale(0%)" }, increaseIndex: false },
        { ref: desc1Ref, animation: { opacity: 1, scale: 1 }, increaseIndex: false },

        { ref: content1Ref, animation: { duration: 1 }, increaseIndex: true },

        { ref: icon1Ref, animation: { translateX: "-15px" }, increaseIndex: true },

        { ref: icon1Ref, animation: { translateX: "170px" }, increaseIndex: true },
        !isDesktop ? { ref: gridRef, animation: { translateX: "0", duration: 1 }, increaseIndex: true } : {}, // 1

        { ref: content1Ref, animation: { filter: "grayscale(100%)" }, increaseIndex: false },
        { ref: content2Ref, animation: { filter: "grayscale(0)" }, increaseIndex: false },
        { ref: desc1Ref, animation: { opacity: 0, scale: 0.5 }, increaseIndex: false },
        { ref: descBoxRef, animation: { translateY: isDesktop ? "-150px" : "-180px" }, increaseIndex: false },
        { ref: desc2Ref, animation: { scale: 1, opacity: 1 }, increaseIndex: false },
        { ref: icon2Ref, animation: { translateX: "0" }, increaseIndex: false },

        { ref: content2Ref, animation: { duration: 1 }, increaseIndex: true },

        { ref: icon2Ref, animation: { translateX: "-15px" }, increaseIndex: true },

        { ref: icon2Ref, animation: { translateX: "170px" }, increaseIndex: true },
        !isDesktop ? { ref: gridRef, animation: { translateX: "-33%", duration: 1 }, increaseIndex: true } : {},

        { ref: content2Ref, animation: { filter: "grayscale(100%)" }, increaseIndex: false },
        { ref: content3Ref, animation: { filter: "grayscale(0)" }, increaseIndex: false },
        { ref: desc2Ref, animation: { opacity: 0, scale: 0.5 }, increaseIndex: false },
        { ref: descBoxRef, animation: { translateY: isDesktop ? "-300px" : "-360px" }, increaseIndex: false },
        { ref: desc3Ref, animation: { scale: 1, opacity: 1 }, increaseIndex: false },
        { ref: icon3Ref, animation: { translateX: "0px" }, increaseIndex: false },

        { ref: content3Ref, animation: { duration: 1 }, increaseIndex: true },
      ]

      // Apply common animations
      commonAnimations.forEach((v) => {
        if (Object.keys(v).length > 0) {
          animateElement(tl, v.ref, v.animation, index)
          if (v.increaseIndex) {
            index++
          }
        }
      })

      // Mobile reset grid animation
      if (!isDesktop) {
        animateElement(tl, gridRef, { translateX: "-33%", duration: 1 }, index)
        index++
      }
    }

    // 초기 애니메이션 설정
    initAnimation()

    // 리사이즈 이벤트에 대한 디바운스 처리
    let resizeTimer = undefined as any
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        initAnimation()
      }, 250)
    }

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize)

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [isDesktop]) // isDesktop 의존성 추가

  return (
    <ContentSection
      title="저는 이런 개발자에요"
      subTitle="Who i am"
      number={4}
      content={"마지막으로 저에 대해서 소개할게요"}
    >
      <div className={cx("w-full overflow-hidden h-[4800px]")}>
        <div ref={sceneRef} className={cx("w-full h-screen flex-center flex-col")}>
          <div ref={gridRef} className={cx("w-[800px] grid-3 gap-6 mb-8 ")}>
            {whoILike.map(({ title, bg, icon, borderColor }, i) => (
              <div
                key={`who-i-like-${i}`}
                ref={i === 0 ? content1Ref : i === 1 ? content2Ref : content3Ref}
                className={cx("w-full")}
                style={{ filter: "grayscale(100%)" }}
              >
                <div
                  style={{
                    background: `url('./images/${bg}') center / cover`,
                  }}
                  className={cx(
                    `relative overflow-hidden w-full h-[250px] p-8  bg-red-100 mb-4 flex-center rounded-full border-[10px] shadow-xl ${borderColor}`
                  )}
                >
                  <motion.img
                    ref={i === 0 ? icon1Ref : i === 1 ? icon2Ref : icon3Ref}
                    className={cx("w-[100px] h-[100px]", { ["-translate-x-[170px]"]: i > 0 })}
                    src={`./images/icons/${icon}`}
                    alt={`${icon}-image`}
                  />
                </div>
                <h3 className={cx("text-center text-xl")}>{title}</h3>
              </div>
            ))}
          </div>
          <div
            className={cx(
              "w-full max-w-[800px] xs:h-[150px] h-[180px] overflow-hidden xs:px-12 px-8  bg-white xs:rounded-[60px] rounded-xl shadow-md"
            )}
          >
            <div className={cx("w-full h-[450px]")} ref={descBoxRef}>
              {whoILike.map(({ desc }, i) => (
                <div
                  key={`who-i-like-desc-${i}`}
                  ref={i === 0 ? desc1Ref : i === 1 ? desc2Ref : desc3Ref}
                  className={cx(`opacity-0 w-full xs:h-[150px] h-[180px] flex-center scale-[0.5]`)}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: desc }}
                    className={cx("xs:text-[15px] text-[13px] xs:leading-6 leading-5 mb-2")}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
