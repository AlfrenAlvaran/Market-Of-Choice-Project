import React from 'react'
import { Button } from './components/ui/button'
import { Navigate, Route, Routes } from 'react-router-dom'
import AutLayout from './layouts/AutLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to="sign-in" />}  />
      <Route element={<AutLayout />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
