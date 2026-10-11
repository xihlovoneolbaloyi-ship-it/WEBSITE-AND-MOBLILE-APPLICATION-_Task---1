import { useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen'
import CoursesScreen from './screens/CoursesScreen'
import CourseDetailScreen from './screens/CourseDetailScreen'
import SelectionScreen from './screens/SelectionScreen'
import QuoteCalculatorScreen from './screens/QuoteCalculatorScreen'
import RequestQuoteScreen from './screens/RequestQuoteScreen'
import QuoteSubmittedScreen from './screens/QuoteSubmittedScreen'
import EnquiryScreen from './screens/EnquiryScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import MenuScreen from './screens/MenuScreen'

export default function App() {
  const location = useLocation()
  const isSplash = location.pathname === '/' || location.pathname === '/splash'

  // Selected courses state (shared)
  const [selected, setSelected] = useState({
    dog: true,
    firstaid: true,
    fundamentals: false,
    sitting: false
  })

  const toggle = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const selectCourse = (id) => {
    setSelected((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div className="app-shell">
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <span>●●●</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route
          path="/courses/:id"
          element={<CourseDetailScreen onSelect={selectCourse} />}
        />
        <Route
          path="/selection"
          element={<SelectionScreen selected={selected} toggle={toggle} />}
        />
        <Route
          path="/discount"
          element={<QuoteCalculatorScreen selected={selected} />}
        />
        <Route
          path="/quote"
          element={<RequestQuoteScreen selected={selected} />}
        />
        <Route path="/submitted" element={<QuoteSubmittedScreen />} />
        <Route path="/enquiry" element={<EnquiryScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isSplash && <BottomNav />}
    </div>
  )
}
