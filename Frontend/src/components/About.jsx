import React from 'react'
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-900 dark:text-white">
                <h1 className="mt-24 text-4xl font-bold mb-4 text-center text-pink-600">About Our Online Book Store</h1>
                <p className="mt-4 text-lg mb-6 max-w-3xl text-center">
                    Welcome to our online book store, your one-stop platform for discovering and reading a vast collection of books.
                    Our application is designed to provide an exceptional reading experience, whether you're at home or on the go.
                </p>

                <div className="mt-4 bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                        <li>
                            <strong>Overview:</strong> Developed using the MERN stack (MongoDB, Express, React, Node.js) for a robust and scalable architecture.
                        </li>
                        <li>
                            <strong>User Authentication:</strong> Secure user registration and login functionality ensures your data stays protected.
                        </li>
                        <li>
                            <strong>Online Book Access:</strong> Browse and read books directly on the platform with ease.
                        </li>
                        <li>
                            <strong>Light and Dark Theme:</strong> Toggle between light and dark themes for a personalized and comfortable reading experience.
                        </li>
                        <li>
                            <strong>Responsive Design:</strong> Optimized for desktops, tablets, and smartphones, ensuring a seamless experience on all devices.
                        </li>
                    </ul>
                </div>

                <p className="mt-8 text-lg mt-6 max-w-3xl text-center">
                    Our mission is to make reading accessible and enjoyable for everyone. Thank you for choosing our platform. Happy reading!
                </p>
                <p className="mt-8">
                    Back to <Link to="/" className="text-pink-500 underline hover:text-pink-700">Home</Link>
                </p>
            </div>
        </>
    )
}

export default About