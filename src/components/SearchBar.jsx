
import './SearchBar.css'

//Lucide

import {Search } from 'lucide-react'


function SearchBar( {setSearchQuery}) {
  return (
        <div className="searchbar">
            <Search size={18} strokeWidth={1.25} />
            <input type="text" placeholder='Search tasks...' aria-label="Search tasks" onChange={(e)=>setSearchQuery(e.target.value)}></input>
        </div>



    
  )
}

export default SearchBar