import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EnhancedTable from '../../Dashboard/openpositiontable/enhancedTable/EnhancedTable'


const OpenPositionTable = () => {
    const [toggleOpen2, setToggleOpen2] = useState(false);
    const dropdownRef2 = useRef(null);
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
    return (
        <div className="col-span-12 md:col-span-12   bg-black mb-[4rem]">
            <div className='flex justify-start gap-2 items-center  mt-5 px-2 mb-5'>
                <span className='text-white font-semibold'>Open Position</span>
                <div className='bg-[#000] px-2 py-1 flex items-center border border-gray-500' style={{ borderRadius: '10px' }}>
                    <div className="relative inline-block">
                        <button onClick={toggleDropdown3} className=" text-white bg-[#000] font-semibold  rounded inline-flex items-center">
                            <AddIcon style={{ fontSize: 25, color: 'white' }} />
                        </button>
                        {toggleOpen2 && (
                            <div ref={dropdownRef2} className="absolute z-50 mt-2 py-2 w-48 bg-[#181C1F] rounded-md shadow-lg left-0 right-auto">
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Acount History</a>
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Calendar</a>
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Open Position</a>
                                <a href="#" className="block px-4 py-2  hover:bg-gray-900 text-white">Education</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <EnhancedTable />
        </div>
    )
}
export default OpenPositionTable
