import React, { useState, useEffect } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StopLoss from './stoploss/StopLoss';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import Buy from './stoploss/buy/Buy';
import './MarketAnalysis.css';



const MarketAnalysis = ({ isModalOpen, setIsModalOpen }) => {
    const [activeTab, setActiveTab] = useState('fav');
    const [buyTab, setBuyTab] = useState(false);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const [showTooltip, setShowTooltip] = React.useState(false);



    const handleRadioChange = (event) => {
        setIsChecked1(event.target.checked);
        setIsChecked2(false)
    };
    const handleRadioChange2 = (event) => {
        setIsChecked2(event.target.checked);
        setIsChecked1(false)
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const openByTab = () => {
        setBuyTab(true);
        if (isModalOpen === true) {
            setIsModalOpen(false)

        }
    }
    const handleIncrement = () => {
        setCount(prevCount => parseFloat((prevCount + 0.01).toFixed(2)));
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => parseFloat((prevCount - 0.01).toFixed(2)));
        }
    };
    const handleInc = () => {
        setCount1(prevCount => parseFloat((prevCount + 0.01).toFixed(2)));
    };

    const handleDec = () => {
        if (count1 > 0) {
            setCount1(prevCount => parseFloat((prevCount - 0.01).toFixed(2)));
        }
    };
    const handleInc1 = () => {
        setCount2(prevCount => parseFloat((prevCount + 0.01).toFixed(2)));
    };

    const handleDec1 = () => {
        if (count2 > 0) {
            setCount2(prevCount => parseFloat((prevCount - 0.01).toFixed(2)));
        }
    };
    useEffect(() => {

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substr(0, 10);
        setDate(formattedDate);
    }, []);

    const handleDate = (e) => {
        setDate(e.target.value);

    };
    useEffect(() => {

        const currentTime = getCurrentTime();
        setTime(currentTime);
    }, []);

    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
    const handleTime = (e) => {
        setTime(e.target.value);

    };

    const modalCLosed = () => {
        setIsModalOpen(false)
        document.body.classNameList.remove('modal-open')
        setIsChecked1(false)
        setIsChecked2(false)
        setActiveTab('fav')
    }
    return (
        <div>
            {isModalOpen && (
                <div id="authentication-modal" className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
                    <div className="relative  mx-auto modal_wrapper">
                        <div className="relative rounded-lg p-5 shadow max-h-80vh   overflow-y-auto  bg-[#151515]" style={{ maxHeight: '80vh' }}>
                            <div>
                                <div className="flex items-center justify-between ">
                                    <h3 className="flex items-center text-2xl font-semibold text-white">
                                        <span className="mr-2">DE30</span>
                                        <div className="relative inline-block">
                                            <ErrorOutlineIcon
                                                className="h-6 w-6 cursor-pointer"
                                                onMouseEnter={() => setShowTooltip(true)}
                                                onMouseLeave={() => setShowTooltip(false)}
                                            />
                                            {showTooltip && (
                                                <span className="absolute top-0 right-[10%]  bg-white -700 text-black text-sm p-2 rounded-lg whitespace-nowrap opacity-100 pointer-events-none transition-opacity duration-300">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                </span>
                                            )}
                                        </div>
                                    </h3>
                                    <CloseOutlinedIcon onClick={modalCLosed} style={{ height: '35px', width: '35px', color: 'white' }} />

                                </div>
                                <div>
                                    <p className='text-white   text-lg'>Instrument which price is based on quotation of the featurecontact for...</p>

                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-center   text-gray-50">
                                    <ul className="flex flex-wrap -mb-px ">
                                        <li className={`tab inline-block p-4 text-white text-2xl w-1/2 justify-start   rounded-t-lg ${activeTab === 'fav' ? 'border-b-2 border-green-600' : 'border-transparent'} ${activeTab === 'fav' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('fav')}
                                            aria-current={activeTab === 'fav' ? 'page' : undefined}>
                                            <a href="#">
                                                Market Order
                                            </a>
                                        </li>
                                        <li className={`tab inline-block p-4 text-white text-2xl w-1/2 justify-start   rounded-t-lg ${activeTab === 'profile' ? 'border-b-2 border-green-600' : 'border-transparent'}  ${activeTab === 'profile' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('profile')}
                                            aria-current={activeTab === 'profile' ? 'page' : undefined}>
                                            <a href="#">
                                                Stop/Limit Order
                                            </a>
                                        </li>
                                    </ul>
                                    {activeTab === 'fav' && (
                                        <div>
                                            <div className="flex gap-5 flex-wrap lg:flex-nowrap md:flex-nowrap bg-[#1E1E1E] mt-4 p-4 rounded">
                                                <div className="inputSearch flex flex-col lg:w-[33%] w-full gap-3   py-2">
                                                    <span className='text-white flex'>Volume</span>


                                                    <div className="bg-[#1E1E1E] p-2 rounded w-[100%] flex items-center border relative border-gray-500 w-fill h-hug rounded-12 border-1 gap-3" style={{ position: 'relative' }}>

                                                        <div className=' '>
                                                            <ArrowDropUpIcon className='upArrow absolute right-0' onClick={handleIncrement} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', top: '-7px' }} /><br />
                                                            <ArrowDropDownIcon className='downArrow absolute right-0' onClick={handleDecrement} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', bottom: '-4px' }} />
                                                        </div>
                                                        <input
                                                            type="text" inputMode="numeric"
                                                            min={0}
                                                            step={0.01}
                                                            value={count}
                                                            onChange={e => {
                                                                const inputValue = e.target.value;
                                                                if (inputValue === '') {
                                                                    setCount(0);
                                                                } else {
                                                                    setCount(parseFloat(inputValue));
                                                                }
                                                            }}

                                                            className="bg-[#1E1E1E] h-[35px] placeholder-green-500 text-green-500 text-xl outline-none   w-full"
                                                        />
                                                    </div>
                                                    <div className='mt-3'>
                                                        <span>Spread</span><br />
                                                        <span>0.85n EUR</span><br />
                                                        <span>(1.7 pipe)</span>
                                                    </div>
                                                </div>
                                                <div className="inputSearch  flex flex-col gap-3  lg:w-[33%] w-full  py-2">
                                                    <div className='flex justify-between'>
                                                        <span className='text-white flex'>Contract Value</span>
                                                        <span className='text-white flex'>EUR</span>
                                                    </div>

                                                    <div className="bg-[#282828] p-2 rounded w-[100%] relative  flex items-center border-none w-fill h-hug rounded-12 border-1 border-gray-500  gap-3">
                                                        <div className='absolute'>
                                                            <SsidChartIcon style={{ height: '35px', width: '35px', color: 'white' }} />

                                                        </div>
                                                        <input type="text" className="bg-[#282828] text-lg pl-10 h-[36px] text-white outline-none  placeholder-white w-full" placeholder="213.29" />
                                                    </div>

                                                    <div className='flex justify-between mt-3'>
                                                        <div className=''>
                                                            <span>Commission</span><br />
                                                            <span>0.00 EUR</span><br />
                                                            <span>(0.00%)</span>
                                                        </div>
                                                        <div>
                                                            <span>Pipe value</span><br />
                                                            <span>0.50 EUR</span>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="inputSearch  flex flex-col gap-3  lg:w-[33%] w-full  py-2">
                                                    <div className='flex justify-between'>
                                                        <span className='text-white flex'>Margin</span>
                                                        <span className='text-white flex'>EUR</span>
                                                    </div>

                                                    <div className="bg-[#282828] p-2 rounded w-[100%] relative  flex items-center border-none w-fill h-hug rounded-12 border-1 border-gray-500  gap-3">
                                                        <div className='absolute'>
                                                            <SsidChartIcon style={{ height: '35px', width: '35px', color: 'white' }} />

                                                        </div>
                                                        <input type="text" className="bg-[#282828] text-lg pl-10 h-[36px] text-white outline-none  placeholder-white w-full" placeholder="213.29" />
                                                    </div>

                                                    <div className='mt-3'>
                                                        <span className="">Daily swap</span><br />
                                                        <span><span className='text-red-500'>Sell:</span><span>0.02 EUR</span></span><br />
                                                        <span><span className='text-green-500'>Buy:</span><span>1.88 EUR</span></span><br />
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="flex justify-between mt-5">

                                                <div className="flex items-center mb-4 gap-2">
                                                    <label className="custom-checkbox">Stop Loss
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>

                                                </div>

                                                <div className="flex items-center mb-4 gap-2">
                                                    <label className="custom-checkbox">Take Profit
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>

                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:flex-no-wrap md:flex-nowrap flex-wrap gap-3 lg:gap-0">
                                                <div className="flex items-center w-full sm:w-auto buy_button">
                                                    <button

                                                        className="bg-green-500 text-white text-lg px-4 py-2 rounded w-[394px] h-[67px] flex justify-between items-center">
                                                        <span className='text-2xl'>Buy</span>
                                                        <span><span className='text-2xl'>17062</span><span className='text-4xl'>.1</span></span>
                                                    </button>
                                                </div>

                                                <div className="flex items-center w-full sm:w-auto buy_button">
                                                    <button className="bg-red-500 text-white text-lg px-4 py-2 rounded w-[394px] h-[67px] flex justify-between items-center">
                                                        <span className='text-2xl'>Sell</span>
                                                        <span><span className='text-2xl'>17063</span><span className='text-4xl'>.8</span></span>

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'profile' && (
                                        <div>
                                            <div className='bg-[#1E1E1E]  mt-4 p-4 rounded'>
                                                <div className="flex gap-5  flex-wrap lg:flex-nowrap md:flex-nowrap">
                                                    <div className="inputSearch flex flex-col lg:w-[33%] w-full gap-3   py-2">
                                                        <span className='text-white flex'>Price</span>

                                                        <div className="bg-[#1E1E1E] p-2 rounded w-[100%] flex items-center border relative border-gray-500 w-fill h-hug rounded-12 border-1 gap-3" style={{ position: 'relative' }}>

                                                            <div className=' '>
                                                                <ArrowDropUpIcon className='upArrow absolute right-0' onClick={handleInc} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', top: '-7px' }} /><br />
                                                                <ArrowDropDownIcon className='downArrow absolute right-0' onClick={handleDec} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', bottom: '-4px' }} />
                                                            </div>
                                                            <input
                                                                type="text" inputMode="numeric"
                                                                min={0}
                                                                step={0.01}
                                                                value={count1}
                                                                onChange={e => {
                                                                    const inputValue = e.target.value;
                                                                    if (inputValue === '') {
                                                                        setCount(0);
                                                                    } else {
                                                                        setCount1(parseFloat(inputValue));
                                                                    }
                                                                }}

                                                                className="bg-[#1E1E1E] h-[35px] placeholder-green-500 text-green-500 text-xl outline-none   w-full"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="inputSearch flex flex-col gap-3  lg:w-[33%] w-full py-2">
                                                        <div className='flex'>
                                                            <label className="custom-checkbox" style={{ marginRight: '0px' }}>
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <span className='text-white flex'>Expiration date</span>
                                                        </div>
                                                        <div className="bg-[#1E1E1E]   p-2 rounded w-[100%] flex items-center border relative border-gray-500 w-fill h-hug rounded-12 border-1   gap-3">
                                                            <input type="date" value={date} className="bg-[#1E1E1E] h-[36px] w-[100%] w-fill text-white outline-none  placeholder-gray-500 flex-grow" onChange={handleDate} />
                                                        </div>
                                                    </div>

                                                    <div className="inputSearch flex flex-col gap-3   lg:w-[33%] w-full py-2">
                                                        <div className='flex justify-between'>
                                                            <span className='text-white flex'>Time</span>
                                                        </div>
                                                        <div className="bg-[#1E1E1E] p-2 rounded w-[100%] flex items-center border relative border-gray-500 w-fill h-hug rounded-12 border-1 gap-3">
                                                            <input
                                                                type="time"
                                                                className="bg-[#1E1E1E] h-[36px] text-white outline-none placeholder-gray-500 flex-grow"
                                                                value={time}
                                                                onChange={handleTime}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 flex-wrap lg:flex-nowrap md:flex-nowrap">
                                                    <div className="inputSearch flex flex-col lg:w-[33%] w-full gap-3   py-2">
                                                        <span className='text-white flex'>Volume</span>
                                                        
                                                        <div className="bg-[#1E1E1E] p-2 rounded w-[100%] flex items-center border relative border-gray-500 w-fill h-hug rounded-12 border-1 gap-3" style={{ position: 'relative' }}>

                                                            <div className=' '>
                                                                <ArrowDropUpIcon className='upArrow absolute right-0' onClick={handleInc1} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', top: '-7px' }} /><br />
                                                                <ArrowDropDownIcon className='downArrow absolute right-0' onClick={handleDec1} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', bottom: '-4px' }} />
                                                            </div>
                                                            <input
                                                                type="text" inputMode="numeric"
                                                                min={0}
                                                                step={0.01}
                                                                value={count2}
                                                                onChange={e => {
                                                                    const inputValue = e.target.value;
                                                                    if (inputValue === '') {
                                                                        setCount2(0);
                                                                    } else {
                                                                        setCount2(parseFloat(inputValue));
                                                                    }
                                                                }}

                                                                className="bg-[#1E1E1E] h-[35px] placeholder-green-500 text-green-500 text-xl outline-none   w-full"
                                                            />
                                                        </div>
                                                        <div className='mt-3'>
                                                            <span>Spread</span><br />
                                                            <span>0.85 EUR</span><br />
                                                            <span>(1.7 pipe)</span>
                                                        </div>
                                                    </div>

                                                    <div className="inputSearch  flex flex-col gap-3  lg:w-[33%] w-full  py-2">
                                                        <div className='flex justify-between'>
                                                            <span className='text-white flex'>Contract value</span>
                                                            <span className='text-white flex'>EUR</span>
                                                        </div>

                                                        <div className="bg-[#282828] p-2 rounded w-[100%] relative  flex items-center border-none w-fill h-hug rounded-12 border-1 border-gray-500  gap-3">
                                                            <div className='absolute'>
                                                                <SsidChartIcon style={{ height: '35px', width: '35px', color: 'white' }} />

                                                            </div>
                                                            <input type="text" className="bg-[#282828] text-lg pl-10 h-[36px] text-white outline-none  placeholder-white w-full" placeholder="213.29" />
                                                        </div>

                                                        <div className='flex justify-between mt-3'>
                                                            <div className=''>
                                                                <span>Commission</span><br />
                                                                <span>0.00 EUR</span><br />
                                                                <span>(0.00%)</span>
                                                            </div>
                                                            <div>
                                                                <span>Pip value</span><br />
                                                                <span>0.50 EUR</span>

                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className="inputSearch  flex flex-col gap-3  lg:w-[33%] w-full  py-2">
                                                        <div className='flex justify-between'>
                                                            <span className='text-white flex'>Margin</span>
                                                            <span className='text-white flex'>EUR</span>
                                                        </div>

                                                        <div className="bg-[#282828] p-2 rounded w-[100%] relative  flex items-center border-none w-fill h-hug rounded-12 border-1 border-gray-500  gap-3">
                                                            <div className='absolute'>
                                                                <SsidChartIcon style={{ height: '35px', width: '35px', color: 'white' }} />

                                                            </div>
                                                            <input type="text" className="bg-[#282828] pl-10 h-[36px] text-lg text-white outline-none  placeholder-white w-full" placeholder="213.29" />
                                                        </div>

                                                        <div className='mt-3'>
                                                            <span className="">Daily swap</span><br />
                                                            <span><span className='text-red-500'>Sell:</span><span>0.02 EUR</span></span><br />
                                                            <span><span className='text-green-500'>Buy:</span><span>1.88 EUR</span></span><br />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-[#1E1E1E] mt-4 p-4 rounded'>
                                                <div className="flex justify-between">
                                                    <div className="flex items-center mb-4 gap-2">
                                                    
                                                        <label className="custom-checkbox">Stop Loss
                                                            <input type="checkbox"
                                                                checked={isChecked}
                                                                onChange={handleCheckboxChange} />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 gap-2">

                                                        <label className="custom-checkbox">Take Profit
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>

                                                    </div>
                                                </div>
                                                {isChecked &&
                                                    <StopLoss isChecked={isChecked1} handleRadioChange={handleRadioChange} isChecked2={isChecked2} handleRadioChange2={handleRadioChange2} />}
                                            </div>
                                            <div className="mt-8 flex justify-between lg:flex-no-wrap md:flex-nowrap flex-wrap gap-3 lg:gap-0">
                                                <div

                                                    className="flex items-center w-full sm:w-auto buy_button" onClick={openByTab}
                                                    style={{ opacity: isChecked2 && 0.2 }}
                                                >
                                                    <button id="buy-button"
                                                        disabled={isChecked2 && true}

                                                        className="bg-green-500 text-white text-lg px-4 py-2 rounded w-[394px] h-[67px] flex justify-between items-center modal_button">
                                                        <span className='text-2xl'>Buy</span>
                                                        <span><span className='text-2xl'>17062</span><span className='text-4xl'>.1</span></span>
                                                    </button>
                                                </div>
                                                <div className="flex items-center w-full sm:w-auto buy_button" style={{ opacity: isChecked1 && 0.2 }}>
                                                    <button id="sell-button"
                                                        disabled={isChecked1 && true}
                                                        className="bg-red-500 text-white text-lg px-4 py-2 rounded w-[394px] h-[67px] flex justify-between items-center">
                                                        <span className='text-2xl'>Sell</span>
                                                        <span><span className='text-2xl'>17063</span><span className='text-4xl'>.8</span></span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
            }
            {buyTab &&
                <Buy setBuyTab={setBuyTab} />}
        </div>
    );
}

export default MarketAnalysis;
