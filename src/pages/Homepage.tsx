import Header from "../components/homepage/Header"
import Hero from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Menu from "../components/homepage/Menu"
import { PizzaCombineType } from "../types"
import { useState, useEffect } from "react"
import axios from "axios"

const Homepage = () => {
  const [pizzas, setPizzas] = useState<PizzaCombineType>()
  const [locale, setLocale] = useState("en")
  const [language, setLanguage] = useState("English")
  const fetchPizzas = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/39d3eb96-70c1-4f5f-bbbd-810025bb958c"
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

  useEffect(() => {
    if (language === "English") setLocale("en")
    else if (language === "Tiếng Việt") setLocale("vie")
    else setLocale("ja")
  }, [language])

  return (
    <div className="bg-back">
      <Header language={language} setLanguage={setLanguage} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Menu pizzas={pizzas} locale={locale} />
    </div>
  )
}

export default Homepage
