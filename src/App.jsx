import React , {useState , useEffect} from 'react';
import {getMovies} from './services'
import {apiKey} from './utils/config' 

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
          navbarTabs.map((tab , tabIndex) => <span className={`tab  cursor-pointer text-gray-300 hover:text-white ${selectedTab===tab? 'active-tab' : ''}`} key={`navTab-${tabIndex}`} onClick={() => setSelectedTab(tab)}>{tab}</span>)
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
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

  console.log(movies.results);
  return(
    <div className="Movies grid overflow-y-auto text-white h-full px-3 py-4">
      {
        movies.results.map((movie , movieIndex) => <span className="shadow-xl rounded cursor-pointer" key={`movieindex-${movieIndex}`}>
            <img className="" src={imageBaseUrl+movie.poster_path} alt={ `movie-${movieIndex}`}/>
            <p className="text-center text-lg font-extrabold">{movie.title}</p>
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
    const params='trending/movie/day'
    const query = `?api_key=${apiKey}`
  
    getMovies(params, query).then(response => { setMovies(response.data);setFetching(false)})
             .catch(console.log)
             

  }, [])
  return(
    <div className="App  flex flex-col w-screen h-screen">
      <Nav />
    
        {
          fetching? <center>Loading...</center> : <Movies movies={movies} />
        }
    
    </div>
  ); 
 }

export default App;
