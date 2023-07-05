import { Link, Routes, Route } from 'react-router-dom'
import { Page } from './Page.jsx'
import { NotFound } from './NotFound.jsx'

function App() {

  return (
    <>
      <nav >
        <ul>
          <li>
            <Link to="/">Home | </Link>
            <Link to="/about">About Us |</Link>
            <Link to="/page/1">Page 1 |</Link>
            <Link to="/page/2">Page 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/about" element={<h1>About Us</h1>}></Route>
        <Route path="/page/:id" element={<Page />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
