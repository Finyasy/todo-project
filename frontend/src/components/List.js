import React, {useEffect, useState} from 'react';
import ListItem from "./ListItem"
import "./Style.css"


function List() {
  const[lists, setLists] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/lists")
      .then((r) => r.json())
      .then((lists) => setLists(lists));
  }, []);
 
  
  return (
    <div>
      <ul>
      {lists.map((list) => 
         <ListItem key ={list.id} 
          id ={list.id}
         title= {list.title}
                    />)}
      </ul>
    </div>


  )
}

export default List