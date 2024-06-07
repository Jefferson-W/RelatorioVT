import { Outlet } from "react-router-dom"
import Navbar from "../src/componentes/Navbar/Navbar.jsx"

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App