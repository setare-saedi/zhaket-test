import React from 'react'

function About() {
  return (
    <div>
        <div className='flex flex-row justify-between items-end mx-20 relative'>
          <div className='bg-[#FFF1ED] w-fit text-center rounded-2xl border-solid border-4 border-white absolute -top-10 drop-shadow-xl '>
            <div className='font-bold text-3xl py-2 '>24</div>
            <div className='pb-1 bg-[#FF6437] text-white rounded-2xl text-sm px-3 border-solid ring-4 ring-white m-0'>فروردین</div>
          </div>

          <div className='bg-[#F0F8FF] relative border-4 border-white rounded-2xl px-8 pb-6 ml-16 shadow-xl pt-16 '>
            <div className='text-[115px] opacity-70 tracking-tighter absolute bottom-[48%] text-[#878F9B] font-serif' >
            ,,
            </div>

            <div className='text-xs my-4 tracking-tighter text-[#424244]'>
              با استفاده از سرویس گارد ژاکت قادر خواهید بود برای محصولات خود در ژاکِت لایسنس تعریف کرده و از نصب‌های متعدد، کپی و انتشار نسخه نال
            </div>
            <div className='font-bold text-[#878F9B] text-xs'>علیرضا محمدی فروشنده ژاکت</div>
          </div>
          <div>
            <img src='./img/1.jpg' alt='woodmart' className=' rounded-2xl shadow-xl' />
          </div>
        </div>
    </div>
  )
}

export default About