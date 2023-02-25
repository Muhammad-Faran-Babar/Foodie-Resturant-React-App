import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
    <div className=' max-w-[1640px] m-auto py-12 px-4'>
        <h1 className=' font-bold text-4xl text-center'> Top <span className=' text-orange-500'>Rated Menu</span>   Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-4'>
            {categories.map((items, index)=>(
                <div key={index} className='bg-gray-100 rounded-xl p-4 flex justify-between items-center hover:scale-105 duration-300'>
                    <h2 className=' font-bold sm:text-xl'>{items.name}</h2>
                    <img 
                    className='w-20'
                    src={items.image} alt={items.name}/>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Category