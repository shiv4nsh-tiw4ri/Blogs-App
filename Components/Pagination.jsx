import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { ToastContainer } from 'react-toastify';

const Pagination = () => {
  const {page,totalPages,handlePageChange} = useContext(AppContext);
  
  return (
    <div className='flex  w-full justify-center items-center w-full border  shadow-[0_-2px_5px_1px_rgba(0,0,0,0.2)]  py-1 fixed bottom-0 bg-gray-100'>
      
         <div className='flex flex-row w-full max-w-[640px] justify-between py-2'>
          <div className='flex gap-x-2'>
          { page > 1 &&
               (<button 
               className='rounded-md border-2 px-4 py-1 hover:shadow-[3px_3px_2px_rgb(0,0,0,0.3)]'
               onClick={() => handlePageChange(page-1)}
               >
                 Previous
               </button>)
           } 
           {
             page < totalPages &&
             (<button
             className='rounded-md border-2 px-4 py-1 hover:shadow-[3px_3px_2px_rgb(0,0,0,0.3)]'
             onClick={() => handlePageChange(page+1)}
             >
              Next
             </button>)
           }
          </div>
          
             <p className='font-bold text-sm'>
               Page <span>{page}</span> of <span>{totalPages}</span>
             </p>
         </div>
      
    </div>
  )
}

export default Pagination
