import React, { useState, useRef, useEffect } from 'react';
import buy_sell_image from '../../../images/media-82.png'

const Wallet = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    const [toggleOpen1, setToggleOpen1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('');
    const dropdownRef1 = useRef(null);

    // const [isChecked, setIsChecked] = useState(false);
    // const [isChecked2, setIsChecked2] = useState(false);
    const [buySellBtn, setBuySellBtn] = useState('Buy')
    const handleRadioChange = (event) => {
        // 
        // setIsChecked(event.target.checked);
    };

    const toggleDropdown = () => {
        setToggleOpen(!toggleOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setToggleOpen(false);
    };

    const toggleDropdown1 = () => {
        setToggleOpen1(!toggleOpen1);
    };

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setToggleOpen1(false);
    };
    const buySell = (e) => {
        setBuySellBtn(e)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setToggleOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside1 = (event) => {
            if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
                setToggleOpen1(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside1);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside1);
        };
    }, []);


    return (
        <div className=' bg-[#181C1F] h-[auto] py-4 px-5 mx-auto' style={{ borderRadius: '20px' }}>
            <div className='flex justify-between'>
                <div>
                    <div className='flex gap-2 p-3'>
                        <h1 className='text-white'>Wallet Value</h1>
                        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-green-300">12.2%</span>
                    </div>
                    <div className='mb-2'>
                        <span className='text-white text-4xl font-bold'>
                            $132,12933
                        </span><br />
                        <span className='text-white '><span>12</span> BTC</span>
                    </div>
                </div>
                <div>
                    <div className='buy-sell-image'>
                        <img src={buy_sell_image} alt='image' />
                    </div>
                </div>
            </div>
            <div className="w-full mt-5">
                <hr />
            </div>

            <div className='flex items-center bg-[#0D171B] px-3 lg:justify-between rounded-lg lg:gap-0 gap-5  py-3 mt-4'>
                <div>
                    <button className="bg-green-500  text-white px-4 py-2  justify-center flex flex-col items-center text-base w-32 rounded-lg" onClick={() => buySell('Buy')}>
                        <span>BUY</span>
                    </button>

                </div>
                <div className='flex items-center'>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex flex-col items-center w-32  text-base" onClick={() => buySell('Sell')}>
                        <span>SELL</span>
                    </button>
                </div>
            </div>
            <div className='input_box flex mt-6'>
                <div className="bg-[#181C1F] p-2 rounded w-[80%] h-[45px] flex items-center border   h-hug rounded-12 border-1 border-gray-500  gap-3">
                    <input type="text" className="bg-[#181C1F] text-white outline-none placeholder-gray-500 flex-grow" placeholder="Select Currency" />
                </div>
                <div className="relative inline-block">
                    <button onClick={toggleDropdown} className="bg-[#181C1F] h-[45px]  border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span>{selectedOption || 'BTC'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="relative">
                        <div onClick={() => setToggleOpen(!toggleOpen)}>
                        </div>
                        {toggleOpen && (
                            <div ref={dropdownRef} className="absolute z-50 mt-2 py-2 w-20 bg-black rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('BTC')}>BTC</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('ETH')}>ETH</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('XRP')}>XRP</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('DASH')}>DASH</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('NEO')}>NEO</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('LTC')}>LTC</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick('BSD')}>BSD</a>

                            </div>
                        )}
                    </div>
                </div>


            </div>

            <div className='input_box flex mt-6'>
                <div className="bg-[#181C1F] p-2 rounded w-[80%] h-[45px] flex items-center border   h-hug rounded-12 border-1 border-gray-500  gap-3">
                    <input type="text" className="bg-[#181C1F] text-white outline-none placeholder-gray-500 flex-grow" placeholder="Select Currency" />
                </div>
                <div className="relative inline-block">
                    <button onClick={toggleDropdown1} className="bg-[#181C1F] h-[45px]  border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span>{selectedOption1 || 'USD'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="relative">
                        <div onClick={() => setToggleOpen1(!toggleOpen1)}>
                        </div>
                        {toggleOpen1 && (
                            <div ref={dropdownRef1} className="absolute z-50 mt-2 py-2 w-20 bg-black rounded-md shadow-lg">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('BTC')}>USD</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('ETH')}>AED</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('XRP')}>AUD</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('DASH')}>ERP</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('NEO')}>NEO</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('LTC')}>LTC</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-900 text-gray-500" onClick={() => handleOptionClick1('BSD')}>BSD</a>

                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <div className=''>
                    <span className="font-bold text-white mr-3">Price:</span>
                    <span className="text-gray-500">6.003435</span>
                </div>
                <div>
                    <span className="text-white">BTC</span>
                </div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <div className=''>
                    <span className="font-bold text-white mr-3">Amount:</span>
                    <span className="text-gray-500">2,344543.00</span>
                </div>
                <div>
                    <span className="text-white">BTC</span>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <div className=''>
                    <span className="font-bold text-white mr-3">Total:</span>
                    <span className="text-white">22.00 BTC</span>
                </div>
                
            </div>
            <div className="flex items-center mt-5">
                <div className=''>
                    <span className="font-bold text-green-500 mr-3 text-sm">Additional Charges:</span>
                    <span className="text-green-500 text-sm">0.32%(0.0001231BTC)</span>
                </div>
                
            </div>
            <div className="flex items-center mt-5">
                <div className=''>
                    <span className="font-bold text-white mr-3">Select Payment Method:</span>
                </div>
                
            </div>

            {/* buy */}
            {
                buySellBtn === "Buy" && (
                    <>
                        <div className="flex justify-between items-center gap-6 w-full mt-5">
                            <div className="flex items-center border py-1 px-4 lg:justify-between rounded-lg">
                                <input
                                    type="radio"
                                    onChange={handleRadioChange}

                                    name="Buy"
                                    className="appearance-none w-6 h-6 border-2 rounded-full focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-green-500  ring-offset-2"
                                />
                                <label htmlFor="sell-radio" className="ms-2 text-white text-sm flex items-center  lg:gap-0 gap-5 py-3">
                                    Credit /Debit Cards
                                </label>
                            </div>
                            <div className="flex items-center border py-1 px-4 lg:justify-between rounded-lg">
                                <label htmlFor="buy-radio" className="mr-2 text-white text-sm flex items-center  lg:justify-between  lg:gap-0 gap-5 py-3">Paypal</label>

                                <input
                                    name="Buy"
                                    type="radio"
                                    id="buy-radio"
                                    className="appearance-none w-6 h-6 border-2 rounded-full focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-green-500  ring-offset-2"
                                    onChange={handleRadioChange}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="bg-green-500 text-white px-4 py-2 mt-6  justify-center flex flex-col items-center text-base w-full rounded-lg">
                                <span>Buy</span>
                            </button>

                        </div>
                    </>
                )}
            {/* sell */}
            {buySellBtn === "Sell" && (
                <>
                    <div className="flex justify-between items-center gap-6 w-full mt-5">
                        <div className="flex items-center border py-1 px-4 lg:justify-between rounded-lg">
                            <input
                                type="radio"
                                onChange={handleRadioChange}
                                name="buy"
                                className="appearance-none w-6 h-6 border-2 rounded-full focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-green-500  ring-offset-2"
                            />
                            <label htmlFor="sell-radio" className="ms-2 text-white text-sm flex items-center  lg:gap-0 gap-5 py-3">
                                Credit /Debit Cards
                            </label>

                        </div>
                        <div className="flex items-center border py-1 px-4 lg:justify-between rounded-lg">
                            <label htmlFor="buy-radio" className="mr-2 text-white text-sm flex items-center  lg:gap-0 gap-5 py-3">Paypal</label>
                            <input
                                name="buy"
                                type="radio"
                                id="buy-radio"
                                className="appearance-none w-6 h-6 border-2 rounded-full focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-green-500  ring-offset-2"
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button className="bg-red-500 text-white px-4 py-2 mt-6  justify-center flex flex-col items-center text-base w-full rounded-lg">
                            <span>Sell</span>
                        </button>

                    </div>
                </>
            )
            }
        </div>
    )
}


export default Wallet;
