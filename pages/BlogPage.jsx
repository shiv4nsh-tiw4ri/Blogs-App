import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading,loading} = useContext(AppContext);
    
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
         setLoading(true);
         let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
         console.log("URL is:")
         console.log(url)
         try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
         }
         catch(error){
            console.log("Error in blog Id call")
            setBlog(null);
            setRelatedBlogs([]);
         }
         setLoading(false);
    }

    useEffect(() => {
          if(blogId){
            fetchRelatedBlogs();
          }
    },[location.pathname])

  return (
    <div className='flex flex-col w-full items-center mt-[80px]'>
      <Header/>
      <div className='flex  w-full max-w-[640px] justify-start'>
        <button
        className='border border-[2px] bg-gray-100 font-bold text-gray-700 hover:shadow-[3px_3px_2px_rgb(0,0,0,0.3)] 
        transition-all px-[25px] py-[8px] mr-[15px]  rounded-md mb-[20px]'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ? 
        (<p>Loading</p>) 
        :
        (
            blog ? 
            (<div>
               <BlogDetails post={blog}/>
               <h2 className='text-3xl font-bold mb-[35px]'>Related Blogs</h2>
               {
                 relatedBlogs.map((post) =>(
                    <div key = {post.id}>
                       <BlogDetails post={blog}/>
                    </div>
                 )
                 )
               }
             </div>) 
            : 
            (<p>No Blog Found</p>)
        )
      }
    </div>
  )
}

export default BlogPage
