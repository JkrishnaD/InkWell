import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/publish' element={<Publish/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
