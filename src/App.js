import Footer from 'features/ui/footer';
import React from 'react'

// Component import
import NavBar from '../src/features/ui/header/index'

// CSS import
import './App.css';

// Import route files
import RouteFiles from './setup/app-route-manager/route/index'

function App() {
  console.log(window.innerWidth)
  return (
    <div className="App">
      <NavBar/>
      <RouteFiles />
      <Footer />
    </div>
  );
}

export default App;
