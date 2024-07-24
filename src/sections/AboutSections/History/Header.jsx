import React from 'react'

function Header() {
    return (
        <div className='mb-[27px]'>
            <div className=" bg-gradient-to-tr from-[#FFE6C1] via-[#FFF3E0] to-[#FFDAA2] mx-auto px-6
                     rounded-3xl w-max border-white border-4 shadow-xl shadow-[#f9f0e4]">
                <div className='text-[#BC8757] text-sm drop-shadow-[2px_4px_2px] tracking-tighter py-2 px-6'>
                    بیش از<span className="tracking-tighter text-[#F39900]"> ۲۰۰۰ محصول </span>برای شروع سایت شما
                </div>
            </div>

            <div className="text-[#424244] text-center font-bold text-[26px] mt-[18px] tracking-tighter">
                تاریخچه ژاکت
            </div>
        </div>
    )
}

export default Header