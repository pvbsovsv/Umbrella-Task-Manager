
//style
import './App.css'

//components
import Sidenav from './components/Sidenav'
import Dashboard from './components/Dashboard'
import RightNav from './components/RightNav'

function App() {

  return (
    <>
      <div className="app-container">

        <div className="grid-sidenav">

          <Sidenav />

        </div>

        <div className="grid-center">
          <Dashboard />
        </div>


        <div className="grid-right">
          <RightNav />
        </div>
      </div>
    </>
  )
}

export default App
