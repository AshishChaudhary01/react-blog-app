import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/frontend/Layout'
import AdminLayout from './components/backend/AdminLayout'
import Home from './pages/frontend/Home'
import AboutUs from './pages/frontend/AboutUs'
import ContactUs from './pages/frontend/ContactUs'
import Dashboard from './pages/backend/Dashboard'
import Students from './pages/backend/User'
import Settings from './pages/backend/Setting'
import OurServices from './pages/frontend/OurSevices'
import Users from './pages/backend/User'
import Blog from './pages/backend/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/contact-us' element={<ContactUs />}></Route>
            <Route path='/our-services' element={<OurServices />}></Route>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='' element={<Dashboard />}></Route>
            <Route path='blog' element={<Blog />}></Route>
            <Route path='user' element={<Users />}></Route>
            <Route path='setting' element={<Settings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
