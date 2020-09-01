import React, {useState,useEffect} from 'react';
import Header from './Components/ui/Header';
import CharacterGrid from './Components/characters/CharacterGrid';
import Search from './Components/ui/Search';

import './App.css'; 
import axios from 'axios';

const App = () =>  {
  const [items, setItems] =useState([])
  const [isLoading, setIsLoading] =useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
     axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
     .then(res => {
       setItems(res.data)
       setIsLoading(false)
     })
    // const fetchItems = async () => {
    //   const result = await axios(`https://www.breakingbadapi.com/api/characters`)

    //   setItems(result.data)
    //   console.log(items)
    // }
    // fetchItems();
  },[query])

  return ( 
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid  isLoading={isLoading} items={items}/>
        
    </div>
  );
}

export default App;
