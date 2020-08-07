// import React,{useState,useEffect} from 'react'
// import './App.css'
// import axios from 'axios'
// // import{ListGroup} from 'react-bootstrap'

// function Episode_List() {
//  const[posts,setPosts]=useState([]);
//  const[loading,setLoading]=useState(false);
//  const[currentPage,setCurrentPage]=useState(1);
//  const[postsPerPage,setPostsPerPage]=useState(10);

//    useEffect(()=>{
//        const fetchPost= async()=>{
//         setLoading(true);
//         const result=await axios.get(`https://rickandmortyapi.com/api/episode/`);
//         setPosts(result.data);
//         setLoading(false);
//        }

//        fetchPost();
//    },[]);
//   console.log(posts);



//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Episode_List
