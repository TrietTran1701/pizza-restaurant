import { useEffect, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"

interface IPropsLanguaeSwitcher {
  language: string
  setLanguage: (language: string) => any
}

export const LanguageSwitcher = ({
  language,
  setLanguage,
}: IPropsLanguaeSwitcher) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
        {language}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setLanguage("English")
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("Tiếng Việt")
          }}
        >
          Tiếng Việt
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("日本")
          }}
        >
          日本
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [language, setLanguage] = useState("English")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])
  return (
    <div
      className={`${
        scroll ? " bg-back shadow-sm" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <nav className="relative container mx-auto flex items-center justify-between py-4 px-2">
        <div className="">
          <h4 className="text-xl font-semibold">ThePizzaCompany</h4>
          <span className="text-[0.65rem] font-bold opacity-70">
            Tasty pizza
          </span>
        </div>
        <div className="flex items-center md:gap-8 gap-4">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <div className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative">
            <AiOutlineShoppingCart className="text-xl text-white" />
            <div className="absolute bg-red-500 text-[0.65rem] w-4 h-4 right-1 top-2 flex items-center justify-center rounded-full">
              2
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
