// This file contain's home components from './features/ui....', & the home file goes to route file './setup/app-route-manager/' thats where set their routes  

import React from 'react'
import WelcomeComponent from 'features/ui/components/home-components/welcome-section'
import NewArrivalsComponent from 'features/ui/components/home-components/new-arrivals-section'


function Home() {
  return (
    <>
        <WelcomeComponent />
        <NewArrivalsComponent />
    </>
  )
}

export default Home