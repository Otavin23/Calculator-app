import React from "react"
import Main from "./components/Main"
import { CalculadoraProvider } from "./context"

const App = ()=>{
   return (
      <CalculadoraProvider>
            <Main />
      </CalculadoraProvider>
   )
}
export default App 