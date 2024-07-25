import React from 'react'

function Header() {
    return (
        <div className='mb-[27px]'>
            <div className="text-sm tracking-2 bg-gradient-to-tr from-[#FFE6C1]  via-[#FFF3E0] to-[#FFDAA2] mx-auto py-2 px-[23px] w-[248px]
                     rounded-[32px] ring-white ring-4 shadow-xl shadow-[#f9f0e4]">
                <div className='text-[#BC8757] drop-shadow-[2px_4px_2px]   '>
                    بیش از<span className=""> ۲۰۰۰ محصول </span>برای شروع سایت شما
                </div>
            </div>

            <div className="text-[#424244] w-fit mx-auto text-center font-bold text-[26px] mt-[18px] tracking-tight leading-[37px]">
                تاریخچه ژاکت
            </div>
        </div>
    )
}

export default Header