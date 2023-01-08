import { FaArrowRight } from "react-icons/fa"
import pizza from "../../assets/pizza1.png"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
const message: any = {
  en: {
    title: "Delicious pizza awaits you",
    desc: "Buy 1 Pizza from size M and any Drink, get 50% off on the second Pizza (same size)",
    btn: "Explore more",
  },
  vie: {
    title: "Pizza thơm ngon đang chờ bạn",
    desc: "Mua 1 Pizza size M và Đồ uống bất kỳ, giảm 50% cho Pizza thứ 2 (cùng size)",
    btn: "Khám phá thêm",
  },
  ja: {
    title: "おいしいピザ",
    desc: "サイズ M のピザとドリンクを 1 枚購入すると、2 枚目のピザ (同じサイズ) が 50% オフになります",
    btn: "もっと調べる",
  },
}

interface IPropsAbout {
  locale: string
}
const About = ({ locale }: IPropsAbout) => {
  const [ref, inView] = useInView()
  const fadeInUp = useAnimation()
  let easing = [0.6, -0.05, 0.01, 0.99]
  useEffect(() => {
    // console.log("in view: ", inView)
    if (inView) {
      fadeInUp.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: easing,
        },
      })
    }
    if (!inView) {
      fadeInUp.start({
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
      })
    }
  }, [inView])
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10">
        <motion.div
          ref={ref}
          animate={fadeInUp}
          className="flex flex-col justify-center items-start gap-6"
        >
          <div className="sm:text-3xl text-xl font-bold mb-6">
            {message && message[locale].title}
          </div>
          <p className="text-sm opacity-70">{message[locale].desc}</p>
          <div className="btn mb-5">
            <a href="#" className="text-white text-[0.85rem]">
              {message && message[locale].btn}
            </a>
            <FaArrowRight className="text-white" />
          </div>
        </motion.div>
        <div className="md:row-start-1 ">
          <img src={pizza} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
