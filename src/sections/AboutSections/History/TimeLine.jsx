import React, { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const clickHandler = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="lg:max-w-[986px] w-[95%] mx-auto shadow-md shadow-gray-300 rounded-[10px] pb-14 lg:pl-[63px] lg:pr-[60px] md:px-8 px-4 pt-9">
            <div className=" items-center   lg:mb-16 mb-8 flex h-36 overflow-x-scroll hide-scrollbar ">

                <div class=" flex text-end relative">
                    <div className='absolute top-[50%] right-0 w-full ' >
                        <div className='h-2 rounded-lg w-full bg-[#F7F8F9]'>
                            <div className='h-2  rounded-l-lg float-left w-[803px]  bg-gradient-to-r from-[#FF9737] to-[#FFC107] shadow-lg shadow-[#ff9737]'></div>
                        </div>
                    </div>
                    {children.map(child => (
                        <div className={`relative ${child.props.width} pt-2.5`}>
                            <button
                                key={child.props.label}
                                onClick={e => clickHandler(e, child.props.label)}
                            >
                                <div class=' '>
                                    <div className={`${activeTab === child.props.label ? ' relative bg-[#464E58] text-[#E5E8EB]  rounded-md shadow-md border-[1.5px] border-white' : ''
                                        } mb-[8px]  text-[#76767C]  text-[11px] w-fit  pt-[7px] pb-[8px] transition-all duration-200 ease-linear pr-[17px] pl-[13px] tracking-tighter font-bold`} >
                                        {child.props.label}
                                        <span className={`${activeTab === child.props.label ? 'absolute right-[47%] -bottom-[3px] rotate-45 w-1.5 h-1.5 bg-[#464E58] border-b-[1px] border-r-[1px] border-white shadow-md' : ' hidden'
                                            } `} >
                                        </span>
                                       
                                    </div>

                                    <div className={`${activeTab === child.props.label ? ' bg-[#FF9737] ' :
                                        'bg-[#C1C3C8]'} w-[18px] h-[18px] mx-auto border-[3.5px] border-white drop-shadow-md rounded-full  transition-all duration-300`} >
                                    </div>
                                    <div className={`${activeTab === child.props.label ? 'mt-2 font-bold text-[22px]' : 'mt-5 text-[16px] '} text-[#282A2C] transition-all duration-300 ease-linear w-fit mx-auto tracking-2`}>
                                        {child.props.year}
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
            <div className="py-4 ">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label} >{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden ">
            {children}
        </div>
    );
};
export { Tabs, Tab };