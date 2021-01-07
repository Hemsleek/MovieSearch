import React , {useState} from 'react';
import {getMovies} from './services'
import {apiKey} from './utils/config' 

import Loader from './components/Loader';
import Movies from './components/Movies'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer';

import './App.scss';

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
      <Nav fetching = {fetching} selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} handleHomeClick={handleHomeClick} />
        
        {fetching===false? <HomePage /> :
          (fetched? <Movies movies={movies} /> : <Loader />)
        }

      <Footer />

    </div>
  ); 
 }

export default App;
