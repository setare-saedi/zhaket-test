import React from 'react'

function Header() {
    return (
        <div> <div className=" bg-gradient-to-tr from-[#FFE6C1] via-[#FFF3E0] to-[#FFDAA2] mx-auto py-2 px-6
    rounded-3xl w-max border-white border-4 shadow-xl shadow-[#f9f0e4]">
            <div className='text-[#BC8757] text-sm drop-shadow-[2px_4px_2px] tracking-tighter'>
                بیش از<span className="tracking-tighter text-[#F39900]"> ۲۰۰۰ محصول </span>برای شروع سایت شما
            </div>
        </div>

            <div className=" text-[#424244] mx-auto w-fit font-bold text-2xl mt-6 tracking-tighter">
                تاریخچه ژاکت
            </div></div>
    )
}

export default Header