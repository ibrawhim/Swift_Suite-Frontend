import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Rootlayout from './layout/Rootlayout'
import SignUp from './pages/SignUp'
import './App.css'





function App() {

  return (
    <>
      
   
      <Routes>
        <Route path='/signup'  element={<SignUp/>}/>
      {/* <Route path='/signup' element={<SignUp/>}/> */}
      <Route path='layout/*' element={<Rootlayout/>}/>
    </Routes>
      
    </>
  )
}

export default App
