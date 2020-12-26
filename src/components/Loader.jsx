import React from 'react'

function Loader() {
    return (
        <center className="flex-grow text-white mt-24 text-3xl font-extrabold">
        <span className="pulseLoader text-indigo-500">Loading</span>
        <span className="spinner  mx-auto flex w-8 h-8 rounded-full mt-2" />
      </center>
    )
    
}

export default Loader
