import React, { useState,useRef,useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CandleChart from './Candlechart/CandleChart'
import img from "../../../images/bitcoin-btc-logo.png";
import pencilIcon from '../../../images/pencil.png';
import clossIcon from '../../../images/close.png';
import InfoIcon from '@mui/icons-material/Info';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import sideBar from '../../../images/sidebar (2).png'
import plusIcon from '../../../images/close.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './GraphData.css';

const GraphData =()=> {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [isOpen1, setIsOpen1] = useState(false);
    const [toggleOpen3, setToggleOpen3] = useState(false);
    const [showTooltip1, setShowTooltip1] = React.useState(false);
    const [toggleOpen4, setToggleOpen4] = useState(false);
    const [toggleOpen, setToggleOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const dropdownRef3 = useRef(null);
    const dropdownRef1 = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef4 = useRef(null);
    const dropdownRef5 = useRef(null);

    const [greenValue, setGreenValue] = useState(0.0094);
    const [redValue, setRedValue] = useState(0.0093);

    const handleDecrement = () => {
        setGreenValue(prevValue => prevValue - 0.0001);
    };

    const handleIncrement = () => {
        setRedValue(prevValue => prevValue + 0.0001);
    };
    const toggleDropdown4 = () => {
        setToggleOpen3(!toggleOpen3);
    };
    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setToggleOpen3(false);
    };
    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setToggleOpen4(false);
    };
    const toggleDropdown5 = () => {
        setToggleOpen4(!toggleOpen4);
    };
    const toggleDropdown1 = () => {
        setToggleOpen(!toggleOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setToggleOpen(false);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const openDropdown = () => {
        setIsOpen1(!isOpen1);
    };
    
    // for chart dropdown
    useEffect(() => {
        
        const closeDropdown = (event) => {
            if (isOpen && dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, [isOpen]);
    //for demo header drop down
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
                setToggleOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    //for  candlechart drop down
    useEffect(() => {
        const handleClickOutside1 = (event) => {
            if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) {
                setToggleOpen3(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside1);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside1);
        };
    }, []);
    //for  candlechart M15 drop down
    useEffect(() => {
        const handleClickOutside2 = (event) => {
            if (dropdownRef5.current && !dropdownRef5.current.contains(event.target)) {
                setToggleOpen4(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside2);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside2);
        };
    }, []);
    
  return (
    
       <div className="lg:col-span-8 md:col-span-12  rounded-12 relative h-auto" style={{ borderRadius: '20px' }}>
                <div className="flex lg:justify-end items-center bg-black py-3 px-2 flex-wrap lg:flex-no-wrap mb-4">
                        <div className="chart text-white  bottom-10 left-0 top-3 lg:absolute lg:bottom-10 lg:left-0 lg:top-3">
                            <div className="relative inline-block">
                                <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white rounded-lg font-semibold lg:px-5 sm:px-2 py-2.5 text-center inline-flex items-center" type="button">Chart
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div ref={dropdownRef3} id="dropdown" className="z-10 absolute px-5 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <div className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                            <div className="flex items-center justify-between bg-[#262E33]">
                                                <div className="px-4 py-2 text-white *:text-xl">Chart</div>
                                                <div className="flex items-center space-x-4 mr-3">
                                                    <img src={pencilIcon} alt="pencil_icon" style={{ height: '15px', width: '15px' }} />
                                                    <img src={clossIcon} alt="cross_icon" style={{ height: '13px', width: '13px' }} />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between bg-black">
                                                <div className="px-4 py-2 text-white">Add New</div>
                                                <div className="flex items-center space-x-4 mr-3">
                                                    <img src={plusIcon} alt="pencil_icon" style={{ height: '13px', width: '13px' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="icon">
                            <div className="flex items-center icon_header gap-3">
                                <div className='bg-[#000] px-2 py-1 flex items-center border border-gray-500' style={{ borderRadius: '10px' }}>
                                    <div className="relative inline-block">
                                        <button className="text-white bg-[#000] font-semibold rounded inline-flex items-center">
                                            <AddIcon style={{ fontSize: '25px', color: 'white' }} />
                                        </button>
                                    </div>
                                </div>
                                <img src={sideBar} style={{ height: '25px', width: '25px', color: 'white' }} />
                                <MonetizationOnOutlinedIcon style={{ fontSize: '30px', color: 'gray' }} />
                                
                                <div className="relative inline-block cursor-pointer">
                                    <button onClick={toggleDropdown1} className="bg-black text-white border border-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center" style={{ borderRadius: '10px' }}>
                                        <span>{selectedOption || 'Demo 15733925'}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="relative">
                                        <div onClick={() => setToggleOpen(!toggleOpen)}>
                                        </div>
                                        {toggleOpen && (
                                            <div ref={dropdownRef1} className="absolute z-50 mt-2 py-2 w-48 bg-[#181C1F] rounded-md shadow-lg">
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-white" onClick={() => handleOptionClick('Trading')}><TrendingUpIcon style={{ height: '25px', width: '25px', color: 'white', marginRight: '10px' }} />Trading</a>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img bg-[#181C1F] rounded-12 p-4" style={{ borderRadius: '20px' }}>
                        <div className='flex gap-5'>
                            <div className="relative inline-block w-[23%] dropdown_bitcoin">
                                <button onClick={toggleDropdown4} className="bg-[#181C1F] dropdown_bitcoin_button border border-gray-500 text-gray-500 font-semibold py-2 px-4 justify-between w-[100] md:w-[100%]  rounded inline-flex items-center" style={{ borderRadius: '10px' }}>
                                    <img src={img} className='mr-2' style={{ height: '20px', width: '20px' }} />
                                    <span>{selectedOption1 || 'BITCOIN CFD'}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="relative">
                                    <div onClick={() => setToggleOpen3(!toggleOpen3)}>
                                    </div>
                                    {toggleOpen3 && (
                                        <div ref={dropdownRef4} className="absolute z-50 mt-2 py-2 w-48 bg-black rounded-md shadow-lg">
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('BITCOIN CFD')}>BITCOIN CFD</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('DE30')}>DE30</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('EURUSD')}>EURUSD</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('GOLD')}>GOLD</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('US100')}>US100</a>

                                        </div>
                                    )}
                                </div>
                            </div>

                            <button className="relative inline-block bg-[#181C1F] px-2 py-1  items-center border border-gray-500'" style={{ borderRadius: '10px', border: '1px solid #808080' }}>
                                <InfoIcon
                                    className="cursor-pointer"
                                    onMouseEnter={() => setShowTooltip1(true)}
                                    onMouseLeave={() => setShowTooltip1(false)}
                                    style={{ height: '25px', width: '25px', color: '#808080' }} />
                                {showTooltip1 && (
                                    <span className="absolute top-[-52px]   transform  bg-gray-700 text-white text-lg p-2 rounded-lg whitespace-nowrap opacity-100 pointer-events-none transition-opacity duration-300" style={{ left: '0%' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </span>
                                )}
                            </button>
                            <div className="relative inline-block">
                                <button onClick={toggleDropdown5} className="bg-[#181C1F] border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center" style={{ borderRadius: '10px' }}>
                                    <span>{selectedOption2 || 'M15'}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="relative">
                                    <div onClick={() => setToggleOpen4(!toggleOpen4)}>
                                    </div>
                                    {toggleOpen4 && (
                                        <div ref={dropdownRef5} className="absolute z-50 mt-2 py-2 w-48 bg-black rounded-md shadow-lg">
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick2('M15')}>M15</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick2('M30')}>M30</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick2('M5')}>M5</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick2('H1')}>H1</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick2('H4')}>H4</a>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                       
                        <div className='flex items-center lg:gap-0 gap-5 py-3 mt-5 incdecButton'>
                            <div className=''>
                                <button className="bg-green-500 text-white px-4 py-2 rounded flex flex-col items-start " style={{ borderRadius: '10px' }}>
                                    <span className="whitespace-nowrap">{greenValue.toFixed(5)}</span>
                                </button>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className="text-white font-semibold bg-[#181C1F] p-2 rounded-2xl flex items-center" onClick={handleDecrement}>
                                    <RemoveOutlinedIcon style={{ fontSize: 25, color: 'white' }} />
                                </button>
                                <div className='text-center'>
                                    <span className="text-white block">0.0001</span>
                                </div>
                                <button className="text-white font-semibold bg-[#181C1F] p-2 rounded-2xl flex items-center" onClick={handleIncrement}>
                                    <AddIcon style={{ fontSize: 25, color: 'white' }} />
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <button className="bg-red-500 text-white px-4 py-2 rounded flex flex-col items-start" style={{ borderRadius: '10px' }}>
                                    <span className="whitespace-nowrap">{redValue.toFixed(5)}</span>
                                </button>
                            </div>
                        </div>

                        <CandleChart />
                    </div>
                </div>
    
  )
}

export default GraphData
