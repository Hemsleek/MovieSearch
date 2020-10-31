import React , {useState , useEffect} from 'react';
import {getMovies} from './services'
import {apiKey} from './utils/config' 

import './App.scss';

const Nav = ({selectedTab, handleSelectedTab}) => {
  const navbarTabs = "Trending,Top Rated,Popular,Upcoming".split(',')
  const categories ="Category,All,Action,Sci-Fi,Comedy,Mistery,Horror".split(',')

  

    return (
      
      <nav className="Nav w-full flex items-center h-16 py-2 px-4 bg-gray-600 text-white shadow-md">

        <span className="brand-logo cursor-pointer text-2 xl font-bolder">MoviesMight</span>

        <input type="search" className="px-2 w-48 py-1 ml-3 rounded outline-none text-black text-opacity-75" />

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

const Movies = ({movies}) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

  return(
    <div className="wrapper overflow-y-auto mb-5 flex-grow ">
      <div className="Movies grid text-white  px-3 py-4">
        {
          movies.results.map((movie , movieIndex) => <span className="shadow-xl rounded cursor-pointer" key={`movieindex-${movieIndex}`}>
              <img className="" src={imageBaseUrl+movie.poster_path} alt={ `movie-${movieIndex}`}/>
              <p className="text-center text-lg font-extrabold text-blue-100 hover:text-blue-400">{movie.title}</p>
          </span>
          )
        }

      </div>
      <span className="pages w-32 text-center flex p-2 mx-auto bg-white">pagination 1234</span>
    </div>
  )
}

const App= () =>{
  const [movies, setMovies] = useState({})
  const [fetching, setFetching] = useState(true)
  const [selectedTab, setSelectedTab] = useState('Trending')
  const [movieToShow, setMovieToShow] = useState('trending')

  const handleSelectedTab = (tab) =>{
    
    if(tab === 'Top Rated'){
      const reformedTab = "top_rated"
      setMovieToShow(reformedTab) 
      setSelectedTab(tab)

      return null
    }
      setMovieToShow(tab.toLowerCase())
      setSelectedTab(tab)
  } 
  useEffect(() => {
    
    let params=`movie/${movieToShow}`
    const query = `?api_key=${apiKey}`

    if(movieToShow==='trending') params=`${movieToShow}/all/day`
    setFetching(true)
    getMovies(params, query).then(response => setMovies(response.data))
                            .catch(console.log)
                            .finally(() => setFetching(false))

  }, [movieToShow])
  return(
    <div className="App  flex flex-col w-screen h-screen">
      <Nav selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
    
        {
          fetching? <center className="text-white mt-24 text-3xl font-extrabold">Loading...</center> : <Movies movies={movies} />
        }
    </div>
  ); 
 }

export default App;
