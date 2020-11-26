import React , {useState} from 'react';
import {getMovies} from './services'
import {apiKey} from './utils/config' 

import './App.scss';

const Nav = ({selectedTab,handleHomeClick, handleSelectedTab}) => {
  const navbarTabs = "Trending,Top Rated,Popular,Upcoming".split(',')
  const categories ="Category,All,Action,Sci-Fi,Comedy,Mistery,Horror".split(',')

    return (
      
      <nav className="Nav w-full flex items-center px-4 bg-gray-600 text-white shadow-md">

        <span onClick={() => handleHomeClick()} className="brand-logo cursor-pointer text-2 xl font-bolder">MoviesMight</span>

        <input type="search" className="px-2 w-48 py-1 ml-3 rounded outline-none text-black text-opacity-75" placeholder="Search Movies"/>

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
    <div className="wrapper overflow-y-auto  flex-grow ">
      <div className="Movies grid text-white  px-3 py-4">

        {
          movies.results.map((movie , movieIndex) => <div className="shadow-xl rounded-lg cursor-pointer" key={`movieindex-${movieIndex}`}>
              <img className="rounded-md" src={imageBaseUrl+movie.poster_path} alt={ `movie-${movieIndex}`} />
              <p className="text-center text-lg font-extrabold text-blue-100 hover:text-blue-400">{movie.title}</p>
          </div>
          )
        }

      </div>
      <span className="pages w-32 text-center flex p-2 mx-auto bg-white">pagination 1234</span>
    </div>
  )
}

const HomePage = () =>{

  return(
    <main className="flex-grow flex flex-col items-center">
      <div className="brand-logo text-5xl text-center mt-32 text-indigo-900">Welcome To The <br />MoviesMight</div>
      <form>
        <input type="search" className="px-3 py-2 border-none shadow-md rounded-lg  focus:outline-none " placeholder="Search Movies"/>
      </form>
    </main>
  )
}


const App= () =>{
  const [movies, setMovies] = useState({})
  const [movieToShow, setMovieToShow] = useState("sds")
  const [fetching, setFetching] = useState(false)
  const [fetched, setFetched] = useState(false)
  const [selectedTab, setSelectedTab] = useState('')

  

  const handleSelectedTab = (tab) =>{
    console.log({movieToShow})

    setSelectedTab(tab)
    console.log({selectedTab})
    if(!fetching)setFetching(true)
    setMovieToShow('abc')
    console.log({movieToShow})
    if(selectedTab==='Top Rated') setMovieToShow('top_rated')
    console.log({movieToShow})
    let params=`movie/${movieToShow}`
    const query = `?api_key=${apiKey}`

    if(movieToShow==='trending') params=`${movieToShow}/all/day`
    if(fetched)setFetched(false)
    getMovies(params, query).then(response => setMovies(response.data))
                            .catch(console.log)
                            .finally(() => setFetched(true)) 
   
     
  } 

  const handleHomeClick = () =>{
    if(fetching)setFetching(false)
    if(selectedTab)setSelectedTab(false)

  }

  return(
    <div className="App  flex flex-col w-screen h-screen">
      <Nav selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} handleHomeClick={handleHomeClick} />
        
        {fetching===false? <HomePage /> :
          (fetched? <Movies movies={movies} /> : <center className="flex-grow text-white mt-24 text-3xl font-extrabold">Loading...<span className="spinner flex w-6 h-6 rounded-full"></span></center>)
        }

        <footer className="w-full flex items-center px-4 justify-between bg-gray-600 text-white shadow-md">
            
           <img src="./tmbd-footer.svg" className="w-32" alt="tmbd" />
            <span className="brand-logo cursor-pointer text-2 xl font-bolder ml-1">  &copy; MoviesMight</span>
        </footer>

    </div>
  ); 
 }

export default App;
