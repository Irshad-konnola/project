import React from "react"
import { useState } from "react";
import { ImageContext } from "../App";
import { useContext } from "react";
const SearchField = () => {

  const [searchValue,setSearchValue]=useState('');

  const {fetchData,setSearchImage}=useContext(ImageContext);

  const handleInputChange=(e)=>{
    setSearchValue(e.target.value);

  }

    const handleButtonSearch=()=>{
      fetchData(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&per_page=12&client_id=6z8POqRgiZhHTPrJ4R0FyBXaZLIeHvml8q8ajwhkAiE`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  const handleEnterSearch=e=>{
    if(e.key==='Enter') {
      fetchData(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&per_page=12&client_id=6z8POqRgiZhHTPrJ4R0FyBXaZLIeHvml8q8ajwhkAiE`)
      setSearchValue("");
      setSearchImage(searchValue); 
    }
  }
  return (
    <div className="flex">
      <input 
      className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
      type="search" 
      placeholder="Search anything"
      value={searchValue}
      onChange={handleInputChange}
      onKeyDown={handleEnterSearch}
      />
      <button  className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br" onClick={handleButtonSearch}>Search</button>
    </div>
  )
}

export default SearchField