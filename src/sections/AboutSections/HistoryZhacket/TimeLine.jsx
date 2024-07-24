import React, { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const clickHandler = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="max-w-[986px] mx-auto shadow-md rounded-md pb-14 px-16 pt-9">
            <div className=" items-center relative mb-16 flex  h-36  ">
                <div  className=" relative">
                   <div className='absolute left-0 top-[50%] flex h-2' >
                   <div className=' rounded-r-lg  w-[52px]  bg-[#ebf4fc] '></div>
                   <div className='  rounded-l-lg w-[803px] bg-gradient-to-r from-[#FF9737] to-[#FFC107] shadow-lg shadow-[#ff9737]'></div>
                   </div>
                    <div class=" items-stretch flex float-end ">

                        {children.map(child => (
                            <button
                                key={child.props.label}
                                className={`relative ${child.props.width}`}
                                onClick={e => clickHandler(e, child.props.label)}
                            >
                                <div class='z-10 text-center'>
                                    <div className={`${activeTab === child.props.label ? 'relative bg-[#464E58] text-white pt-1 pb-2 px-3 rounded-md text-xs  ' : 'pt-2'
                                        } mb-5 text-[#76767C] text-xs w-fit mx-auto tracking-tighter`} >
                                        {child.props.label}
                                        <div className={`${activeTab === child.props.label ? 'absolute left-[50%] bottom-0 z-20 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#464E58]' : ' hidden'
                                            }`} >
                                        </div>
                                    </div>
                                    <div className={`${activeTab === child.props.label ? ' bg-[#FF9737] ' :
                                        'bg-[#C1C3C8]'} w-3.5 h-3.5 mx-auto rounded-full ring-white drop-shadow-md ring-4`} >
                                    </div>
                                    <div className={`${activeTab === child.props.label ? 'mt-2 font-bold text-[22px]' : 'mt-5 text-xs'}`}>
                                        {child.props.year}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
            <div className="py-4">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};
export { Tabs, Tab };