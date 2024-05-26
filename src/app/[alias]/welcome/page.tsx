import Image from "next/image";
import Link from "next/link";
import React from "react";

const Web=()=>{
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white-100 6">        
          <div>
              <Image src={"/img/layout/ivoolve-food-programandoweb-burger.webp"} alt="Programandoweb" className="w-64 mx-auto" width={300} height={300}/>                
          </div>
          <div className={`mx-[56px] mt-[30px] flex items-center`}>
              <div className="text-center w-full mb-4 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
                {String(process.env.NEXT_PUBLIC_NAME)} <span className="font-medium">{String(process.env.NEXT_PUBLIC_NAME2)}</span>
              </div>
          </div>
          <p className="text-center text-gray-600 mt-2">
              Evoluciona tu experiencia gastronómica
          </p>
          <Link href="/web/mesas" className="px-5 linear mt-16 rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Comienza ahora    
          </Link>        
        </div>
      )
}
export default Web;