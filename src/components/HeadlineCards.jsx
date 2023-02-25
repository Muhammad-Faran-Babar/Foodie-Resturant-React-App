import React from 'react'

const HeadlineCards = () => {
  return (
    <div id='' className='max-w-[1640px] mx-auto py-12 p-4 grid md:grid-cols-4 gap-5'>
          {/* cards */}


          <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='py-2 ml-2 pt-4 font-bold text-2xl'>Sun's Out Biryani</p>
                <p className='px-2 ml-2 py-1'>Karachi Style</p>
                <button className=' ml-2 mx-2 absolute bottom-4 border-white bg-white text-orange-500'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt="/" />
        </div>



        {/* cards */}
        <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='py-2 ml-2 pt-4 font-bold text-2xl'>Sun's Out Broast</p>
                <p className='px-2 ml-2 py-1'>Lahori Style</p>
                <button className=' ml-2 mx-2 absolute bottom-4 border-white bg-white text-orange-500'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt="/" />
        </div>

          {/* cards */}
          <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='py-2 ml-2 pt-4 font-bold text-2xl'>We deliver Desert's To</p>
                <p className='px-2 ml-2 py-1'>Style</p>
                <button className=' ml-2 mx-2 absolute bottom-4 border-white bg-white text-orange-500'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt="/" />
        </div>

          {/* cards */}
          <div className=' rounded-xl relative'>
            {/* overlay */}
            <div className=' absolute w-full h-full bg-black/20 rounded-xl text-white'>
                <p className='py-2 ml-2 pt-4 font-bold text-2xl'>Sun's Out Burger</p>
                <p className='px-2 ml-2 py-1'>Crunched</p>
                <button className=' ml-2 mx-2 absolute bottom-4 border-white bg-white text-orange-500'>Order Now</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[180px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt="/" />
        </div>

    </div>
  )
}
 
export default HeadlineCards