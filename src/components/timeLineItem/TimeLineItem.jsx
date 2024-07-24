import React from 'react'

function TimeLineItem({day, month, text, url, name}) {
    return (
        <div className='flex flex-row justify-between items-end  relative '>
            <div className='bg-[#FFF1ED] text-center rounded-2xl  border-4 border-white absolute -top-10 drop-shadow-xl min-w-[63px] '>
                <div className='font-bold text-3xl py-2 '>{day}</div>
                <div className='py-0.5 bg-[#FF6437] text-white rounded-2xl text-sm px-1 ring-4 ring-white m-0'>{month}</div>
            </div>
            <div className='bg-[#F0F8FF] relative border-4 border-white rounded-2xl pr-6 pl-8 pb-6 ml-16 shadow-xl pt-16 w-[429px] '>
                <div className='text-[115px] opacity-70 tracking-tighter absolute bottom-[48%]   text-[#878F9B] font-serif' >
                    ,,
                </div>

                <div className='text-xs my-4 tracking-tighter text-[#424244] pr-2'>
                    {text}
                </div>
                <div className='font-bold text-[#878F9B] text-xs pr-2 tracking-tighter'>
                    {name}
                </div>
            </div>
            <div>
                <img src={url} alt='woodmart' className=' rounded-2xl shadow-xl w-[358px]' />
            </div>
        </div>
    )
}

export default TimeLineItem