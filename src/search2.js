import "./search2.css"
import { useState } from 'react'

function Search(){
    const [search, setSearch] = useState("");
    return(
        <input type="text" name="search" placeholder="Search.." id="search" onChange={(e) => {setSearch(e.target.value)}}></input>
    )
    
}

export default Search;