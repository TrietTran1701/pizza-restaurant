import { useState } from "react"
import "./App.css"
import { DatePicker } from "antd"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500">
      <DatePicker />
    </div>
  )
}

export default App
