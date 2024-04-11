import React, { useEffect, useState } from 'react';
import './ProfileHeader.css';
import profile1 from '../../../images/3135715.png'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProfileTabs from './profileTabs/ProfileTabs';
import animal from '../../../images/media-39.jpg';
import travel from '../../../images/media-56.jpg'
import interior from '../../../images/media-54.jpg'
import nature from '../../../images/media-64.jpg'
import profile from '../../../images/3135789.png'
import AddIcon from '@mui/icons-material/Add';





function ProfileHeader() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/profiles')
            const data = await response.json();
            setUserData(data);
        } catch (error) {

        }
    }
    return (
        // <div className='' >
        <>
            <div className='px-5' style={{ marginTop: '110px' }}>
                <h3 className='text-white pb-4 text-[1.125rem] font-semibold'>Profile</h3>
            </div>
            <div className='grid grid-cols-12 gap-x-6 px-5 mb-[4rem]'>
                <div className='lg:col-span-4 md:col-span-12 col-span-12'>
                    <div className='personal_info bg-[#181C1F]'>
                        <div className='profile_img_wrapper flex p-6'>
                            <div className='relative z-999'>
                                <span className='image_wrapper relative'>
                                    <img src={profile1} alt='image' style={{ height: '80px', width: '80px' }} />
                                </span>
                            </div>
                            <div className='flex-grow'>
                                <div className='flex items-center justify-between relative px-4'>
                                    <h6 className='font-semibold mb-1 text-white text-[1rem]'>Json Taylor</h6>
                                    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><AddOutlinedIcon style={{ height: '15', width: '15px', marginRight: '7px' }} />Follow</button>
                                </div>
                                <h3 className='mb-1 text-white  opacity-[0.9] px-4'>Chief Executive Officer (C.E.O)</h3>
                                <div className='flex px-4'>
                                    <h3 className='text-[0.75rem] text-white mb-6 opacity-[0.9]'>
                                        <span className='me-4 inline-flex'><BusinessOutlinedIcon style={{ height: '20px', width: '20px', color: 'white', marginRight: '5px' }} />Georgia</span>
                                    </h3>
                                    <h3 className='text-[0.75rem] text-white mb-6 opacity-[0.9]'>
                                        <span className='me-4 inline-flex'><AddLocationOutlinedIcon style={{ height: '20px', width: '20px', color: 'white', marginRight: '5px' }} />Washington DC</span>
                                    </h3>
                                </div>
                                <div className='flex mb-0 relative gap-4 px-4'>
                                    <div className='text-white'>
                                        <p className='font-bold text-[1.25rem] text-white text-shadow mb-0'>113</p>
                                        <p className='mb-0 text-[.6875rem] opacity-[0.9] text-white'>Projects</p>

                                    </div>
                                    <div className='text-white'>
                                        <p className='font-bold text-[1.25rem] text-white text-shadow mb-0'>112.3</p>
                                        <p className='mb-0 text-[.6875rem] opacity-[0.9] text-white'>Followers</p>

                                    </div>
                                    <div className='text-white'>
                                        <p className='font-bold text-[1.25rem] text-white text-shadow mb-0'>128</p>
                                        <p className='mb-0 text-[.6875rem] opacity-[0.9] text-white'>Following</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='p-6'>
                            <div className='mb-6 text-white'>
                                <p className='mb-2 font-semibold'>Professional Bio :</p>
                                <p className="text-sm text-gray-400 mb-4 leading-normal">
                                    I am{' '}
                                    <b className="text-primary ml-2 mr-2 font-semibold">Sonya Taylor</b>,
                                    hereby conclude that I am the founder and managing director of the prestigious company
                                    named "Laugh at All" and serve as the Chief Executive Officer of the company.
                                </p>

                            </div>
                            <div className='mb-0 text-white'>
                                <p>Links:</p>
                                <p className='text-gray-400'><a class="text-primary" href=" #"><u>https://www.spruko.com/</u></a></p>
                                <p className='text-gray-400'><a class="text-primary" href="#"><u>https://www.spruko.com/</u></a></p>

                            </div>

                        </div>
                        <hr />
                        <div className='p-6'>
                            <p className='text-white mb-2'>Contact Information :</p>
                            <div className=''>
                                <p class="mb-2 text-gray-400"><EmailOutlinedIcon style={{ height: '20px', width: '20px', color: '#808080', marginRight: '7px' }} />sonyataylor2531@gmail.com</p>
                            </div>
                            <div className=''>
                                <p class="mb-2 text-gray-400"><CallOutlinedIcon style={{ height: '20px', width: '20px', color: '#808080', marginRight: '7px' }} />+(555) 555-1234</p>
                            </div>
                            {/* <div className=''>
                                <p class="mb-2 text-gray-500"><className='mb-2 font-semibold text-white' AddLocationOutlinedIcon style={{ height: '20px', width: '20px', color: '#808080', marginRight: '7px' }} />MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071</p>
                            </div> */}
                            <div className="">
                                <p className="mb-2 flex items-center text-gray-400 gap-2">
                                    <AddLocationOutlinedIcon />
                                    MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA, 20071
                                </p>
                            </div>

                        </div>
                        <div className='p-6'>
                            <div className='flex gap-5'>
                                <p className='mb-2 font-semibold text-white'>Social Network:</p>
                                <div className='mb-0 flex gap-3'>
                                    <FacebookIcon style={{ height: '20px', width: '20px', color: '#1877F2' }} />
                                    <TwitterIcon style={{ height: '20px', width: '20px', color: '#1DA1F2' }} />
                                    <InstagramIcon style={{ height: '20px', width: '20px', color: '#fccc63' }} />
                                    <GitHubIcon style={{ height: '20px', width: '20px', color: '#013220' }} />
                                    <YouTubeIcon style={{ height: '20px', width: '20px', color: '#ff0000' }} />
                                </div>
                            </div>
                        </div>
                        <div className='p-6'>
                            <p class="text-[.9375rem] mb-2 me-6 font-semibold text-white">Skills :</p>
                            <div className='flex flex-wrap  items-center'>
                                <span className="badge bg-light  dark:text-white/50 m-1 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Cloud Computing</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Data Analysis</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">DevOps</span>                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Programming</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Security</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Python</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Java Script</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Ruby</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Statics</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">SQL</span>

                            </div>
                        </div>
                        <div className='p-6'>
                            <p className="text-[.9375rem] mb-2 me-6 font-semibold text-white">Followers:</p>
                            <ul>
                                <li>
                                    {userData && userData.map((x, index) => (
                                        <div className='flex justify-between' key={index}>
                                            <div className='flex gap-3 items-center mt-2'>
                                                <span>
                                                    <img src={profile1} alt='image' style={{ height: '30px', width: '30px' }} />
                                                </span>
                                                <div className='sm:ms-2 ms-0 sm:mt-0 mt-1 font-semibold flex-grow'>
                                                    <p className='mb-0 leading-none text-white font-bold'>{x?.name}</p>
                                                    <span className='text-[.6875rem] text-gray-400  opacity-[0.7]'>{x?.email}</span>
                                                </div>

                                            </div>
                                            <div>
                                                {/* <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{x?.follows}</button> */}
                                                <button type="button" className="bg-green-900 rounded py-2 px-3 text-[0.75rem] text-white">Follow</button>
                                            </div>
                                        </div>))}
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className='lg:col-span-8 md:col-span-12 col-span-12'>

                    <div className='bg-[#181C1F]' style={{ borderRadius: '20px' }}>
                        <ProfileTabs />
                    </div>
                    <div className='grid grid-cols-12 gap-x-6 my-5'>
                        <div className='xl:col-span-4 col-span-12'>
                            <div className='bg-[#181C1F] py-2  h-[25rem]' style={{ borderRadius: '20px' }}>
                                <div className='box'>
                                    <div className='boxHeader relative mx-3 py-3 px-3'>
                                        <span className='text-white text-0.9375'>Personal Info</span>
                                    </div>
                                    <hr className=' border-gray-500' />
                                    <div className='boxBody border mx-3 border-gray-500 mt-4'>
                                        <div className='p-3  '>
                                            <span className=' p-5'><span className='text-white font-bold'>Name:</span> <span className='text-gray-500'>Sonya Taylor</span></span>

                                        </div>
                                        <hr className='border-gray-500' />
                                        <div className='p-3 '>
                                            <span className=' p-5'><span className='text-white font-bold'>Email:</span> <span className='text-gray-500'>sonyataylor231@gmail.com</span></span>

                                        </div>
                                        <hr className='border-gray-500' />
                                        <div className='p-3'>
                                            <span className=' p-5'><span className='text-white font-bold'>Phone:</span> <span className='text-gray-500'>+(555) 555-1234</span></span>
                                        </div>
                                        <hr className='border-gray-500' />
                                        <div className='p-3 '>
                                            <span className=' p-5'><span className='text-white font-bold'>Designation :</span> <span className='text-gray-500'>C.E.O</span></span>
                                        </div>
                                        <hr className='border-gray-500' />
                                        <div className='p-3 '>
                                            <span className=' p-5'><span className='text-white font-bold'>Age :</span> <span className='text-gray-500'>28</span></span>
                                        </div>
                                        <hr className='border-gray-500' />
                                        <div className='p-3 '>
                                            <span className=' p-5'><span className='text-white font-bold'>Experience :</span> <span className='text-gray-500'>10 Years</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:col-span-4 col-span-12'>
                            <div className='bg-[#181C1F] py-2 h-[25rem]' style={{ borderRadius: '20px' }}>
                                <div className='box'>
                                    <div className='flex items-center justify-between border-b border-gray-500'>
                                        <div className='boxHeader relative mx-3 py-3 px-3'>
                                            <span className='text-white text-0.9375'>Recent Posts</span>
                                        </div>
                                        <hr className='border-gray-500' />
                                        <div>
                                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-green-300">Today</span>
                                        </div>
                                    </div>
                                    <div className='boxBody border border-gray-500 mx-3 mt-4'>
                                        <div className='p-2'>
                                            <div className=' p-2 flex items-center gap-3'>
                                                <div className='text-white font-bold'>
                                                    <img src={animal} className='h[40px] w-[40px] rounded' />
                                                </div>
                                                <div>
                                                    <div className='text-gray-500 font-semibold mb-0'>Animals</div>
                                                    <p className='mb-0 text-[0.75rem]  text-truncate text-[#8c9097]'>There are many variations</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />
                                        <div className='p-2'>
                                            <div className=' p-2 flex items-center gap-3'>
                                                <div className='text-white font-bold'>
                                                    <img src={travel} className='h[40px] w-[40px] rounded' />
                                                </div>
                                                <div>
                                                    <div className='text-gray-500 font-semibold mb-0'>Travel</div>
                                                    <p className='mb-0 text-[0.75rem]  text-truncate text-[#8c9097]'>Latin Words,combined wait..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />

                                        <div className='p-2'>
                                            <div className=' p-2 flex items-center gap-3'>
                                                <div className='text-white font-bold'>
                                                    <img src={interior} className='h[40px] w-[40px] rounded' />
                                                </div>
                                                <div>
                                                    <div className='text-gray-500 font-semibold mb-0'>Interior</div>
                                                    <p className='mb-0 text-[0.75rem]  text-truncate text-[#8c9097]'>Contrary to popular belief...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />

                                        <div className='p-2'>
                                            <div className=' p-2 flex items-center gap-3'>
                                                <div className='text-white font-bold'>
                                                    <img src={nature} className='h[40px] w-[40px] rounded' />
                                                </div>
                                                <div>
                                                    <div className='text-gray-500 font-semibold mb-0'>Nature</div>
                                                    <p className='mb-0 text-[0.75rem]  text-truncate text-[#8c9097]'>Its a long established fac...</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:col-span-4 col-span-12'>
                            <div className='bg-[#181C1F] h-[25rem] py-2 ' style={{ borderRadius: '20px' }}>
                                <div className='box'>
                                    <div className='flex justify-between items-center'>
                                        <div className='boxHeader relative mx-3 py-3 px-3'>
                                            <span className='text-white text-0.9375'>Suggestions</span>
                                        </div>

                                        <div>
                                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1.5 rounded dark:bg-green-500 dark:text-green-300">View All</span>
                                        </div>
                                    </div>
                                    <hr className=' border-gray-500' />

                                    <div className='boxBody border border-gray-500 mx-3 mt-4'>
                                        <div className='p-2 '>
                                            <div className='flex justify-between items-center'>
                                                <div className=' p-2 flex items-center gap-3'>
                                                    <div className='text-white font-bold'>
                                                        <img src={profile} className='h[25px] w-[25px] rounded' />
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-500 font-semibold mb-0 items-center'>Alister</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-1.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300"><AddIcon className='h-[5px] w-[5px]' /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />

                                        <div className='p-2'>
                                            <div className='flex justify-between items-center'>
                                                <div className=' p-2 flex items-center gap-3'>
                                                    <div className='text-white font-bold'>
                                                        <img src={profile} className='h[25px] w-[25px] rounded' />
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-500 font-semibold mb-0 items-center'>Samantha Sams</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-1.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300"><AddIcon className='h-[5px] w-[5px]' /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />

                                        <div className='p-2'>
                                            <div className='flex justify-between items-center'>
                                                <div className=' p-2 flex items-center gap-3'>
                                                    <div className='text-white font-bold'>
                                                        <img src={profile} className='h[25px] w-[25px] rounded' />
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-500 font-semibold mb-0 items-center'>Jason Mama</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-1.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300"><AddIcon className='h-[5px] w-[5px]' /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />

                                        <div className='p-2'>
                                            <div className='flex justify-between items-center'>
                                                <div className=' p-2 flex items-center gap-3'>
                                                    <div className='text-white font-bold'>
                                                        <img src={profile} className='h[25px] w-[25px] rounded' />
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-500 font-semibold mb-0 items-center'>Alicia Sierra</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-1.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300"><AddIcon className='h-[5px] w-[5px]' /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500' />

                                        <div className='p-2'>
                                            <div className='flex justify-between items-center'>
                                                <div className=' p-2 flex items-center gap-3'>
                                                    <div className='text-white font-bold'>
                                                        <img src={profile} className='h[25px] w-[25px] rounded' />
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-500 font-semibold mb-0 items-center'>Kiara Advain</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-1.5 py-1.5 rounded dark:bg-green-900 dark:text-green-300"><AddIcon className='h-[5px] w-[5px]' /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}</>
    )
}

export default ProfileHeader
