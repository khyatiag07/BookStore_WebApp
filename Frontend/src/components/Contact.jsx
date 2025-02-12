import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-white p-4">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full max-w-md bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                {/* Name */}
                <div className="mb-4">
                    <label className="block text-md font-xl mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-md font-xl mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label className="block text-md font-xl mb-1">Message</label>
                    <textarea
                        placeholder="Enter your message"
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                        {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-200"
                >
                    Submit
                </button>
            </form>

            <p className="mt-12">
                Back to <Link to="/" className="text-pink-500 underline hover:text-pink-700">Home</Link>
            </p>
        </div>
    );
}

export default Contact;