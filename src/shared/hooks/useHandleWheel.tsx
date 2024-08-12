import { AnimationControls } from "framer-motion"
import { useEffect, useState } from "react"

function useHandleWheel(initialState: boolean, controls: AnimationControls) {
  const [isShowing, setIsShowing] = useState(initialState)

  useEffect(() => {
    const handleWheel = (event: any) => {
      let deltaY = event.deltaY

      if (deltaY > 0 && deltaY > 40) {
        controls.start("showing")
        setIsShowing(true)
      } else if (deltaY < 0 && deltaY < -30) {
        controls.start("visible")
        setIsShowing(false)
      }
    }

    window.addEventListener("wheel", handleWheel)

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return isShowing
}

export default useHandleWheel
