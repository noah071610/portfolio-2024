import cs from "classnames/bind"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useState } from "react"
import { useEventListener, useScrollLock } from "usehooks-ts"
import LoadingPage from "./sections/1_loading"
import RendingPage from "./sections/2_rending"
import PortfolioPage from "./sections/3_portfolio"
import useImagesLoaded from "./shared/hooks/useImagesLoaded"
import useVideosLoaded from "./shared/hooks/useVideosLoaded"
import style from "./shared/styles/app.module.scss"
gsap.registerPlugin(ScrollTrigger)
const cx = cs.bind(style)

const allLogos = [
  "aws.png",
  "css.png",
  "dizzy.png",
  "docker.png",
  "figma.png",
  "github.png",
  "html.png",
  "javascript.png",
  "jest.png",
  "mysql.png",
  "nestjs.png",
  "nextjs.png",
  "nginx.png",
  "nodejs.png",
  "notion.png",
  "pin.png",
  "programming.png",
  "react-query.png",
  "react.png",
  "run.png",
  "sass.png",
  "slack.png",
  "tailwind-css.png",
  "typescript.png",
  "zustand.png",
].map((v) => "/images/icons/" + v)

const videos = [
  "/receptori/rece-1",
  "/receptori/rece-2",
  "/receptori/rece-3",
  "/receptori/rece-4",
  "/rankingtogether/play-2",
  "/rankingtogether/play-3",
  "/rankingtogether/play-4",
  "/rankingtogether/result-1",
  "/rankingtogether/result-2",
  "/rankingtogether/result-3",
  "/rankingtogether/preview-edit",
].map((v) => "/images" + v + ".mp4")

const imageFiles = [
  "3d-gradient.svg",
  "android.png",
  "bg-1.png",
  "bg-2.png",
  "bg-3.png",
  "bg-4.png",
  "blob.svg",
  "blob2.svg",
  "blob3.svg",
  "cloud-1.png",
  "cloud-2.png",
  "doda-thumbnail.png",
  "receptori-thumbnail.png",
  "rankingtogether-thumbnail.png",
  "github.png",
  "logo.png",
  "me.png",
  "paper.jpg",
  "people.png",
  "wave-1.svg",
  "wave-2.svg",
].map((v) => "/images/" + v)

function App() {
  const { unlock, lock } = useScrollLock({
    autoLock: false,
  })

  const [readyToRender, setReadyToRender] = useState(false)
  const [closeLoadingPage, setCloseLoadingPage] = useState(false)
  const [openRendingPage, setOpenRendingPage] = useState(false)

  const allLogosLoaded = useImagesLoaded(allLogos)
  const allImagesLoaded = useImagesLoaded(imageFiles)
  const allVideosLoaded = useVideosLoaded(videos)

  const handleBeforeUnload = () => {
    window.scrollTo(0, 0)
  }
  useEventListener("beforeunload", handleBeforeUnload)

  useEffect(() => {
    if (allLogosLoaded && allImagesLoaded && allVideosLoaded) {
      const wait = 4000
      const disappear = 1500
      const appear = 2000
      setTimeout(() => {
        lock()
        setReadyToRender(true)
      }, wait)
      setTimeout(() => {
        setCloseLoadingPage(true)
      }, wait + disappear)
      setTimeout(() => {
        setOpenRendingPage(true)
        unlock()
      }, wait + disappear + appear)
    }
  }, [allLogosLoaded, allImagesLoaded, allVideosLoaded])

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
