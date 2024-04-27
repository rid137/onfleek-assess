import { FaPlus } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { IoMdLock } from 'react-icons/io';
import { PiDotsSixLight } from 'react-icons/pi';
import { SiNetflix } from 'react-icons/si';

const AccountDetails = () => {
    return (
        <div className="w-[100%] xl:w-[28%] bg-lightGray rounded-lg p-8 flex flex-col items-center relativ">
            <div className="flex items-center justify-between gap- mb-10 w-full">
                <p className=""></p>
                <p className='text- font-bold'>Total sales</p>
                <FiEdit3 className='opacity-50 cursor-pointer' />
            </div>

            <div className="-mr-[2rem] md:-mr-[3rem] lg:-mr-[4rem] bg-primary p-3 text-white rounded-lg absolut right-0 top-20 self-end hidde">
              $10,600

            </div>

            <div className="bg-white shadow-md rounded-full p-8 flex justify-center items-center mb-10">
              <div className="bg-white p-8 rounded-full shadow-lg text-primary text-md font-bold">38%</div>
            </div>
          
            <div className="flex justify-between items-center w-full mb-10">
              <p className='font-bold text-'>My card</p>
              <p>..</p>
            </div>
            
            <div className="mb-10 w-64 h-40 bg-gradient-to-br from-[#00c3f8] via-[#3326ae] to-[#ffc005] rounded-lg p-6 relative overflow-hidden">
              {/* ATM Card Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-8 bg-gray-300 rounded"></div>
                  <div className="text-md uppercase text-white italic">visa</div>
                </div>

                <div className="flex justify-between items-center text-white my-4">
                  <p className='text-md tracking-[.3rem]'>....</p>
                  <p className='text-md tracking-[.3rem]'>....</p>
                  <p className='text-md tracking-[.3rem]'>....</p>                
                  <p className='text-sm'>9458</p>
                  
                </div>

                <div className="flex justify-between items-center text-white">
                  <p className='text-sm'>Alex Smith</p>
                  <p className='text-sm'>07 / 24</p>    
                </div>


                <div className="w-full h-8 bg-gray- rounded"></div>
              </div>
            </div>

            <div className="flex justify-between items-center w-full mb-10">
              <p className='font-bold text-'>Transaction</p>
              <div className="bg-red-600 p-[.4rem] sm:p-2 rounded-lg text-white">
                <FaPlus />
              </div>
            </div>

            <div className="flex justify-between items-center w-full mb-10">
              <div className="flex gap-3">
                <div className="bg-white text-md text-red-600 p-1 rounded-lg">
                  <PiDotsSixLight className='text-xl'/>
                </div>

                <div className="flex flex-col">
                  <p className='sm:text-normal text-sm'>Taxi</p>
                  <p className="text-sm opacity-60">01:21 PM</p>
                </div>
              </div>

              <div  className='sm:text-normal text-sm'>-$9,20</div>
            </div>


            <div className="flex justify-between items-center w-full mb-10">
              <div className="flex gap-3">
                <div className="bg-white text-md text-red-600 py-1 px-2 rounded-lg">
                  <IoMdLock className='text-lg'/>
                </div>

                <div className="flex flex-col">
                  <p className='sm:text-normal text-sm'>Shopping</p>
                  <p className="text-sm opacity-60">11:15 AM</p>
                </div>
              </div>

              <div className='sm:text-normal text-sm'>-$142,00</div>
            </div>

            <div className="flex justify-between items-center w-full mb-10">
              <div className="flex gap-3">
                <div className="bg-white text-md text-red-600 py-1 px-2 rounded-lg">
                  <SiNetflix  className='text-[1.6rem]'/>
                </div>

                <div className="flex flex-col">
                  <p className='sm:text-normal text-sm'>Netflix</p>
                  <p className="text-sm opacity-60">Jan 10, 2020</p>
                </div>
              </div>

              <div className='sm:text-normal text-sm'>-$24,99</div>
            </div>

          </div>
    )
}

export default AccountDetails
