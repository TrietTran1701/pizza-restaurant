import { PizzaType } from "../../types"

interface IPropsMenuItem {
  pizza: PizzaType
}
interface IPropsMenu {
  pizzas: PizzaType[]
}
export const MenuItem = ({ pizza }: IPropsMenuItem) => {
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
        <span className="cursor-pointer p-3 btn">Add to Cart</span>
      </div>
    </div>
  )
}

const Menu = ({ pizzas }: IPropsMenu) => {
  //   console.log(pizzas.length)
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">
          Hot selling Recipe
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {pizzas.length > 0 &&
            pizzas.map((pizza, index) => (
              <MenuItem pizza={pizza} key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
