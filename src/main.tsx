import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <AnimatePresence mode="wait">
        <Router>
          <App />
        </Router>
      </AnimatePresence>
    </ChakraProvider>
  </React.StrictMode>
)
