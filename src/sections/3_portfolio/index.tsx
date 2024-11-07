import cs from "classnames/bind"
import style from "./style.module.scss"

import PortfolioBanner from "@/widgets/portfolio-banner"
import PortfolioContact from "@/widgets/portfolio-contact"
import PortfolioContent from "@/widgets/portfolio-content"
import PortfolioDescription from "@/widgets/portfolio-description"
import PortfolioHistory from "@/widgets/portfolio-history"
import PortfolioSkill from "@/widgets/portfolio-skill"
import PortfolioWhoIAM from "@/widgets/portfolio-who-i-am"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useScrollLock } from "usehooks-ts"

const cx = cs.bind(style)

export default function PortfolioPage() {
  const [onDescriptionModal, setOnDescriptionModal] = useState(false)
  const { unlock, lock } = useScrollLock({
    autoLock: false,
  })
  useEffect(() => {
    if (onDescriptionModal) {
      lock()
    } else {
      unlock()
    }

    return () => {}
  }, [onDescriptionModal])

  return (
    <div className={cx("mt-[100vh] w-full flex justify-center py-16")}>
      <div className={cx("z-50 max-w-[1000px] w-full  bg-white rounded-2xl shadow-md")}>
        <PortfolioBanner />
        <PortfolioSkill />
        <div
          style={{
            background: `url('./images/wave-1.svg') no-repeat center / cover`,
          }}
          className={cx("w-full h-[150px]")}
        ></div>
        <PortfolioContent />
        <PortfolioDescription onDescriptionModal={onDescriptionModal} />
        <motion.div
          initial="initial"
          animate={onDescriptionModal ? "visible" : "initial"}
          variants={{
            initial: {
              display: "none",
              opacity: 0,
            },
            visible: {
              display: "block",
              opacity: 1,
            },
          }}
          onClick={() => {
            setOnDescriptionModal(false)
          }}
          className={cx("fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] w-screen h-screen z-[100]")}
        ></motion.div>
        <div
          style={{
            background: `url('./images/wave-2.svg') no-repeat center / cover`,
          }}
          className={cx("w-full h-[150px]")}
        ></div>
        <PortfolioHistory />
        <div
          style={{
            background: `url('./images/wave-1.svg') no-repeat center / cover`,
          }}
          className={cx("w-full h-[150px]")}
        ></div>
        <PortfolioWhoIAM />
        <div
          style={{
            background: `url('./images/wave-2.svg') no-repeat center / cover`,
          }}
          className={cx("w-full h-[150px]")}
        ></div>
        <PortfolioContact />
      </div>
    </div>
  )
}
