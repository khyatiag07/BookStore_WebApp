import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Explore() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-16">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-5xl">
            We're delighted to have you{" "}
            <span className="text-pink-600">here! :)</span>
          </h1>
          <p className="mt-12 text-xl">
            Welcome to our Explore section, where you can dive into a diverse collection of books across all genres. Whether you're into thrilling mysteries, heartwarming romances, or thought-provoking non-fiction, there's something here for every reader. Discover new releases, timeless classics, and hidden gems curated just for you. Start your reading journey today and find your next favorite book.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Explore