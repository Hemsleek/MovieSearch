import Axios from 'axios'

// const baseUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=89945093d0ffc2f12815e442fa4d6933'

const baseUrl = 'https://api.themoviedb.org/3/'



// export const getMovies = () => Axios.get(baseUrl ,{ headers:header,params:param})
export const getMovies = (params, query) => Axios(baseUrl+params+query)