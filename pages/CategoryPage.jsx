import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';
import Header from '../Components/Header';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className='flex flex-col w-full  items-center mt-[80px]'>
    <Header/>
    <div className='flex flex-row w-full max-w-[640px] justify-start items-center  '>
      
           <button
           className='border border-[2px] bg-gray-100 font-bold text-gray-700 hover:shadow-[3px_3px_2px_rgb(0,0,0,0.3)] transition-all px-[25px] py-[8px] mr-[15px]  rounded-md '
           onClick={() => navigate(-1)}>
               Back
           </button>
           <h2 className='text-2xl font-bold'>
               Blogs on <span className='underline'>{category}</span>
           </h2>
         
    
      
    </div>
    <Blogs/>
    <Pagination/>
    </div>
  )
}

export default CategoryPage
