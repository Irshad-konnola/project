import React, { useState } from 'react'
import Images from './components/Images'
import NavBar from './components/NavBar'
import SearchField from './components/SearchField'
import useAxios from './hooks/useAxios'
import { createContext } from 'react'
import About from './components/About'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'

export const ImageContext=createContext();
function App() {
  const [searchImage,setSearchImage]=useState('');
  const {response,isLoading,error,fetchData}=useAxios(`https://api.unsplash.com/search/photos?page=1&per_page=12&client_id=6z8POqRgiZhHTPrJ4R0FyBXaZLIeHvml8q8ajwhkAiE`);
  console.log(response);
  const value={
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  return (
  <ImageContext.Provider value={value}>
    
       <NavBar>
       
         <SearchField/>
       </NavBar>
       <BrowserRouter>
           <ul>
             <li>
               <Link to="about"> >> About</Link>
             </li>
           </ul>
           <Routes>
             <Route path="/about" element={<About/>}></Route>
           </Routes>
           </BrowserRouter>
       <Images/>
       
      </ImageContext.Provider>
     
  )
}

export default App;