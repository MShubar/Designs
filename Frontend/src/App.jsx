import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarTop from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Route1 from './pages/Route1'
import Route2 from './pages/Route2'
import Route3 from './pages/Route3'
import Route4 from './pages/Route4'
import Route5 from './pages/Route5'
import Settings from './pages/Settings'
import Help from './pages/Help'
import Feedback from './pages/Feedback'

function App() {
  return (
    <>
      <header className="App-header">
        <NavbarTop />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route1" element={<Route1 />} />
          <Route path="/route2" element={<Route2 />} />
          <Route path="/route3" element={<Route3 />} />
          <Route path="/route4" element={<Route4 />} />
          <Route path="/route5" element={<Route5 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </>
  )
}

export default App
