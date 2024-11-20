import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchSection from './utils/SearchSection'
//import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      <div className="block md:hidden w-full px-4 mt-2">
        <SearchSection />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
