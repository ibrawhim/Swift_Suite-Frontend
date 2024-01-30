import Navbar from '../src/components/Navbar'
import Rootlayout from './layout/Rootlayout'
import SignUp from './pages/SignUp'
// import './App.css'



function App() {

  return (
    <>
      {/* <Navbar/> */}
      <SignUp/>
      <Routes>
      <Route path='layout/*' element={<Rootlayout/>}/>
    </Routes>
      
    </>
  )
}

export default App
