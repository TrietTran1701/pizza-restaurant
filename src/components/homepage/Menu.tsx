import { PizzaSingleType, PizzaCombineType } from "../../types"
import { useState } from "react"
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
export const MenuItem = ({ pizza, locale }: IPropsMenuItem) => {
  return (
    <div className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer">
      <img src={pizza.img} alt="" className="rounded-lg mb-4" />
      <div className="flex justify-between mb-4">
        <div className="md:text-xl text-[1rem] font-semibold">{pizza.name}</div>
        {/* <div className="flex items-center gap-2">
          <button>-</button>
          <span className="text-[0.85rem]">2</span>
          <button>+</button>
        </div> */}
      </div>
      <p className="text-[0.85rem] opacity-70 mb-4">{pizza.desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">{pizza.price}$</span>
        <span className="cursor-pointer p-3 btn">
          {message && message[locale].btn}
        </span>
      </div>
    </div>
  )
}

const Menu = ({ pizzas, locale }: IPropsMenu) => {
  // console.log(pizzas['en'])
  //   const [menu, setMenu] = useState < PizzaSingle
  const temp: any = locale
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">
          {/* Hot selling Recipe */}
          {message && message[locale].title}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {pizzas &&
            pizzas[locale].map((pizza, index) => (
              <MenuItem pizza={pizza} key={index} locale={locale} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
