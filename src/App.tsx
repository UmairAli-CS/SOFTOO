import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/routes/Router"
import './App.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
