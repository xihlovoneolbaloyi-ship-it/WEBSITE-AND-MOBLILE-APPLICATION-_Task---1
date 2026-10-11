import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Enrol from './pages/Enrol'
import Success from './pages/Success'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:id" element={<ProgramDetail />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="enrol" element={<Enrol />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  )
}
