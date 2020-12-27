import React from 'react'

function Movies({movies}) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

    return (
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

export default Movies
