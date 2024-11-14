import {useState} from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({onSearch}) => {

    const [input,setInput]=useState("");
    const findContact=(event)=>{
        const value = event.target.value;
        setInput(value);
        onSearch(value);
    }
  return (
    <div className='SearchBox'>
        <p style={{marginBottom:0}}>Find contacts by name</p>
        <input type="text" className="search-input" value={input} onChange={findContact} />
    </div>
  )
}

SearchBox.propTypes={
    onSearch: PropTypes.func.isRequired
};

export default SearchBox