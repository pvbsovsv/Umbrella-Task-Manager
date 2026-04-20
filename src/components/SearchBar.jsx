
import './SearchBar.css'

//Lucide

import {Search } from 'lucide-react'


function SearchBar() {
  return (
        <div className="searchbar">
            <Search size={18} strokeWidth={1.25} />
            <input type="text" placeholder='Search tasks...' aria-label="Search tasks"></input>
        </div>



    
  )
}

export default SearchBar