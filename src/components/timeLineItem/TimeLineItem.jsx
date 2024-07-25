import React from 'react'

function TimeLineItem({day, month, text, url, name}) {
    return (
        <div className='flex flex-col gap-5 items-center lg:gap-0 lg:flex lg:flex-row  lg:justify-between lg:items-end  relative  '>
            <div className=' bg-[#FFF1ED] text-center rounded-2xl  border-4 border-white lg:absolute lg:-top-10 drop-shadow-xl min-w-[63px] '>
                <div className='font-bold text-3xl py-2 text-[#282A2C] tracking-2'>{day}</div>
                <div className=' pb-0.5 bg-[#FF6437] text-white rounded-[10px] text-[15px] px-[10px] ring-4 ring-white tracking-tight'>{month}</div>
            </div>
            <div className='bg-[#F0F8FF] relative border-4 border-white rounded-[10px] pr-6 pl-8 pb-6 lg:ml-16  shadow-xl pt-16 lg:w-[429px] '>
                <div className='text-[115px]  opacity-50 tracking-tighter absolute top-0 font-bold leading-6 text-[#878F9B] font-serif' >
                    ,,
                </div>

                <div className='text-xs my-4 tracking-2 text-[#424244] pr-2 animate-timeLineAnimation '>
                    {text}
                </div>
                <div className='font-bold text-[#878F9B] text-xs pr-2 tracking-2 animate-timeLineAnimation'>
                    {name}
                </div>
            </div>
            <div>
                <img src={url} alt='woodmart' className=' rounded-[10px] shadow-xl lg:w-[358px] lg:h-[359px] w-full  ' />
            </div>
        </div>
    )
}

export default TimeLineItem