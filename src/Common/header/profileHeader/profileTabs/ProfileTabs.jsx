import React, { useState } from 'react';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import './ProfileTabs.css';
import ActivityTabs from './activityTabs/ActivityTabs';
import PostsTabs from './postsTabs/PostsTabs';
import FriendsTabs from './friendsTabs/FriendsTabs';
import GalleryTabs from './galleryTabs/GalleryTabs';


const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState('Activity');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="border-b flex px-4 justify-between items-center border-gray-500 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2 py-3">
                        <button onClick={() => handleTabClick('Activity')} className={`flex p-2 gap-2 items-center cursor-pointer rounded-lg  text-sm justify-center border-b-2 font-semibold ${activeTab === 'Activity' ? 'text-white bg-green-500 border-green-500' : 'text-white border-transparent bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:hover:border-green-500 group'}`}>
                            <RedeemOutlinedIcon style={{ height: '15px', width: '15px', color: '#fff' }} /> Activity
                        </button>
                    </li>
                    <li className="me-2 py-3 px-3">

                        <button onClick={() => handleTabClick('Posts')} className={`flex cursor-pointer items-center gap-2 justify-center text-sm p-2 border-b-2 rounded-lg font-semibold ${activeTab === 'Posts' ? 'text-white bg-green-500 border-green-500' : 'text-white border-transparent bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:hover:border-green-500 group'}`}>
                            <PostAddOutlinedIcon style={{ height: '15px', width: '15px' }} /> Posts
                        </button>
                    </li>
                    <li className="me-2 py-3 px-3">

                        <button onClick={() => handleTabClick('Friends')} className={`inline-flex items-center gap-2 text-sm cursor-pointer justify-center p-2 border-b-2 rounded-lg font-semibold ${activeTab === 'Friends' ? 'text-white bg-green-500 border-green-500' : 'text-white border-transparent bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:hover:border-green-500 group'}`}>
                            <GroupOutlinedIcon style={{ height: '15px', width: '15px' }} /> Friends
                        </button>
                    </li>
                    <li className="me-2 py-3 px-3">

                        <button onClick={() => handleTabClick('Gallery')} className={`inline-flex items-center gap-2 text-sm justify-center cursor-pointer p-2 border-b-2 rounded-lg font-semibold ${activeTab === 'Gallery' ? 'text-white bg-green-500 border-green-500' : 'text-white border-transparent bg-transparent hover:bg-green-500 hover:text-white hover:border-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:hover:border-green-500 group'}`}>
                            <CollectionsOutlinedIcon style={{ height: '15px', width: '15px' }} /> Gallery
                        </button>
                    </li>
                </ul>
                <div className='py-3 px-2'>
                    <p className="font-semibold mb-2 ms-2 text-white">Profile 60% completed - <a className="text-green-500 text-[0.75rem]" href=" #">Finish now</a></p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-green-500 h-1.5 rounded-full dark:bg-green-500" style={{width:'45%'}}></div>
                    </div>
                </div>
            </div>
            {activeTab === 'Activity' && <div><ActivityTabs /></div>}
            {activeTab === 'Posts' && <div  style={{padding:'10px'}}><PostsTabs /></div>}
            {activeTab === 'Friends' && <div><FriendsTabs /></div>}
            {activeTab === 'Gallery' && <div><GalleryTabs /></div>}
        </div>
    );
};

export default ProfileTabs;
