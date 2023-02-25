import React, { useState } from 'react'
import { data } from '../data/data'
const Food = () => {
    const [foods, setFoods] = useState(data);
    // Filter by Food Items
    const FilterFood = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    // Filter by Price
    const FilterFoodByPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-4xl font-bold text-center' >Top Rated<span className=' text-orange-600'> Menu Items</span></h1>
            {/* filter row */}
            <div className='flex  flex-col lg:flex-row justify-between'>
                {/* filter type */}
                <div>
                    <p className=' font-bold text-gray-700'>
                        Filter Item
                    </p>
                    <div className=' flex justify-between flex-wrap'>
                        <button
                            onClick={() => setFoods(data)}
                            className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All</button>
                        <button
                            onClick={() => FilterFood('burger')}
                            className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Specials</button>
                        <button
                            onClick={() => FilterFood('pizza')}
                            className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Pizza</button>
                        <button
                            onClick={() => FilterFood('salad')}
                            className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Salad</button>
                        <button
                            onClick={() => FilterFood('chicken')}
                            className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Chicken</button>

                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p className=' font-bold text-gray-700'>Filter Price</p>
                    <div className=' flex justify-between  max-w-[390px] w-full'>
                        <button
                        onClick={()=>FilterFoodByPrice('$5')}
                        className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>$5</button>
                        <button
                                                onClick={()=>FilterFoodByPrice('$10')}

                        className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>$10</button>
                        <button
                                                onClick={()=>FilterFoodByPrice('$20')}

                        className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>$20</button>
                        <button
                                                onClick={()=>FilterFoodByPrice('$50')}

                        className=' m-1 border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>$50</button>

                    </div>

                </div>
            </div>

            {/* Food Items cards  */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className=' shadow-lg border rounded-lg hover:scale-105 duration-300'>
                        <img
                            className=' w-full h-[200px] object-cover rounded-t-lg'
                            src={item.image} alt={item.name} />
                        <div className=' justify-between flex py-4 px-2'>
                            <p className=' text-black-600 font-semibold'>
                                {item.name}

                            </p>
                            <p>
                                <span className=' text-orange-600 font-bold m-auto'>
                                    {item.price}
                                </span>
                            </p>
                        </div>

                    </div>
                )
                )
                }


            </div>
        </div>
    )
}

export default Food