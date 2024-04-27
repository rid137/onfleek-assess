import Image from 'next/image';
import { RiVideoFill } from 'react-icons/ri';
import { FaClock } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SmallGraph from './charts/smallLineGraph';
import SpentTimeGraph from './charts/spentTimeGraph';
import LargeBarChart from './charts/barChart';

const Statistics = () => {
    return (
        <div className="w-[100%] xl:w-[68%]">
            {/* CARDS CONTAINER */}
            <div className="flex items-center justify-between gap-2 xxl:gap-4 w-full mb- hidde max-w-ful overflow-x-scroll sm:overflow-hidden ">
                {/* FIRST CARD */}
                <article>
                    <div className="flex ml-3 sm:ml- flex-col-reverse md:flex-row items-center justify-center gap-3 lg:gapy bg-white py-3 xxl:py-5 xxl:px-8 px-4 shadow-lg shadow-slate-300 rounded-lg cursor-default hover:bg-[#ff392b] group">
                    <div className="">
                        <SmallGraph />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='uppercase text-xs md:text-sm opacity-60 group-hover:text-white'>visitors</p>
                        <p className="md:text-normal text:sm xxl:text-md font-bold group-hover:text-white">10,320</p>
                    </div>
                    </div>
                </article>

                {/* SECOND CARD */}
                <article>
                    <div className="flex m-3 mb-5  flex-col-reverse md:flex-row items-center justify-center gap-3 lg:gapy bg-white py-3 xxl:py-5 xxl:px-8 px-4 shadow-lg shadow-slate-300 rounded-lg cursor-default hover:bg-[#ff392b] group">
                    <div className="">
                        <SmallGraph />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='uppercase text-xs md:text-sm opacity-60 group-hover:text-white'>customers</p>
                        <p className="md:text-normal text:sm xxl:text-md font-bold group-hover:text-white">4,628</p>
                    </div>
                    </div>
                </article>

                {/* THIRD CARD */}
                <article>
                    <div className="flex mr-3 sm:mr-  flex-col-reverse md:flex-row items-center justify-center gap-3 lg:gapy bg-white py-3 xxl:py-5 xxl:px-8 px-4 shadow-lg shadow-slate-300 rounded-lg cursor-default hover:bg-[#ff392b] group">
                    <div className="">
                        <SmallGraph />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className='uppercase text-xs md:text-sm opacity-60 group-hover:text-white'>orders</p>
                        <p className="md:text-normal text:sm xxl:text-md font-bold group-hover:text-white">2,980</p>
                    </div>
                    </div>
                </article>
            </div>

            <div className="w-full px-1 md:px-5 py-7 bg-lightGray mb-10 rounded-lg">
                <div className="flex items-center justify-between mb-5">
                    <p className="font-bold">Statistics</p>
                    <select 
                    name="" 
                    id=""
                    className='bg-white rounded-md pr-3 py-1 outline-primary text-primary'
                    >
                    <option value="">Year</option>
                    <option value="">2020</option>
                    <option value="">2024</option>
                    </select>
                </div>

              <div className="w-full mx-aut flex items-center justify-center text-sm sm:text-normal overflow-x-scrol"><LargeBarChart /></div>
            </div>

            <div className="flex flex-col md:flex-row items-cente justify-cente gap-6 w-full hidde">
                <div className="w-full md:w-1/2 bg-white py-3 shadow-lg rounded-lg h-[24]">
                    <p className="font-bold mb-4 ml-3">Spent time</p>

                    <div className="max-w-full mx-auto flex items-center justify-center">
                    <SpentTimeGraph />
                    </div>
                </div>
                <div className="w-full md:w-1/2 py-4 px-6 bg-white shadow-lg rounded-lg h-[24]">
                    <div className="flex items-center gap-4 mb-6">
                            <Image src={"/images/avatar4.jpg"} width={20} height={10} className='rounded-full size-14 object-cover' alt='avatar' />
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-bold">Lilly Donovan</p>
                                <p className="opacity-70 text-sm">Business trainer</p>
                            </div>
                        </div>
                            <p className="font-bold mb-8 w-[80%]">How to properly manage your personal budget?</p>

                            <div className="flex items-center justify-between w-full gap-4 mb-8">
                            <div className="flex items-center gap-2">
                                <RiVideoFill className='text-primary text-md' />
                                <p className='text-sm xxl:text-normal'>Video</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaClock className='text-[#00c3f8] text-md' />
                                <p className='text-sm xxl:text-normal'>15 mins</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <IoStar className='text-red-500 text-md' />
                                <p className='text-sm xxl:text-normal'>12 likes</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full">
                        <p className='sm:text-normal text:sm'>5 days ago</p>

                        <div className="flex items-center justify-center bg-primary text-white rounded-3xl py-1 sm:py-2 sm:px-6 px-3 gap-4 cursor-pointer">
                            <p className='sm:text-normal text:sm'>Connect</p>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
