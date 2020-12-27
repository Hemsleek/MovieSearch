import React from 'react'

function Nav( {selectedTab,handleHomeClick, handleSelectedTab, fetching}) {
    const navbarTabs = "Trending,Top Rated,Popular,Upcoming".split(',')
    const categories ="Category,All,Action,Sci-Fi,Comedy,Mistery,Horror".split(',')
  
      return (
        
        <nav className="Nav w-full flex items-center px-4 bg-gray-600 text-white shadow-md">
  
          <span onClick={() => handleHomeClick()} className="brand-logo cursor-pointer text-2 xl font-bolder">MoviesMight</span>
  
         { fetching &&
         <input type="search" className="px-2 w-48 py-1 ml-3 rounded outline-none text-black text-opacity-75" placeholder="Search Movies"/>
         }
  
          <span className="spacer flex-grow"></span>
  
          {
            navbarTabs.map((tab , tabIndex) => <span onClick={() => handleSelectedTab(tab)} className={`tab  cursor-pointer text-gray-300 hover:text-white ${selectedTab===tab? 'active-tab' : ''}`} key={`navTab-${tabIndex}`} >{tab}</span>)
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

export default Nav
