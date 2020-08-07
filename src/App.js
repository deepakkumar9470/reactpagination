import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Episode from './components/Episode'
import Pagination from './components/Pagination'

import './App.css'

 const App=()=> {
 const[episode,setEpisode]=useState([]);
 const[loading,setLoading]=useState(false);
 const[currentPage,setCurrentPage]=useState(1);
 const[postsPerPage,setPostsPerPage]=useState(5);
 const[search,setSearch]=useState('');

   useEffect(()=>{
       const fetchPost= async()=>{
        setLoading(true);
        const result= await axios.get(`https://rickandmortyapi.com/api/episode/?name=${search}`);
        setEpisode(result.data.results);
        setLoading(false);
       }

       fetchPost();
   },[search]);
  console.log(episode);
   // Part of Next and Prev page and curPage
  const indexofLastPost=currentPage * postsPerPage;
  const indexofFirstPost=indexofLastPost - postsPerPage;
  const currentPost= episode.slice(indexofFirstPost, indexofLastPost);
  
  const paginate=(pageNo)=>{
    setCurrentPage(pageNo);
  }


  return (
        <div className='container mt-5'>
       <h4 className='text-primary'>Search</h4> <input class="form-control" placeholder="Username" aria-label="Episode Name" type='text' value={search} onChange={(event)=>setSearch(event.target.value)}/>
        <h2 className="text-dark mb-3 text-center ">The Rick and Morty</h2>
  
        <Episode episode={currentPost} loading={loading}/>
        <Pagination postsPerPage={postsPerPage} totalEpisode={episode.length} paginate={paginate}/>
          
        </div>
      );
}

export default App;
