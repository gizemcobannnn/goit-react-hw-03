import {useState} from 'react'

const SearchBox = () => {

    const [input,searchInput]=useState("");
    const findContact=(event)=>{
        searchInput(event.target.value);
    }
  return (
    <div className='SearchBox'>
        <p>Find contacts by name</p>
        <input type="text" className="search-input" />
    </div>
  )
}

export default SearchBox