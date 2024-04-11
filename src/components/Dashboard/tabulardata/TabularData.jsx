import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import UncontrolledExample from './tabs/Tab';
import searchIcon from '../../../images/magnifying-glass.png';
import menuRounded from '../../../images/menu (2).png'
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from 'axios';
import img from '../../../images/bitcoin-btc-logo.png'
import MarketAnalysis from './marketanalysis/MarketAnalysis';
import CircleIcon from '@mui/icons-material/Circle';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';


const TabularData = () => {
    const [toggleOpen1, setToggleOpen1] = useState(false);
    const [expandedRow, setExpandedRow] = useState(null);
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [currencyDataBackup, setCurrencyDataBackup] = useState([]);
    const [currencyData, setCurrencyData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const dropdownRef = useRef(null);
    console.log(currencyData)


    const toggleDropdown2 = () => {
        setToggleOpen1(prevState => !prevState);
    };
    const search = (event) => {
        let searchTerm = event.target.value.toString().toUpperCase()
        let data = [...currencyDataBackup]
        let searchData = data.filter((item) => {
            for (let key in item) {
                if (item[key].toString().includes(searchTerm)) {
                    return true;
                }
            }
            return false
        })
        if (searchData.length > 0) {
            console.log(searchData);
            setCurrencyData(searchData);
        } else {
            setCurrencyData(searchData);

        }
    }
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/currencyData')
            console.log(res, "res")
            setCurrencyData(res.data)
            setCurrencyDataBackup(res.data)
            console.log();
        } catch (err) {
            console.log(err)
        }
    }
    const toggleRow = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null);
        } else {
            setExpandedRow(index);
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    };
    useEffect(() => {
        const closeDropdown = (event) => {
            if (toggleOpen1 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setToggleOpen1(false);
            }
        };

        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, [toggleOpen1]);

    return (

        <div className="md:col-span-12 lg:col-span-4" style={{ borderRadius: '20px' }}>
            <div className='flex justify-end gap-2 items-center bg-black py-3 px-2 mb-4'>
                <span className='text-white font-semibold'>Market Analysis</span>
                <div className='bg-[#000] px-2 py-1 flex items-center border border-gray-500' style={{ borderRadius: '10px' }}>

                    <div className="relative inline-block">
                        <button onClick={toggleDropdown2} className=" text-white bg-[#000] font-semibold  rounded inline-flex items-center">
                            <AddIcon style={{ fontSize: 25, color: 'white' }} />
                        </button>
                        {toggleOpen1 && (
                            <div ref={dropdownRef} className="absolute z-50 mt-2 py-2 w-48 bg-[#181C1F] rounded-md shadow-lg right-0 left-auto">
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Acount History</a>
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Calendar</a>
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Open Position</a>
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Education</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=' bg-[#181C1F] h-[auto] pb-3' style={{ borderRadius: '20px' }}>
                <div className="text-sm font-medium text-center mx-3 text-gray-500 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700">
                    <UncontrolledExample />

                </div>
                <div className="inputSearch flex justify-between px-3 py-5">
                    <div className="bg-[#181C1F] p-2 rounded-2xl w-[80%] h-[55px] flex items-center border   h-hug rounded-12 border-1 border-gray-500  gap-3">
                        <img src={searchIcon} className="w-10 h-10  text-white" />
                        <input type="text" onKeyUp={search} className="bg-[#181C1F] text-white outline-none placeholder-gray-500 flex-grow" placeholder="Search e.g EUR/USD" />
                    </div>
                    <div className='bg-[#181C1F] p-4 rounded-2xl h-[55px] flex items-center border border-gray-500'>
                        <img src={menuRounded} style={{ height: '35px', width: '35px', color: 'white' }} />
                    </div>
                </div>
                <div className="table_wrapper_content">
                    {currencyData.length == 0 ? (
                        <div className="text-white text-center">No Result Found</div>
                    ) : (
                        <div className=" px-3 rounded-lg lg:me-3 table-wrapper">
                            <table className="w-full text-white border-collapse relative">
                                <thead className="bg-[#0D171B] p-4 rounded-l-3xl">
                                    <tr className="" style={{ color: '#898989' }}>
                                        <th className="px-4 text-center rounded-l-2xl py-2 w-[25%]" >SYMBOL</th>
                                        <th className="px-4 text-center py-2 w-[25%] border-gray-500">CHANGE</th>
                                        <th className="px-4 text-center py-2 w-[25%] border-gray-500">BID</th>
                                        <th className="px-4 text-center rounded-r-2xl py-2 w-[25%]">ASK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currencyData?.map((currency, index) => (
                                        <React.Fragment key={index}>
                                            <tr className="">
                                                <td
                                                    className="px-4 text-left py-3 flex items-center cursor-pointer"
                                                    onClick={() => toggleRow(index)}
                                                >
                                                    <img src={img} style={{ height: '25px', width: '25px' }} className="mr-2" alt="Currency Logo" />
                                                    <span>{currency.currencyName}</span>
                                                </td>
                                                <td className="px-4 text-center text-red-500 py-3 w-[25%]">{currency.Change}</td>
                                                <td className="px-4 text-center py-3 w-[25%]">{currency.Bid}</td>
                                                <td className="px-4 text-center py-3 w-[25%]">{currency.Ask}</td>
                                            </tr>
                                            {expandedRow === index && (
                                                <tr>
                                                    <td colSpan="4" className="px-4">
                                                        <div className=''>
                                                            <div className='flex justify-end  py-3' style={{ borderBottom: '2px solid #80808017' }}>
                                                                <div className='flex gap-2 items-center '>
                                                                    <div className="relative inline-block">
                                                                        <ErrorOutlineIcon
                                                                            className="h-6 w-6 cursor-pointer"
                                                                            onMouseEnter={() => setShowTooltip(true)}
                                                                            onMouseLeave={() => setShowTooltip(false)}
                                                                        />
                                                                        {showTooltip && (
                                                                            <span className="absolute top-[-52px]   transform  bg-gray-700 text-white text-lg p-2 rounded-lg whitespace-nowrap opacity-100 pointer-events-none transition-opacity duration-300" style={{ left: '-320px' }}>
                                                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <span className='text-white flex items-center text-sm'>SL<CircleIcon style={{ height: '13px', width: '13px', }} />TP</span>
                                                                    <AddIcon style={{ height: '22px', width: '25px', color: 'white' }} />
                                                                    <Battery0BarIcon style={{ height: '20px', width: '20px', color: 'white' }} />
                                                                    <DeleteOutlineOutlinedIcon style={{ height: '22px', width: '20px', color: 'white' }} />
                                                                    <GridViewOutlinedIcon style={{ height: '20px', width: '25px', color: 'white' }} />
                                                                </div>
                                                            </div>
                                                            <div className='flex items-center lg:justify-between lg:gap-0 gap-5  py-3' style={{ borderBottom: '2px solid #80808017' }}>
                                                                <div>
                                                                    <button className="bg-green-500 text-white px-4 py-2 rounded flex flex-col items-start text-xs">
                                                                        <span>BUY</span>
                                                                        <span className="whitespace-nowrap">17062.1</span>
                                                                    </button>
                                                                </div>
                                                                <div className='flex items-center gap-8'>
                                                                    <button className="text-white font-semibold bg-[#181C1F] p-2 rounded-2xl ml-2 flex items-center border border-gray-500 h-10">
                                                                        <AddIcon style={{ fontSize: 25, color: 'white' }} onClick={toggleModal} />
                                                                    </button>
                                                                    <div className='text-center'>
                                                                        <span className="text-white block text-xs">0.001</span>
                                                                        <span className="text-white block text-xs" style={{ fontSize: '15px' }}>~~ 213.29 <span className='text-xs'>EUR</span></span>
                                                                    </div>
                                                                    <button className="text-white font-semibold bg-[#181C1F] p-2 rounded-2xl mr-2 flex items-center border border-gray-500 h-10">
                                                                        <RemoveOutlinedIcon style={{ fontSize: 25, color: 'white' }} />
                                                                    </button>
                                                                </div>
                                                                <div className='flex items-center'>
                                                                    <button className="bg-red-500 text-white px-4 py-2 rounded flex flex-col items-start text-xs">
                                                                        <span>SELL</span>
                                                                        <span className="whitespace-nowrap">17063.8</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="flex flex-row justify-between py-3">
                                                                    <div className="flex flex-col text-sm">
                                                                        <span>LOW</span>
                                                                        <span className="mt-2">17010.1</span>
                                                                    </div>
                                                                    <div className="flex flex-col text-sm">
                                                                        <span>DAILY CHANGE</span>
                                                                        <span className="mt-2 text-green-500">0.31%</span>
                                                                    </div>
                                                                    <div className="flex flex-col text-sm">
                                                                        <span>SPREAD</span>
                                                                        <span className="mt-2">1.4</span>
                                                                    </div>
                                                                    <div className="flex flex-col text-sm">
                                                                        <span>HIGH</span>
                                                                        <span className="mt-2">17083.80</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <MarketAnalysis isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default TabularData
