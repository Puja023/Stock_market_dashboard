
import React, { useEffect, useState, useRef } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import profile from '../../../../../images/3135715.png';
import profile1 from '../../../../../images/3135789.png';

const PostsTabs = () => {
    const [postData, setPostData] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');
    const emojiPickerRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/postTabs');
            const data = await response.json();
            setPostData(data.reverse());
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const postDataApi = async () => {
        try {
            const imageUrl = selectedFile ? URL.createObjectURL(selectedFile) : null;
            const name = 'You';
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()}, ${getMonthName(currentDate.getMonth())} - ${formatTime(currentDate)}`;
            const tags = ['Nature'];

            const response = await fetch('http://localhost:4000/postTabs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    timestamp: formattedDate,
                    content: inputValue,
                    message: inputValue,
                    tags,
                    img: imageUrl
                })
            });

            if (!response.ok) {
                throw new Error('Failed to post data');
            }

            setInputValue('');
            setSelectedFile(null);
            fetchData(); // Fetch updated data after posting
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`http://localhost:4000/postTabs/${postId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            fetchData(); // Fetch updated data after deletion
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (event, emojiObject) => {
        const emoji = event.native;
        setInputValue((prevInputValue) => prevInputValue + emoji);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setSelectedFileName(file.name);
    };

    const handleSubmit = () => {
        if (selectedFile) {
            postDataApi();
        } else {
            console.error('No file selected.');
        }
    };
    const getMonthName = (monthIndex) => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return months[monthIndex];
    };
    
    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
    
        return `${hours}:${minutes.toString().padStart(2, '0')}${period}`;
    };

    return (
        <div className='border border-gray-500'>
            <ul>
                <li>
                    <div className='flex ' style={{ padding: '0.6rem 1.25rem' }}>
                        <div className='inputArea gap-4 flex w-[100%]'>
                            <div className='bg-[#181C1F] p-2 rounded w-[100%] h-[45px] flex items-center border h-hug rounded-12 border-1 border-gray-500 gap-3'>
                                <input
                                    type='text'
                                    placeholder='Recipient Post'
                                    className='bg-[#181C1F] w-full text-white outline-none placeholder-gray-500 flex-grow'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <div>
                                    {selectedFile && (
                                        <div className="text-white">{selectedFileName}</div>
                                    )}
                                </div>
                            </div>
                            <div className='inputIcons relative flex items-center gap-4'>
                                <SentimentSatisfiedAltIcon
                                    style={{ height: '30px', width: '30px', color: 'white', cursor: 'pointer' }}
                                    onClick={toggleEmojiPicker}
                                />
                                <label htmlFor="myfile" id="uploadIcon">
                                    <AttachFileIcon style={{ height: '30px', width: '30px', color: 'white', cursor: 'pointer' }} />
                                </label>
                                <input type="file" id="myfile" name="myfile" style={{ display: 'none' }} onChange={handleFileChange} />
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500"
                                    onClick={handleSubmit}
                                >
                                    Post
                                </button>
                                {showEmojiPicker && (
                                    <div ref={emojiPickerRef} className="absolute top-[3rem] right-0 z-50 emoji-picker-container">
                                        <Picker data={data} onEmojiSelect={handleEmojiClick} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </li>
                <div className='overflow-y-auto h-[537px]'>
                    {postData.map((x, index) => (
                        <li key={index}>
                            {x && (
                                <div className='grid grid-cols-12 gap-4' style={{ padding: '0.65rem 1.25rem' }}>
                                    <div className='xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12'>
                                        <div className='rounded border border-gray-500 flex justify-between' style={{ padding: '0.65rem 1.25rem' }}>
                                            <div className='flex items-start flex-wrap'>
                                                <div className='profile'>
                                                    <img src={profile} style={{ height: '50px', width: '50px' }} />
                                                </div>
                                                <div>
                                                    <div className='p-2'>
                                                        {x.name && <p className="mb-1 font-semibold text-white">{x.name}</p>}
                                                        {x.timestamp && <p className="text-[.6875rem] mb-2 text-white">{x.timestamp}</p>}
                                                        {x.content && <p className="text-[0.75rem] text-[#8c9097] mb-0">{x.content}</p>}
                                                        {x.url && (
                                                            <p className="text-[0.75rem] text-[#8c9097] mb-0">
                                                                <a href={x.url} className="text-blue-500">{x.url}</a>
                                                            </p>
                                                        )}
                                                        {x.img && <img src={x.img} className='h-[70px] mt-2 mb-2 rounded-lg' />}
                                                    </div>
                                                    <div className='flex items-center md:mb-0 mb-2'>
                                                        {/* <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Comment</span> */}
                                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                            <ThumbUpAltOutlinedIcon style={{ height: '13px', width: '13px', color: 'green' }} />
                                                        </span>
                                                        <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                                                            <ShareOutlinedIcon style={{ height: '13px', width: '13px', color: 'pink' }} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <DeleteIcon
                                                    className='h-[20px] w-[20px] text-white cursor-pointer mr-4'
                                                    onClick={() => handleDelete(x.id)}
                                                />
                                                {x.tags && (
                                                    <span className={`bg-${x.tags.includes('Nature') ? 'green' : x.tags.includes('Travel') ? 'blue' : 'purple'}-100 text-${x.tags.includes('Nature') ? 'green' : x.tags.includes('Travel') ? 'blue' : 'purple'}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300`}>
                                                        {x.tags}
                                                    </span>
                                                )}
                                                <MoreVertOutlinedIcon style={{ height: '20px', width: '20px', color: 'white' }} />
                                                {x.tags && x.tags.includes('Nature') && (
                                                    <div className="flex -space-x-4 rtl:space-x-reverse mt-4">
                                                        <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt="" />
                                                        <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={profile1} alt="" />
                                                        <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt="" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </div>
                <div className='flex justify-center py-2'>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500"
                    >
                        Show All
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default PostsTabs;
