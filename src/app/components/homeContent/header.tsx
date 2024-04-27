import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { IoIosNotifications } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';


const Header = () => {
    return (
        <div className="flex justify-between items-center mb-10 mt-3 hidde">
          <div className="flex items-center justify-center gap-10">
            <div className="bg-lightGray rounded-md items-center gap-3 px-3 py-2 hidden md:flex">
              <IoSearchOutline className='text-primary' />
              <input 
                type="text" 
                placeholder='Search'
                className='bg-lightGray outline-none w-[20rem]'
              />
            </div>

            <p className='md:hidden text-md font-bold'>logo</p>

            <p className='cursor-pointer hover:text-primary lg:block hidden'>Feedback</p>

            <p className='cursor-pointer hover:text-primary lg:block hidden'>Contact</p>

            <p className='cursor-pointer hover:text-primary lg:block hidden'>Help</p>

          </div>

          <div className="flex items-center gap-2">
            <div className=" p-1 rounded-xl cursor-pointer relative" >
              <GoDotFill className='text-red-500 absolute right-1' />

              <IoIosNotifications className='text-[1.5rem] text-[#ccc]' />
            </div>

            <Image src={"/images/avatar4.jpg"} width={20} height={10} className='rounded-lg size-7 object-cover cursor-pointer' alt='avatar' />

          </div>
        </div>
    )
}

export default Header
