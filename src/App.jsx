import React , {useState , useEffect} from 'react';
import {getMovies} from './services'

import './App.scss';

const Nav = () => {
  const [selectedTab, setSelectedTab] = useState('Trending')
  const navbarTabs = "Trending,Top Rated,Popular,Upcoming".split(',')
  const categories ="Category,All,Action,Sci-Fi,Comedy,Mistery,Horror".split(',')

    return (
      
      <nav className="Nav w-full flex items-center h-16 px-4 bg-gray-600 text-white shadow-md">

        <span className="brand-logo cursor-pointer text-2 xl font-bolder">MoviesMight</span>

        <input type="search" className="px-2 w-48 py-1 ml-3 rounded outline-none text-black text-opacity-75" />

        <span className="spacer flex-grow"></span>

        {
          navbarTabs.map((tab , tabIndex) => <span className={`tab  cursor-pointer hover:text-gray-400 ${selectedTab===tab? 'active-tab' : ''}`} key={`navTab-${tabIndex}`} >{tab}</span>)
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

const Movies = ({movies}) => {
  
  return(
    <div className="Movies grid overflow-y-auto">
      {
        movies.results.map((movie , movieIndex) => <span className="" key={`movieindex-${movieIndex}`}>
            <img className="" src="" alt=""/>
            <p>{movie.title}</p>
        </span>
        )
      }
    </div>
  )
}
const App= () =>{
  const [movies, setMovies] = useState({})
  const [fetching, setFetching] = useState(true)

  useEffect(() => {

    getMovies().then(response => {console.log(response.data); setMovies(response.data);setFetching(false)})
             .catch(console.log)
             

  }, [])
  return(
    <div className="App  flex flex-col w-screen h-screen">
      <Nav />
     
      <div className="Screen text-white">
        {
          fetching? <center>Loading...</center> : <Movies movies={movies} />
        }
      </div>
    </div>
  ); 
 }

export default App;
