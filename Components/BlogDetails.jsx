import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import {NavLink} from 'react-router-dom';

const BlogDetails = ({post}) => {
  

  return (
    <div className='flex flex-col w-full items-center gap-y-[20px]'>
    <div className='max-w-[640px] '>
      <NavLink to={`/blog/${post.id}`}>
        <span className='text-xl font-bold'>{post.title}</span>
      </NavLink>
      <p className='text-[15px] mt-2 '>
        By
        <span className='italic'> {post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-[15px]'>Posted on {post.date} </p>
      <p className='py-3'>{post.content}</p>
      <div className='text-[13.5px] font-bold text-blue-700 mb-[35px] '>
         {post.tags.map((tag,index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='mr-[7px] underline ' >{`#${tag}`}</span>
            </NavLink>
         ))}
      </div>
    </div>
    </div>
  )
}

export default BlogDetails
