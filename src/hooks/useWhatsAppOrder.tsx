'use client'
import { useState } from "react";
import {    MdWhatsapp      }   from "react-icons/md";
import {    useSelector     }   from "react-redux";
import {    products        }   from "@/utils/data";
import { encodeStringToUrl } from "@/utils/fuctions";

interface DataMessage {
    message: any;
}

const useWhatsAppOrder = () => {

    const [message, setMessage]     =   useState<DataMessage | null>(null);      
    const quantities                =   useSelector((state:any) => state.shoppingCart.quantities);

    const handleClick=()=>{
        let total   =   0;
        let _html   =   "Hola, he realizado un pedido en la plataforma "+process.env.NEXT_PUBLIC_NAME+":\n\n";

        Object.entries(quantities).map((row)=>{
            const id            =   parseInt(row[0]);
            const quantity_:any =   row[1];
            const result:any    =   products.find(search=>search.id===id)
            _html   +=   "*"+result.name+"* x "+quantity_+" \n ";
        })
        
        const whatsApp  =   "https://wa.me/"+("573115000926")+"?text="+encodeStringToUrl(_html)+"&app_absent=0"
        window.open(whatsApp);
        
        
    }

    const Buttom=()=>{
        return  <div className=" cursor-pointer flex justify-center  items-center w-full px-4 linear mt-2 rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={handleClick}>
                    <MdWhatsapp className="w-8 h-8 mr-2"/> Pagar por whatsapp
                </div>
    }

    return {
        Buttom,    
    };
};

export default useWhatsAppOrder;
