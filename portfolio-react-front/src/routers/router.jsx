import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/404'
import Admin from '../pages/Admin'

export default function Router() {
    const { user } = useContext(UserContext);

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {user && <Route path="/admin" element={<Admin />} />}
              <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer
              name="Leon Gallet"
              address="1 rue de la paix"
              postalCode="75000"
              city="Paris"
              email="leon.gallet@gmail.com"
              phone="+33 6 12 34 56 78"
          />
      </BrowserRouter>
  )
}