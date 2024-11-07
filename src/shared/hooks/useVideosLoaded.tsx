import { useEffect, useState } from "react"

const useVideosLoaded = (videoSrcs: string[]) => {
  const [allVideosLoaded, setAllVideosLoaded] = useState(false)

  useEffect(() => {
    if (videoSrcs.length === 0) {
      setAllVideosLoaded(true)
      return
    }

    let loadedCount = 0
    const handleVideoLoad = () => {
      loadedCount += 1
      if (loadedCount === videoSrcs.length) {
        setAllVideosLoaded(true)
      }
    }

    const handleVideoError = () => {
      loadedCount += 1
      if (loadedCount === videoSrcs.length) {
        setAllVideosLoaded(true)
      }
    }

    const videos = videoSrcs.map((src) => {
      const video = document.createElement("video")
      video.preload = "auto"
      video.src = src

      // canplaythrough 이벤트는 버퍼링 없이 끝까지 재생할 수 있을 만큼
      // 충분한 데이터가 로드되었을 때 발생합니다
      video.addEventListener("canplaythrough", handleVideoLoad)
      video.addEventListener("error", handleVideoError)
      return video
    })

    return () => {
      // Clean up event listeners
      videos.forEach((video) => {
        video.removeEventListener("canplaythrough", handleVideoLoad)
        video.removeEventListener("error", handleVideoError)
        video.remove() // DOM에서 비디오 요소 제거
      })
    }
  }, [videoSrcs])

  return allVideosLoaded
}

export default useVideosLoaded
