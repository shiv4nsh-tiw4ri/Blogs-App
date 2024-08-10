import React from 'react'
import Header from '../Components/Header'
import {useNavigate,useLocation} from 'react-router-dom'
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';


const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    
    
    return (
    <div className='flex flex-col w-full  items-center '>
      <Header/>
      <div className='flex flex-row w-full max-w-[640px] justify-start items-center mt-[90px]'>
        <button
        className='border border-[2px] bg-gray-100 font-bold text-gray-700 hover:shadow-[3px_3px_2px_rgb(0,0,0,0.3)] transition-all px-[25px] py-[8px] mr-[15px]  rounded-md '
        onClick={() => navigation(-1)}
        >
          Back
        </button>
        <h2 className='text-2xl font-bold'>
            Blogs Tagged <span className='text-blue-700'>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>

    </div>
  )
}

export default TagPage
