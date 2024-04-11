import React from 'react'

function Overview() {
    return (

        <>
            <div className=" lg:col-span-4 text-white text-left">
                <div className='bg-[#181C1F] h-[12rem]  text-center' style={{ borderRadius: '20px' }}>
                    <h2 className="mb-4 text-gray-200 pt-6 text-2xl">
                        My Wallet
                    </h2>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="font-normal">$</span>17,879
                    </h1>
                    <h3 className="text-gray-200">
                        <span className="text-green-500 font-bold">+$1,587</span> Last Update Today
                    </h3>
                </div>
            </div>

            <div className=" lg:col-span-4 text-white text-left">
                <div className='bg-[#181C1F] h-[12rem]   text-center' style={{ borderRadius: '20px' }}>
                    <h2 className="mb-4 text-gray-200 pt-6 text-2xl">
                        Total Investment
                    </h2>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="font-normal">$</span>1,587
                    </h1>
                    <h3 className="text-gray-200">
                        <span className="text-red-500 font-bold">+$1,587</span> Last Update Today
                    </h3>
                </div>
            </div>

            <div className="lg:col-span-4 text-white text-left">
                <div className='bg-[#181C1F] h-[12rem]  text-center' style={{ borderRadius: '20px' }}>
                    <h3 className="mb-4 text-gray-200 pt-6 text-2xl">
                        Return of Investment
                    </h3>
                    <h1 className="text-4xl font-bold mb-4">
                        44.9%
                    </h1>
                    <h3 className="text-gray-200">
                        <span className="text-green-700 font-bold">+$15.9%</span> Last Update An Hour Ago
                    </h3>
                </div>
            </div>

        </>

    )
}

export default Overview
