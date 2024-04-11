import React, { useState, useRef, useEffect } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CloseIcon from '@mui/icons-material/Close';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { NavLink, useNavigate } from 'react-router-dom';
import profile1 from '../../images/3135715.png'


const Header = () => {
    const [toggleOpen2, setToggleOpen2] = useState(false);
    const dropdownRef2 = useRef(null);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/ProfileHeader');
    };
    const handleHome = () => {
        navigate('/')
    }
    const toggleDropdown3 = () => {

        setToggleOpen2(!toggleOpen2);
    };
    useEffect(() => {
        const closeDropdown = (event) => {
            if (toggleOpen2 && dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setToggleOpen2(false);
            }
        };
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, [toggleOpen2]);

    const [nav,setNav]=useState(false)
    return (
        <>
            <nav className="fixed bg-black dark:bg-gray-900   w-full z-20 top-0 start-0  px-5" style={{ boxShadow: '0 0 15px #808080' }}>
                <div className="w-full flex flex-wrap items-center justify-between mx-auto py-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                        <DashboardIcon style={{ color: 'rgb(34 197 94)', fontSize: '30px' }} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">AHEX</span>
                    </a>
                    <div className="flex md:order-2 items-center  rtl:space-x-reverse">

                        <div className='flex justify-start gap-2 items-center  px-2'>
                            <div className='bg-[#000] px-2 py-1 flex items-center'>
                                <div className="relative inline-block">
                                    <div>
                                        <button onClick={toggleDropdown3} className=" text-white bg-[#000] font-semibold  rounded inline-flex items-center">
                                            <NotificationsOutlinedIcon style={{ fontSize: '30px', color: 'white' }} />
                                            <span className="sr-only">Notifications</span>
                                            <div className="notification_icon absolute inline-flex items-center justify-center w-6 h-6  text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full  top-[-16px] right-[-7px] dark:border-gray-900">5</div>
                                        </button>
                                    </div>
                                    {toggleOpen2 && (
                                        <div ref={dropdownRef2} className="absolute z-50 mt-2 px-4 py-4 w-[346px]  bg-[#181C1F] rounded-md shadow-lg left-auto right-0">
                                            <div className='flex items-center gap-3 justify-between w-full'>
                                                <div className='w-[10%]'> <CardGiftcardIcon style={{ height: '20px', width: '20px', color: '#A020F0' }} />
                                                </div>
                                                <div className='w-[80%]'>
                                                    <div className="hover:bg-gray-900 text-white">Your Order Has Been shiped</div>
                                                    <div className='text-gray-500 text-sm'>Order no:123456 Has Shiped</div>
                                                    <div className='text-gray-500 text-sm'>Delivery Address</div></div>
                                                <div className='w-[10%]'>
                                                    <CloseIcon style={{ height: '20px', width: '20px', color: '#808080' }} />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 justify-between mt-3 w-full'>
                                                <div className='w-[10%]'>
                                                    <DiscountOutlinedIcon style={{ height: '20px', width: '20px', color: '#87CEEB' }} />
                                                </div>
                                                <div className='items-center w-[80%]'>
                                                    <div className="hover:bg-gray-900 text-white">Discount Available</div>
                                                    <div className='text-gray-500 text-sm'>Discount on Selected Product</div>
                                                </div>
                                                <div className='w-[10%]'>
                                                    <CloseIcon style={{ height: '20px', width: '20px', color: '#808080' }} />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 justify-between mt-3 w-full'>
                                                <div className='w-[10%]'>
                                                    <GroupAddOutlinedIcon style={{ height: '20px', width: '20px', color: '#FFC0CB' }} />
                                                </div>
                                                <div className='items-center w-[80%]'>
                                                    <div className="hover:bg-gray-900 text-white">Account Has Been Verified</div>
                                                    <div className='text-gray-500 text-sm'>Your Account Has Been Verified Successfully</div>

                                                </div>
                                                <div className='w-[10%]'>
                                                    <CloseIcon style={{ height: '20px', width: '20px', color: '#808080' }} />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 justify-between mt-3'>
                                                <div className='w-[10%]'>
                                                    <CheckCircleOutlineOutlinedIcon style={{ height: '20px', width: '20px', color: '#FFA500' }} />
                                                </div>
                                                <div className='items-center w-[80%]'>
                                                    <div className="hover:bg-gray-900 text-white">Order Placed <span className='text-orange-500'>ID:#11673</span></div>
                                                    <div className='text-gray-500 text-sm'>Order Placed Successfully</div>

                                                </div>
                                                <div className='w-[10%]'>
                                                    <CloseIcon style={{ height: '20px', width: '20px', color: '#808080' }} />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 justify-between mt-3'>
                                                <div className='w-[10%]'>
                                                    <AccessTimeIcon style={{ height: '20px', width: '20px', color: '#013220' }} />
                                                </div>
                                                <div className='items-center w-[80%]'>
                                                    <div className="hover:bg-gray-900 text-white">Order Delayed <span className='text-green-500'>ID:#773116</span></div>
                                                    <div className='text-gray-500 text-sm'>Order Delayed Unfortunately</div>

                                                </div>
                                                <div className='w-[10%]'>
                                                    <CloseIcon style={{ height: '20px', width: '20px', color: '#808080' }} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div scope="row" className="flex items-center cursor-pointer py-2 font-medium  whitespace-nowrap text-white" onClick={handleProfileClick}>
                            <img src={profile1} alt='image' style={{ height: '30px', width: '30px' }} />

                            <div className="ps-3">
                                <div className="text-base font-semibold">Json Taylor</div>
                                <div className="text-xs">Web Developer</div>
                            </div>

                        </div>
                        <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false"
                            onClick={()=>setNav(prev=>!prev)}
                            >
                            <span className="sr-only">Open main menu</span>
                           {nav? <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>:
                            <></>
                            }
                        </button>
                    </div>
                    <div className={`items-center justify-between ${nav?"hidden":""} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink  to="/"
                                    className="block text-2xl py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white"
                                    aria-current="page" onClick={handleHome}>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio"
                                    className="block py-2 text-2xl px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink  to="/market"
                                    className="block py-2 text-2xl px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Market</NavLink>
                            </li>
                            <li>
                                <NavLink  to="/news"
                                    className="block py-2 text-2xl px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/community"
                                    className="block py-2 text-2xl px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        Community</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
