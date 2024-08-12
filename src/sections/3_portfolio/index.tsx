import cs from "classnames/bind"
import style from "./style.module.scss"

import PortfolioBanner from "@/widgets/portfolio-banner"
import PortfolioContact from "@/widgets/portfolio-contact"
import PortfolioContent from "@/widgets/portfolio-content"
import PortfolioHistory from "@/widgets/portfolio-history"
import PortfolioSkill from "@/widgets/portfolio-skill"
import PortfolioWhoIAM from "@/widgets/portfolio-who-i-am"

const cx = cs.bind(style)

export default function PortfolioPage() {
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
