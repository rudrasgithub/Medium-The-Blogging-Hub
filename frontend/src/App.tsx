import {BrowserRouter,Routes,Route} from "react-router-dom";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/SignUp";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { Publish } from "./pages/Publish";
import { Myblogs } from "./components/Myblogs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/publish" element={<Publish/>}/>
          <Route path="/myblogs" element={<Myblogs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
