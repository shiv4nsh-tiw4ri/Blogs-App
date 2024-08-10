import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    //step 3 : consuming data 
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs")
    console.log(posts)
  return (
    <div className='flex flex-col w-full py-8'>
    
      {
        loading ? (<Spinner/>) : (
            posts.length === 0 ?
            (
                <div>
                    <p>No Post Found</p>
                </div>
            ) :
            (posts.map((post) => (
               <BlogDetails key={post.id} post={post}/>
            )))
            
        )
      }
     
    </div>
  )
}

export default Blogs
