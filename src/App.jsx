import { useState } from 'react'
import './App.css'

//components
import Sidenav from './components/Sidenav'

function App() {

  return (
    <>
      <div className="app-container">

        <div className="grid-sidenav">
          {/* sidenav goes here */}

          <Sidenav />

        </div>

        <div className="grid-center">
          {/* center panel goes here */}
        </div>


        <div className="grid-right">
          {/* right panel goes here */}
        </div>
      </div>
    </>
  )
}

export default App
