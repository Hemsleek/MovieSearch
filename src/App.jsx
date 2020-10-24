import React from 'react';

import './App.scss';

const Nav = () => {
  const navbarTabs = "IMBD Rating,Latest,Popular,Most Downloaded".split(',')
  const categories ="Category,All,Action,Sci-Fi,Comedy,Tragedy,Horror".split(',')

    return (
      
      <nav className="Nav w-full flex items-center h-16 px-4 bg-gray-600 text-white">

        <span className="brand-logo cursor-pointer text-2 xl font-bolder">MoviesMight</span>

        <input type="search" className="px-2 w-48 py-1 ml-3 rounded outline-none text-black text-opacity-75" />

        <span className="spacer flex-grow"></span>

        {
          navbarTabs.map((tab , tabIndex) => <span className="tab ml-3 cursor-pointer hover:text-gray-400" key={`navTab-${tabIndex}`} >{tab}</span>)
        }

        <span className="spacer flex-grow"></span>
        <select defaultValue="Category" className="categories outline-none px-4 py-2 bg-white  text-black text-opacity-75 rounded">
          
          {
            categories.map((category, categoryIndex) => 
            <option key={`category-${categoryIndex}`}  
              disabled={categoryIndex===0? true : false} >

              {category}

            </option>)
          }
        </select>

      </nav>
    )
}

const App= () =>{


 return(
    <div className="App bg-gray-200 flex flex-col w-screen h-screen">
      <Nav />
     
      <div className="Screen">

      </div>
    </div>
  ); 
 }

export default App;
