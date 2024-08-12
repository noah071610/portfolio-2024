import { useEffect, useState } from "react"

const useImagesLoaded = (imageSrcs: string[], isIcons?: boolean) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)

  useEffect(() => {
    if (imageSrcs.length === 0) {
      setAllImagesLoaded(true)
      return
    }

    let loadedCount = 0
    const handleImageLoad = () => {
      console.log("load!")

      loadedCount += 1
      if (loadedCount === imageSrcs.length) {
        setAllImagesLoaded(true)
      }
    }

    const handleImageError = () => {
      console.log("error!")

      loadedCount += 1
      if (loadedCount === imageSrcs.length) {
        setAllImagesLoaded(true)
      }
    }

    const images = imageSrcs.map((src) => {
      const img = new Image()
      img.src = src
      img.onload = handleImageLoad
      img.onerror = handleImageError
      return img
    })

    return () => {
      // Clean up event listeners
      images.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [imageSrcs])

  return allImagesLoaded
}

export default useImagesLoaded
