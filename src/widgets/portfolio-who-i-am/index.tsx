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

export default function PortfolioWhoIAM() {
  const isDesktop = useMediaQuery("(min-width: 435px)")
  const [
    sceneRef,
    gridRef,
    descBoxRef,
    content1Ref,
    content2Ref,
    content3Ref,
    box1Ref,
    box2Ref,
    box3Ref,
    shadow1Ref,
    shadow2Ref,
    shadow3Ref,
    desc1Ref,
    desc2Ref,
    desc3Ref,
  ] = Array.from({ length: 15 }, () => useRef<HTMLDivElement | null>(null))
  const [icon1Ref, icon2Ref, icon3Ref] = Array.from({ length: 3 }, () => useRef<HTMLImageElement | null>(null))

  useLayoutEffect(() => {
    if (!sceneRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sceneRef.current,
        // markers: true,
        pin: true,
        pinnedContainer: sceneRef.current,
        start: "0px 0px",
        end: "4000px 0px",
        scrub: 1,
      },
    })

    let index = 0

    if (!isDesktop) {
      tl.to(
        gridRef.current,
        isDesktop
          ? {}
          : {
              translateX: "33%",
              duration: 1,
            },
        index
      )
      ++index
    }
    tl.to(
      content1Ref.current,
      {
        filter: "grayscale(0%)",
      },
      index
    )
      .to(
        desc1Ref.current,
        {
          opacity: 1,
          scale: 1,
        },
        index
      )
      .to(
        content1Ref.current,
        {
          duration: 2,
        },
        index++
      )
      .to(
        icon1Ref.current,
        {
          translateX: "-15px",
          duration: 0.5,
        },
        ++index
      )
      .to(
        icon1Ref.current,
        {
          translateX: "170px",
          duration: 0.7,
        },
        ++index
      )
      .to(
        gridRef.current,
        isDesktop
          ? {}
          : {
              translateX: 0,
              duration: 1,
            },
        isDesktop ? index : ++index
      ) // for mobile
      .to(
        content1Ref.current,
        {
          filter: "grayscale(100%)",
        },
        index
      )
      .to(
        content2Ref.current,
        {
          filter: "grayscale(0)",
        },
        index
      )
      .to(
        desc1Ref.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        index
      )
      .to(
        descBoxRef.current,
        {
          translateY: isDesktop ? "-150px" : "-180px",
        },
        index
      )
      .to(
        desc2Ref.current,
        {
          scale: 1,
          opacity: 1,
        },
        index
      ) // page 2 visible
      .to(
        content2Ref.current,
        {
          duration: 2,
        },
        index++
      )
      .to(
        icon2Ref.current,
        {
          translateX: "155px",
          duration: 0.5,
        },
        ++index
      )
      .to(
        icon2Ref.current,
        {
          translateX: "340px",
          duration: 0.7,
        },
        ++index
      )
      .to(
        gridRef.current,
        isDesktop
          ? {}
          : {
              translateX: "-33%",
              duration: 1,
            },
        isDesktop ? index : ++index
      ) // for mobile
      .to(
        icon3Ref.current,
        {
          translateX: "170px",
          duration: 0.7,
        },
        ++index
      )
      .to(
        content2Ref.current,
        {
          filter: "grayscale(100%)",
        },
        index
      )
      .to(
        content3Ref.current,
        {
          filter: "grayscale(0)",
        },
        index
      )
      .to(
        desc2Ref.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        index
      )
      .to(
        descBoxRef.current,
        {
          translateY: isDesktop ? "-300px" : "-360px",
        },
        index
      )
      .to(
        desc3Ref.current,
        {
          scale: 1,
          opacity: 1,
        },
        index
      ) // page 3 visible
      .to(
        content3Ref.current,
        {
          duration: 2,
        },
        index++
      )
  }, [])

  return (
    <ContentSection
      title="저는 이런 사람이에요"
      subTitle="Who i am"
      number={4}
      content={"마지막으로 저에 대해서 소개할게요!"}
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
                  ref={i === 0 ? box1Ref : i === 1 ? box2Ref : box3Ref}
                >
                  <div className={cx("relative")} ref={i === 0 ? icon1Ref : i === 1 ? icon2Ref : icon3Ref}>
                    <motion.img
                      className={cx("w-[100px] h-[100px]", { ["-translate-x-[170px]"]: i > 0 })}
                      src={`./images/icons/${icon}`}
                      alt=""
                    />
                    <div
                      ref={i === 0 ? shadow1Ref : i === 1 ? shadow2Ref : shadow3Ref}
                      className={cx(style.shadow)}
                    ></div>
                  </div>
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
