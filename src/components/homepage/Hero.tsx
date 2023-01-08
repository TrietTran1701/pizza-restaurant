import Hero from "../../assets/Hero.gif"
import { FaArrowRight } from "react-icons/fa"
import { heroIcons } from "../../Icons"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const message: any = {
  en: {
    title: "Delicious pizza",
    subtitle: "is waiting for you",
    btn: "View Menu",
  },
  vie: {
    title: "Pizza nóng hổi",
    subtitle: "đang chờ bạn đấy",
    btn: "Xem Menu",
  },
  ja: {
    title: "おいしいピザ",
    subtitle: "があなたを待っています",
    btn: "メニューを見る",
  },
}

interface IPropsHero {
  locale: string
}
const Home = ({ locale }: IPropsHero) => {
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
    <div
      className="section flex items-center xl:justify-center justify-around flex-wrap"
      id="home"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
          {/* Delicious <br /> Pizza is waiting <br /> For you */}
          {message && message[locale].title} <br /> {message[locale].subtitle}
        </div>
        <div className="btn">
          <a href="#">{message && message[locale].btn}</a>
          <FaArrowRight />
        </div>
        <div className="flex md:gap-6 gap-2">
          {heroIcons.map((heroIcon, index) => {
            return (
              <div
                className="w-[3rem] h-[3rem] bg-black text-white flex items-center justify-center md:text-3xl text-xl rounded-md"
                key={index}
              >
                {heroIcon}
              </div>
            )
          })}
        </div>
      </div>
      <div className="min-w-[200px] justify-self-center md:w-[600px]">
        <img src={Hero} alt="hero" />
      </div>
    </div>
  )
}

export default Home
