import { createContext, useState } from "react"
import { baseUrl } from "../baseUrl";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

//step 1
export const AppContext = createContext();

export default function AppContextProvider({children}){
  const [loading, setLoading]  = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  //data filling

  const fetchBlogPosts = async (page = 1, tag=null, category) => {
     setLoading(true);
     let url = `${baseUrl}?page=${page}`;
     if(tag){
      url += `&tag=${tag}`;
     }
     if(category){
      url += `&category=${category}`;
     }
     try{
        const result = await fetch(url);
        const data = await result.json();
        if(!data.posts || data.posts.length === 0)
          throw new Error("Something went wrong");
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
     }
     catch(error){
       toast.error(`can't fetch data`);   
       setPage(1);
       setPosts([]);
       setTotalPages(null);
    }
    setLoading(false )
  }
  
  //to handle page change when next and previous button are clicked
  function handlePageChange(page){
    navigate({search: `?page=${page}`});
    setPage(page);
    console.log("AppContext me hoon")
    console.log(page);
    
  } 

  const value = {
    posts,
    setPosts,
    loading, 
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange
  };
  

  //step 2
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}