import { Route, Routes } from "react-router-dom"
import Template from "./Template"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Project from "./pages/Project"

function App() {

  const links = [
    {
      path: "/",
      component: <Home />
    },
    {
      path: "/resume",
      component: <Resume />
    },
    {
      path: "/project",
      component: <Project />
    },
  ]

  return (
    <Routes>
      {links.map((link, index) => (
        <Route key={index} path={link.path} element={
          <Template children={
            link.component
          } />
        } />
      ))}
    </Routes>
  )
}

export default App
