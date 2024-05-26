import Image from 'next/image';
import React from 'react';

const BannerGroup = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-3 gap-0">
                <div className="col-span-3 md:col-span-1 ">
                    <div className="w-full">
                        <div className='min-h-[25vh] bg-blue-800 relative overflow-hidden'>
                            <Image alt={String(process.env.NEXT_PUBLIC_NAME)} src="/img/store/banner1.jpg" width={800} height={800} className="transform hover:scale-105 transition duration-300 cursor-pointer"/>                            
                        </div>                        
                        <div className='min-h-[25vh] bg-blue-600 relative overflow-hidden'>
                            <Image alt={String(process.env.NEXT_PUBLIC_NAME)} src="/img/store/banner2.jpg" width={800} height={800} className="transform hover:scale-105 transition duration-300 cursor-pointer"/>                            
                        </div>                        
                    </div>                    
                </div>
                <div className="min-h-[25vh] md:min-h-[0] col-span-3 md:col-span-2 bg-green-500  relative overflow-hidden">
                    <Image alt={String(process.env.NEXT_PUBLIC_NAME)} src="/img/store/banner3.jpg" width={1200} height={1600} className="transform hover:scale-105 transition duration-300 cursor-pointer"/>                                                
                </div>                
            </div>
        </div>
    );
};

export default BannerGroup;
