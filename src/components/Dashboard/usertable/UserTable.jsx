import React, { useState, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profile from '../../../images/3135715.png';
import profile1 from '../../../images/3135789.png';
import bitcoin from '../../../images/Bitcoin.svg'
import Ethereum from '../../../images/Ethereum.svg';
import Dash from '../../../images/Dash.svg'
import Euro from '../../../images/Euro.svg';
import litecoin from '../../../images/litecoin.svg'

function UserTable() {
    const [tradersData, setTraders] = useState([]);
    const [bitcoinPrice, setBitcoinPrice] = useState([]);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
        fetchData1();
        fetchData2();
    }, [])

    const fetchData = async () => {
        console.log("hii")
        try {
            const responce = await fetch('http://localhost:4000/traders');
            console.log(responce);
            const data = await responce.json();
            console.log(data)
            setTraders(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }
    const fetchData1 = async () => {
        try {
            const response = await fetch('http://localhost:4000/Bitcoin_Price_Statistics');
            console.log(response);
            const data = await response.json();
            setBitcoinPrice(data)
            console.log(data);
        }
        catch (error) {
            console.log(error, "data handling");
        }
    }
    const fetchData2 = async () => {
        try {
            const response = await fetch('http://localhost:4000/Recent_Activity');
            console.log(response, 'response data');
            const data = await response.json();
            console.log(data);
            setTableData(data);
        }
        catch (error) {
            console.log(error, "table data");
        }
    }
    return (
        <>
            <div className="lg:col-span-5 md:col-span-12 mt-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#181C1F] h-[auto] py-4 px-5 mx-auto'" style={{ borderRadius: '20px' }}>
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 ">
                        <div className='text-white'>
                            <span className=''> Recent Activity</span>
                        </div>
                        <div>
                            <MoreVertIcon style={{ color: '#fff' }} />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-white">
                        <thead className="text-xs text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-[10%] rounded-l-2xl">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 w-[30%]">
                                    Currency
                                </th>
                                <th scope="col" className="px-6 py-3 w-[30%]">
                                    Form/ To
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-r-2xl w-[30%]">
                                    Time & Status
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* {tableData.map((x,index)=>(
                            <tr className="text-white">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <span>{x?.Date}</span>
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <div className='flex items-center gap-2'>
                                        <img src={bitcoin} style={{ height: '25px', width: '25px' }} />
                                        <div className='item-center'>
                                            <span className='text-gray-500'>Currency</span><br />
                                            <span className='text-white'>Bitcoin-<span className='text-gray-500'>0.0092312</span></span>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-white whitespace-nowrap">
                                    <img src={profile} alt='image' style={{ height: '30px', width: '30px' }} />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Neil Sims</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className='text-gray-500'>Delivered Time</span><br />
                                            <span className='text-white'>04:24PM -<span className='text-red-500'>Sent</span></span>
                                        </div>
                                    </div>
                                </td>

                            </tr>))} */}
                            {tableData && tableData.map((x, index) => (
                                <tr className="text-white" key={index}>
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <span>{x?.Date}</span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className='flex items-center gap-2'>
                                            <img src={bitcoin} style={{ height: '25px', width: '25px' }} alt="Bitcoin" />
                                            <div className='item-center'>
                                                <span className='text-gray-500'>Currency</span><br />
                                                <span className='text-white'>Bitcoin-<span className='text-gray-500'>{x?.Currency?.Amount}</span></span>
                                            </div>
                                        </div>
                                    </td>

                                    <th scope="row" className="flex items-center px-6 py-4 text-white whitespace-nowrap">
                                        <img src={profile} alt='profile' style={{ height: '30px', width: '30px' }} />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{x?.From_To?.Name}</div>
                                        </div>
                                    </th>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="me-2">

                                               
                                                <span className={`text-gray-500 ${x?.Time_Status?.Status === 'Received' ? 'text-gray-500' : x?.Time_Status?.Status === 'Processing' ? 'text-gray-500' : x?.Time_Status?.Status === 'Sent' ? 'text-gray-500' : ''}`}>
                                                    {x?.Time_Status?.Status === 'Received' ? 'Received Time' : x?.Time_Status?.Status === 'Processing' ? 'Sent Time' : x?.Time_Status?.Status === 'Sent' ? 'Delivered Time' : 'Delivered Time'}
                                                </span>
                                                <br />
                                                <span className='text-white'>
                                                    {x?.Time_Status?.Time} - <span className={`text-${x?.Time_Status?.Status === 'Received' ? 'green-500' : x?.Time_Status?.Status === 'Processing' ? 'blue-500' : x?.Time_Status?.Status === 'Sent' ? 'red-500' : 'text-red-500'}`}>
                                                        {x?.Time_Status?.Status === 'Received' ? 'Received' : x?.Time_Status?.Status === 'Processing' ? 'Processing' : x?.Time_Status?.Status === 'Sent' ? 'Sent' : 'Delivered'}
                                                    </span>
                                                </span>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                           
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="lg:col-span-3 md:col-span-12 mt-5">
                <div className='bg-[#181C1F] h-[auto] py-4 px-5 mx-auto' style={{ borderRadius: '20px' }}>
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 ">
                        <div className='text-white'>
                            <span className=''>Bitcoin Price Statistics</span>
                        </div>
                        <div className='flex'>
                            <div>
                                <button className="bg-green-500 text-white px-4 py-2 rounded flex flex-col items-start text-xs">
                                    <span>Buy Now</span>
                                </button>
                            </div>
                            <MoreVertIcon style={{ color: '#fff' }} />
                        </div>


                    </div>

                    <div className="flex justify-between text-white mt-7">
                        <div>
                            Bitcoin Value in USD
                        </div>
                        <div>
                            $29,472.60
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            Price Change
                            <span className="bg-green-100 text-green-800 text-xs font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Increased</span>
                        </div>
                        <div className='text-green-500'>
                            +280.30(0.96%) today
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            Bitcoin Value in USD
                        </div>
                        <div>
                            $29,472.60
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            Market Rank
                            <span className="bg-green-100 text-green-800 text-xs font-medium ml-3 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">3 Years</span>
                        </div>
                        <div className='text-white'>
                            #1
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            This Week High
                        </div>
                        <div className='text-green-500'>
                            $68,990.90
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            This Week Low
                        </div>
                        <div className='text-red-500'>
                            $28,825.76
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            Market Dominance
                        </div>
                        <div>
                            70%
                        </div>
                    </div>
                    <div className="flex justify-between text-white mt-6">
                        <div>
                            Alltime High
                        </div>
                        <div className='text-green-500'>
                            $68,990.90
                        </div>
                    </div>

                </div>
            </div>
            <div className="lg:col-span-4 md:col-span-12 mt-5">
                <div className='bg-[#181C1F] h-[auto] py-4 px-5 mx-auto' style={{ borderRadius: '20px' }}>
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-7 ">
                        <div className='text-white'>
                            <span className=''>Top Traders</span>
                        </div>
                        <span className='text-white'>View All</span>
                    </div>
                    {tradersData.map((x, index) => (
                        <div key={index} className='flex justify-between  items-center'>
                            <div scope="row" className="flex items-center  py-2 font-medium  whitespace-nowrap text-white">
                                <img src={profile1} alt='image' style={{ height: '30px', width: '30px' }} />

                                <div className="ps-3">
                                    <div className="text-base font-semibold">{x?.name}</div>
                                    <div className="text-gray-500">{x?.desc}</div>
                                </div>

                            </div>
                            <div className="ps-3">
                                <div className="text-base text-green-500 font-semibold">{x?.amount?.totalAmount} -{x?.amount?.Short}</div>
                                <div className="text-gray-500 flex justify-end">{x?.amount?.convertedPrice}</div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>


        </>
    )
}

export default UserTable
