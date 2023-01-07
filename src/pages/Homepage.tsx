import Header from "../components/homepage/Header"
import Home from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Menu from "../components/homepage/Menu"
import { PizzaType } from "../types"
import { useState, useEffect } from "react"
import axios from "axios"

const Homepage = () => {
  const [pizzas, setPizzas] = useState<PizzaType[]>([])
  const fetchPizzas = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/6d645357-0a93-462a-a6e1-b4c370551dfe"
      )
      if (response) {
        setPizzas(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPizzas()
  }, [])

  return (
    <div className="bg-back">
      <Header />
      <Home />
      <About />
      <Menu pizzas={pizzas} />
    </div>
  )
}

export default Homepage
