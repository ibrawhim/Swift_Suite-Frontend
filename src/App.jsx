import { Route, Routes } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import SignUp from './pages/SignUp'
import './App.css'
import ErrorPage from './pages/Errorpage'
import Loader from './pages/Loader'





function App() {

  return (
  <>
      
   
    <Routes>
      <Route path='/loader'  element={<Loader/>}/>
      <Route path='/signup'  element={<SignUp/>}/>
      <Route path='layout/*' element={<Rootlayout/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </>
  )
}

export default App
