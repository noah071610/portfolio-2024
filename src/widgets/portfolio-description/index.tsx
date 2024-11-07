import cs from "classnames/bind"
import { motion } from "framer-motion"
import style from "./style.module.scss"

const cx = cs.bind(style)

export default function PortfolioDescription({ onDescriptionModal }: { onDescriptionModal: boolean }) {
  return (
    <motion.div
      initial="initial"
      animate={onDescriptionModal ? "visible" : "initial"}
      variants={{
        initial: {
          display: "none",
          scale: 0,
          x: "-50%",
          y: "-50%",
          opacity: 0,
        },
        visible: {
          display: "block",
          scale: 1,
          x: "-50%",
          y: "-50%",
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
          },
        },
      }}
      transition={{ stiffness: 400, damping: 0 }}
      className={cx(
        "max-w-[800px] w-full fixed top-1/2 left-1/2 h-[90dvh] bg-white shadow-2xl p-8 rounded-3xl overflow-scroll z-[999]"
      )}
    >
      {[1, 2, 3].map((v) => (
        <motion.div
          key={v}
          variants={{
            initial: {
              opacity: 0,
              y: 150,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className={cx("w-full h-[300px] bg-red-300")}
        ></motion.div>
      ))}
    </motion.div>
  )
}
