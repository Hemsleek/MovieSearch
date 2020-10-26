import Axios from 'axios'

const baseUrl = 'https://movies-tvshows-data-imdb.p.rapidapi.com/'

const header = {
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"movies-tvshows-data-imdb.p.rapidapi.com",
    "x-rapidapi-key":"15d51ea7a1msh58e1f10b4118a11p1f45aejsn95ca9d60dcc4",
    "useQueryString":true  
}

const param = {
    "page":"1",
    "type":"get-trending-movies"
    }

// export const getMovies = () => Axios.get(baseUrl ,{ headers:header,params:param})
export const getMovies = () => Axios({
    
    "method":"GET",
    "url":"https://movies-tvshows-data-imdb.p.rapidapi.com/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"movies-tvshows-data-imdb.p.rapidapi.com",
    "x-rapidapi-key":"15d51ea7a1msh58e1f10b4118a11p1f45aejsn95ca9d60dcc4",
    "useQueryString":true
    },"params":{
    "page":"1",
    "type":"get-trending-movies"
    }
    })