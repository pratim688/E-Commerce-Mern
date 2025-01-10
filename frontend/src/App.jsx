import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchSection from './utils/SearchSection'
//import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useEffect } from 'react'

import Context from './context';
import { useDispatch } from 'react-redux';
import { setUser } from './store/userSlice';
import SumerryApi from './common';
function App() {
  const dispatch = useDispatch();
  const userDataResponse = async()=>{
    const response = await axios.get(SumerryApi.userDetails.url,{withCredentials:true})
    if(response.data.success){
      dispatch(setUser(response.data.user))
    }
    
  }

  return (
    <>
      <Context.Provider value={{userData:userDataResponse}}>
      {/* <Navbar /> */}
      <Header/>
      
      <main className=''>
        <Outlet />
      </main>
      <Footer/>
      <ToastContainer />
      {/* <Footer/> */}
      </Context.Provider>
    </>
  )
}

export default App
