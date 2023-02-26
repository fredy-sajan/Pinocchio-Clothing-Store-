// import Hooks
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import files to set route
const Home = lazy(()=> import('../../../pages/home/index'))

function RouteFiles() {
  return (
    <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Pinocchio-Clothing-Store-/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default RouteFiles