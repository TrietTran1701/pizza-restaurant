import { PizzaSingleType, PizzaCombineType } from "../../types"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
const message: any = {
  en: {
    title: "Hot selling pizzas",
    btn: "Add to cart",
  },
  vie: {
    title: "Pizza bán chạy",
    btn: "Thêm vào giỏ",
  },
  ja: {
    title: "売れ筋ピザ",
    btn: "カートに追加",
  },
}
interface IPropsPizza {
  locale: string
}

interface IPropsMenuItem {
  pizza: PizzaSingleType
  locale: string
}
interface IPropsMenu {
  pizzas: PizzaCombineType | undefined
  locale: string
}

// Custom easing
let easing = [0.6, -0.05, 0.01, 0.99]

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const MenuItem = ({ pizza, locale }: IPropsMenuItem) => {
  const [ref, inView] = useInView()
  const fadeInUp = useAnimation()
  const slideOut = useAnimation()

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
      slideOut.start({
        x: 0,
        opacity: 1,
        transition: { delay: 0.2 },
      })
    }
    if (!inView) {
      fadeInUp.start({
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
      })
      slideOut.start({
        x: 60,
        opacity: 0,
      })
    }
  }, [inView])
  return (
    <motion.div
      // variants={fadeInUp}
      ref={ref}
      animate={fadeInUp}
      className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
    >
      <motion.img
        // initial={{ x: 60, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        ref={ref}
        animate={slideOut}
        src={pizza.img}
        alt=""
        className="rounded-lg mb-4"
      />
      <div className="flex justify-between mb-4">
        <div className="md:text-xl text-[1rem] font-semibold">{pizza.name}</div>
      </div>
      <p className="text-[0.85rem] opacity-70 mb-4">{pizza.desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">{pizza.price}$</span>
        <span className="cursor-pointer p-3 btn">
          {message && message[locale].btn}
        </span>
      </div>
    </motion.div>
  )
}

const Menu = ({ pizzas, locale }: IPropsMenu) => {
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">
          {/* Hot selling Recipe */}
          {message && message[locale].title}
        </div>

        <motion.div
          variants={stagger}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16"
        >
          {pizzas &&
            pizzas[locale].map((pizza, index) => (
              <MenuItem pizza={pizza} key={index} locale={locale} />
            ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
