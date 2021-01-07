import React from 'react'

function Footer() {
    return (
        <footer className="w-full flex items-center px-4 justify-between bg-gray-600 text-white shadow-md">
            
        <img src="./tmbd-footer.svg" className="w-32" alt="tmbd" />
         <span className="brand-logo cursor-pointer text-2 xl font-bolder ml-1">  &copy; MoviesMight</span>
     </footer>
    )
}

export default Footer
