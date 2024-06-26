import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Blog } from './pages/Blog'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/publish' element={<Publish/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
