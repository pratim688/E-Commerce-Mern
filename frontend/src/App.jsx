import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchSection from './utils/SearchSection'
//import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useEffect } from 'react'
import SumerryApi from '../common';

function App() {
  const userDataResponse = async()=>{
    const response = await axios.get(SumerryApi.userDetails.url,{withCredentials:true})
    console.log(response.data)
  }
  useEffect(()=>{
    userDataResponse()
  },[])

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
      <ToastContainer />
      {/* <Footer/> */}
    </>
  )
}

export default App
