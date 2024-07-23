import React from 'react'

function Timeline() {
  return (
    <div> <div className=' relative mx-20 flex my-12  h-36'>
    <div className="w-[10%]">
    <div className=' rounded-lg absolute w-full top-10 left-0 bg-[#ebf4fc] h-2'></div>
    .
    </div>
    <div className="w-[90%]">
      <ol class="items-center sm:flex gap-8 relative ">
        <div className=' rounded-lg absolute w-full top-10 left-0 bg-gradient-to-r from-[#FF9737] to-[#FFC107]
    h-2 shadow-lg shadow-[#ff9737]'></div>
        <li class="z-10 text-center sm:mb-0 absolute -right-10 top-0">
          <div className='mb-2 relative bg-[#464E58] text-white pt-1 pb-2 px-3 rounded-md text-xs'>
            سایت جدید
            <div className='absolute left-[50%]  bottom-0 z-20 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2
         bg-[#464E58]'>
            </div>
          </div>
          <div class="  w-3.5 h-3.5 mx-auto bg-[#FF9737] rounded-full ring-white drop-shadow-md sm:ring-4 shrink-0">
          </div>
          <div class="mt-2 font-bold text-[22px]">
            1403
          </div>
        </li>
        <li class="z-10 text-center sm:mb-0 absolute right-16 top-0">
          <div className='mb-5 text-[#76767C] text-xs'>
            نسخه دوم ژاکت
          </div>
          <div class="  mx-auto w-3.5 h-3.5 bg-[#C1C3C8] rounded-full ring-white drop-shadow-md sm:ring-4  shrink-0"></div>
          <div class="mt-5 text-xs">
            1399
          </div>
        </li>
        <li class="z-10 text-center sm:mb-0 absolute right-96 top-0">
          <div className='mb-5 text-[#76767C] text-xs'>
            نسخه اول ژاکت
          </div>
          <div class="mx-auto w-3.5 h-3.5 bg-[#C1C3C8] rounded-full ring-white drop-shadow-md sm:ring-4  shrink-0">
          </div>
          <div class="mt-5 text-xs ">
            1398
          </div>
        </li>
        <li class="z-10 text-center sm:mb-0 absolute left-36 top-0">
          <div className='mb-5 text-[#76767C] text-xs'>
            تاسیس ژاکت
          </div>
          <div class="mx-auto w-3.5 h-3.5 bg-[#C1C3C8] rounded-full ring-white drop-shadow-md sm:ring-4  shrink-0">
          </div>
          <div class="mt-5 text-xs">
            1395
          </div>
        </li>
        <li class="z-10 text-center sm:mb-0 absolute left-2 top-0">
          <div className='mb-5 text-[#76767C] text-xs'>
            اولین جرقه
          </div>
          <div class="  mx-auto w-3.5 h-3.5 bg-[#C1C3C8] rounded-full ring-white drop-shadow-md  sm:ring-4  shrink-0">
          </div>
          <div class="mt-5 text-xs">
            1392
          </div>
        </li>
      </ol>
    </div>
  </div></div>
  )
}

export default Timeline