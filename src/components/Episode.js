import React from 'react'

const Episode=({episode, loading}) => {
    if(loading){
        return <h2>Loading.....</h2>;
    }
    return  <ul className="list-group">
            {
                episode.map((item)=>(
                  <div key={item.id} className='list-group'>
                   <li className="list-group-item">{item.name}</li>
                   <li class="list-group-item">{item.air_date}</li>
                   <li class="list-group-item">{item.episode}</li>
                   </div>
                  ))
            }
             </ul>
        
    
};

export default Episode;
