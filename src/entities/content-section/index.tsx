import cs from "classnames/bind"
import { memo, ReactNode } from "react"
import style from "./style.module.scss"
const cx = cs.bind(style)

interface Props {
  title: string
  subTitle: string
  content: string
  children: ReactNode
  number: number
  noPaddingSide?: boolean
}

function ContentSection({ title, subTitle, content, number, children, noPaddingSide }: Props) {
  return (
    <section
      className={cx(
        `w-full pt-16 pb-4`,
        number % 2 === 1 ? "bg-white" : "bg-g-ivory",
        noPaddingSide ? "px-0" : "sm:px-8 px-3"
      )}
    >
      <div className={cx("flex flex-col items-center md:mb-16 mb-10")}>
        <h2 className={cx("text-3xl sm:text-4xl text-center mb-2")}>{title}</h2>
        <h4 className={cx("mb-12 min-w-[100px] text-center", style["sub-header"])}>({subTitle})</h4>
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className={cx("text-center text-[#181c31dd] text-sm xs:text-lg font-medium")}
        ></p>
      </div>
      {children}
    </section>
  )
}

export default memo(ContentSection)
