"use client"

import Header from './components/homeContent/header';
import Statistics from './components/homeContent/statistics';
import AccountDetails from './components/homeContent/accountDetails';
import { GiNetworkBars } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { useState } from 'react';



const HomePage = () => {
  const [isStatShowing, setIsStatShowing] = useState(true);
  
  return (      
    <div>
      <Header />

      <div className="flex items-center gap- bg-white shadow-lg rounded-lg my-8 w-[10rem] mx-auto md:hidden">
        <div onClick={() => setIsStatShowing(true)} className={`${isStatShowing ? "bg-[#00c3f8]" : " "} w-1/2 rounded-xl p-2 flex justify-center cursor-pointer`}>
          <GiNetworkBars className={`${isStatShowing ? "text-white" : "text-gray-400"} `} />
        </div>
        <div onClick={() => setIsStatShowing(false)}  className={`${isStatShowing ? " " : "bg-[#00c3f8]"} w-1/2 rounded-xl p-2 flex justify-center cursor-pointer`}>
          <CiCreditCard1 className={`${isStatShowing ? "text-gray-400 " : " text-white"} `} />
        </div>

      </div>

      <div className="md:flex flex-col xl:flex-row items-cente gap-[4rem] xxl:gap-[4%] hidden">
        {/* FIRST COLUMN(LEFT) */}
        <Statistics />
      
        {/* SECOND COLUMN */}
        <AccountDetails />
        
      </div>

      <div className="flex flex-col xl:flex-row items-cente gap-[4rem] xxl:gap-[4%] md:hidden">
        {
          isStatShowing ? 
          <>
            <Statistics />
          </>
          :
          <>    
            <AccountDetails />
          </>
        }
      </div>
    </div>
  )
}

export default HomePage