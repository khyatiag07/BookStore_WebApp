import React from 'react'

function Cards({ item }) {
    console.log(item)
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card bg-pink-50 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure className="w-full h-80 overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                        />
                    </figure>
                    <div className="card-body w-full h-40 overflow-auto">
                        <h2 className="card-title text-lg font-semibold">
                            {item.name}
                            <div className="badge badge-secondary ml-2">{item.category}</div>
                        </h2>
                        <p className="text-sm">{item.title}</p>
                        <div className="card-actions justify-between mt-2">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards











