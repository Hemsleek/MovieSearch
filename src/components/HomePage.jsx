import React from "react";

function HomePage() {
  return (
    <main className="flex-grow flex flex-col items-center">
      <div className="brand-logo text-5xl text-center mt-32 text-indigo-900">
        Welcome To The <br />
        MoviesMight
      </div>
      <form>
        <input
          type="search"
          className="px-3 py-2 border-none shadow-md rounded-lg  focus:outline-none "
          placeholder="Search Movies"
        />
      </form>
    </main>
  );
}

export default HomePage;
