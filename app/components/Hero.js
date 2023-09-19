import React from "react";
import Image, { ImageProps } from "next/image";

function Hero() {
  return (
    <div className="flex w-full flex-col min-h-screen bg-[#0f0f0f] text-[#ffffff] p-40 ">


      <div className="flex flex-row w-full justify-between" >
        <div className="w-100">
          <Image
            className=""
            width={50}
            height={30}
            src="/logo.webp"
            alt="logo"
          ></Image>
        </div>


        <div className="flex flex-row gap-10 ">



        <div>
          <button>credit score check</button>
        </div>

        <div>
          <button>CRED pay</button>
        </div>
        
        </div>
      </div>

      <div className="flex flex-col items-center " >
       
       <div className="text-center" >
        <h1 className="text-[106px]" >
        rewards for paying <br/>
credit card bills.
        </h1>
       </div>


       <div className="mt-10 mb-10" >
        <h3>
        join 9M+ members who win rewards and cashbacks everyday
        </h3>
       </div>

       <div >
        <button className="p-5 bg-white text-black text-[25px] rounded-[40px] px-10 " >
        Download CRED
        </button>
       </div>



      </div>



    </div>
  );
}

export default Hero;
