export interface PizzaSingleType {
  name: string
  price: string
  img: string
  desc: string
}
export interface PizzaCombineType {
  [key: string]: PizzaSingleType[]
}

export interface LanguageType {
  en: string
  vie: string
  jp: string
}
