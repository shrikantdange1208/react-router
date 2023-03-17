import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import About from './components/pages/About'
import Error from './components/pages/Error'
import { SharedLayout } from './components/pages/SharedLayout'
import SingleProduct from './components/pages/SingleProduct'
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import { SharedProductLayout } from './components/SharedProductLayout'
import { ProtectedRoute } from './components/pages/ProtectedRoute'

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="login" element={<Login setUser={setUser} />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
