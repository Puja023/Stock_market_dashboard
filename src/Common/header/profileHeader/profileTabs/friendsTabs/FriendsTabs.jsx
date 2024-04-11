import React, { useEffect, useState } from 'react';
import profileimage from '../../../../../images/2.jpg';

const FriendsTabs = () => {
    const [profileBox, setProfileBox] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/profileTabs');
            const data = await response.json();
            console.log(data);
            setProfileBox(data);
        }
        catch {

        }
    }


    return (
        <div className='grid grid-cols-12 sm:gap-x-2'>
            {profileBox && profileBox.map((x, index) => (
                <div key={index} className='xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 py-4 px-3'>
                    <div className='box !shadow-none border border-gray-500'>
                        <div className='box_area p-5 flex flex-col items-center'>
                            <div className='profileImg flex items-center'>
                                <img src={profileimage} className='rounded-full w-10 h-10' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p class="mb-0 font-semibold text-white">{x?.name}</p>
                                <p class="text-[0.75rem] opacity-[0.7] mb-1 text-[#8c9097] dark:text-white/50">{x?.email}</p>
                                <span className={x?.role === "Team Member" ? "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" 
                                : x?.role === "Team Lead" ? "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                 : "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"}>{x?.role}</span>
                            </div>
                        </div>
                        <hr className='border-gray-500' />
                        <div className='box_footer flex gap-2 p-4 items-center justify-center'>
                            {x.actions.map((action, actionIndex) => (
                                <button
                                    key={actionIndex}
                                    type="button"
                                    className={`py-2.5 px-5 me-2  text-sm font-medium ${action.name === 'Block' ? 'text-gray-900 bg-white hover:bg-gray-100 focus:outline-none ' : 'text-white bg-green-500 hover:bg-green-500 '} rounded-lg  focus:z-10   dark:bg-green-500 dark:text-green-500  dark:hover:text-white dark:hover:bg-green-500`}
                                >
                                    {action.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>))}
            <div className='flex justify-center xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12 py-4 px-3'>
                <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500">Show All</button>
            </div>
        </div>
    )
}

export default FriendsTabs
