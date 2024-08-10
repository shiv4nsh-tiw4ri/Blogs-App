import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'
import { ToastContainer } from 'react-toastify'
import {Route,Routes, useSearchParams,useLocation} from "react-router-dom";
import Home from './pages/Home';
import BlogPage from './pages/BlogPage'
import CategoryPage from './pages/CategoryPage'
import TagPage from './pages/TagPage'


const App = () => {
  const {fetchBlogPosts} = useContext(AppContext)
 
  const [searchParams, setSearchParama] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    
    if(location.pathname.includes("tags")){
      //iska mtlb tag wala page show krna hai 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>
  
  )
}

export default App
