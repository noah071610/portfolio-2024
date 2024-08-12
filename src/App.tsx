import cs from "classnames/bind"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useState } from "react"
import { useScrollLock } from "usehooks-ts"
import LoadingPage from "./sections/1_loading"
import RendingPage from "./sections/2_rending"
import PortfolioPage from "./sections/3_portfolio"
import useImagesLoaded from "./shared/hooks/useImagesLoaded"
import style from "./shared/styles/app.module.scss"
gsap.registerPlugin(ScrollTrigger)
const cx = cs.bind(style)

const allLogos = [
  "/images/icons/aws.png",
  "/images/icons/css.png",
  "/images/icons/dizzy.png",
  "/images/icons/docker.png",
  "/images/icons/figma.png",
  "/images/icons/github.png",
  "/images/icons/html.png",
  "/images/icons/javascript.png",
  "/images/icons/jest.png",
  "/images/icons/mysql.png",
  "/images/icons/nestjs.png",
  "/images/icons/nextjs.png",
  "/images/icons/nginx.png",
  "/images/icons/nodejs.png",
  "/images/icons/notion.png",
  "/images/icons/pin.png",
  "/images/icons/programming.png",
  "/images/icons/react-query.png",
  "/images/icons/react.png",
  "/images/icons/run.png",
  "/images/icons/sass.png",
  "/images/icons/slack.png",
  "/images/icons/tailwind-css.png",
  "/images/icons/typescript.png",
  "/images/icons/zustand.png",
]

const imageFiles = [
  "/images/3d-gradient.svg",
  "/images/android.png",
  "/images/bg-1.png",
  "/images/bg-2.png",
  "/images/bg-3.png",
  "/images/bg-4.png",
  "/images/blob.svg",
  "/images/blob2.svg",
  "/images/blob3.svg",
  "/images/cloud-1.png",
  "/images/cloud-2.png",
  "/images/doda-thumbnail.png",
  "/images/github.png",
  "/images/logo.png",
  "/images/me.png",
  "/images/paper.jpg",
  "/images/people.png",
  "/images/wave-1.svg",
  "/images/wave-2.svg",
]

function App() {
  const { unlock, lock } = useScrollLock({
    autoLock: false,
  })

  const [readyToRender, setReadyToRender] = useState(false)
  const [closeLoadingPage, setCloseLoadingPage] = useState(false)
  const [openRendingPage, setOpenRendingPage] = useState(false)

  const allLogosLoaded = useImagesLoaded(allLogos)
  const allImagesLoaded = useImagesLoaded(imageFiles)
  useEffect(() => {
    lock()
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0) // 새로고침 시 스크롤을 최상단으로
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    if (allLogosLoaded && allImagesLoaded) {
      const wait = 2000
      const disappear = 1500
      const appear = 2000
      setTimeout(() => {
        setReadyToRender(true)
      }, wait)
      setTimeout(() => {
        setCloseLoadingPage(true)
      }, wait + disappear)
      setTimeout(() => {
        setOpenRendingPage(true)
        unlock()
      }, wait + disappear + appear)
      setTimeout(() => {}, wait + disappear + appear + 10)
    }
  }, [allLogosLoaded, allImagesLoaded])

  return (
    <main>
      <LoadingPage closeLoadingPage={closeLoadingPage} allLogosLoaded={allLogosLoaded} />
      <RendingPage readyToAnimate={openRendingPage} />
      <PortfolioPage />

      <div className={cx(style.cover, "bg-[#fcddf8] z-[100]", { [style["animation-one"]]: readyToRender })}></div>
      <div className={cx(style.cover, "bg-[#f1dcfc] z-[200]", { [style["animation-two"]]: readyToRender })}></div>
      <div className={cx(style.cover, "bg-[#c0c3fd] z-[300]", { [style["animation-three"]]: readyToRender })}></div>
    </main>
  )
}

export default App
