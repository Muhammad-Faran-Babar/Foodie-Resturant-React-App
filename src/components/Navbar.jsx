import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md';
import { AiFillTag } from 'react-icons/ai';
import { FaWallet, FaUserFriends } from 'react-icons/fa';
import { } from 'react-icons/tb';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='flex justify-between p-4 m-auto max-w-[1640px] items-center'>
            {/* left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-xl px-2 sm:text-3xl lg:text-4xl'>
                Fo͞odē  <span className=' font-bold'>Restoran</span>
                </h1>
                <div className='hidden rounded-full p-1 text-[14px] lg:flex items-center bg-gray-200 '>
                    <p className='text-white rounded-full  bg-black p-2'>Delivery</p>
                    <p className=' p-2'>Pickup</p>
                </div>
            </div>
            <div className='rounded-full bg-gray-200 items-center flex px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={30} />
                <input className=' bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Items' />
            </div>
            {/* cart */}
            <button className=' bg-black  text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={30} className=' mr-2' /> Cart
            </button>
            {/* mobile view */}
            {/* overlay */}
            {nav ? <div className=' bg-black/80 fixed w-full z-10 h-screen top-0 left-0'>
            </div> : ''}

            {/* drawer */}
            <div className={nav?' duration-300 w-[300px] h-screen bg-white  fixed top-0 left-0 z-10 ':' duration-300 w-[300px] h-screen bg-white  fixed top-0 left-[-100%] z-10 '}>
                <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer ' />
                <h1 className=' text-2xl p-4'>Fo͞odē <span className=' ml-[2px] font-bold'>Restoran</span></h1>
                <nav>
                    <ul className=' text-gray-800 p-4 flex flex-col'>
                        <li className='py-4  flex text-xl '>
                            <TbTruckDelivery size={30} className='  mr-4' /><span className='font-semibold'>Order</span>
                        </li>
                        <li className='py-4  flex text-xl '>
                            <MdFavorite size={30} className='  mr-4' /><span className='font-semibold'>Favorites</span>
                        </li>
                        <li className='py-4  flex text-xl '>
                            <FaWallet size={30} className='  mr-4' /><span className='font-semibold'>Wallet</span>
                        </li>
                        <li className='py-4  flex text-xl '>
                            <MdHelp size={30} className='  mr-4' /><span className='font-semibold'>Help</span>
                        </li>
                        <li className='py-4  flex text-xl '>
                            <AiFillTag size={30} className='  mr-4' /><span className='font-semibold'>Promotions</span>
                        </li>
                        <li className='py-4  flex text-xl '>
                            <BsFillCartFill size={30} className='  mr-4' /><span className='font-semibold'>Best One</span>
                        </li>
                        <li className='py-4  flex text-xl '>
                            <FaUserFriends size={30} className='  mr-4' /><span className='font-semibold'>Invite Friends</span>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}

export default Navbar