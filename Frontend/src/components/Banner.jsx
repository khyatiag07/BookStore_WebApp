import React from 'react'
import banner from "../../public/Banner.jpg";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 gap-24 pt-10 my-0 dark:text-white dark:bg-gray-900">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 my-10">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            Discover a world of stories, knowledge, and imagination here. Whether you're a passionate reader, a curious explorer, or searching for the perfect gift, we have something for everyone.
                        </p>

                        <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow bg-transparent focus:outline-none dark:placeholder-gray-400" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn mt-6 btn-secondary dark:bg-pink-600 dark:text-white dark:hover:bg-pink-800">Get Started</button>

                </div>
                <div className="order-1 w-full md:w-1/2 mt-2">
                    <img src={banner} className="w-92 h-92 my-10 rounded-xl dark:brightness-50" alt="" />
                    
                </div>
            </div>
        </>
    )
}

export default Banner