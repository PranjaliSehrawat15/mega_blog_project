import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
return !loading ? (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#3c738a]/20 backdrop-blur-lg border border-white/20 shadow-md">
    <div className="w-full max-w-[1280px] flex flex-col min-h-screen rounded-2xl overflow-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
) : null
}

export default App