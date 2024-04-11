import React, { useState, useEffect } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Buy.css';


const Buy = ({ isModalOpen, setIsModalOpen, setBuyTab }) => {
  const [activeTab, setActiveTab] = useState('basicInfo');
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currencyData, setCurrencyData] = useState([]);
  const [currencyDataApi, setCurrencyDataApi] = useState({});
  const [dataKey, setDataKey] = useState([])
  const [marketHours, setMarketHours] = useState({});
  const [tabsValue, setTabsValue] = useState([]);
  console.log(tabsValue, "tabsvalue");
  const fetchData = async () => {
    console.log("calledd")
    try {
      const response = await fetch('http://localhost:4000/currencyValue');
      console.log(response, "resssss")
      const data = await response.json();
      const modifyData = {
        assetsclass: data['assetClass'],
        subclass: data['subclass'],
        currency: data['currency'],
        nominalValueOf1Lost: data['nominalValueOf1Lost'],
        minPositionSize: data['minPositionSize'],
        maxPositionSize: data['maxPositionSize'],
        commission: data['commission'],
        leverage: data['leverage'],
        dailySwap: `${data['dailySwap']['long']}short:-${data['dailySwap']['short']}`,
        expiration: data['expiration'],
        Rollover: `${data['rollover']['Last']}next:-${data['rollover']['Next']}`
      }

      setDataKey(Object.keys(modifyData))
      setCurrencyDataApi(modifyData);
      setCurrencyData(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTabs = async () => {
    console.log("calledd")
    try {
      const response1 = await fetch('http://localhost:4000/tabs');
      console.log(response1, "resssss1")
      const data1 = await response1.json();
      console.log(data1, "dataresssss1")
      setTabsValue(data1[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchTabs();
    console.log(tabsValue, "tabs data");
  }, [isModalOpen]);


  console.log("Currency Data:", currencyData);
  const handleTabClick = (tabs) => {
    setActiveTab(tabs);
    console.log(tabs, "tbsss");
  };
  if (!currencyData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div id="authentication-modal1" className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
        <div className="relative w-[887px]    mx-auto">
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
                      <span className="absolute top-0 left-10  bg-white -700 text-black text-sm p-2 rounded-lg whitespace-nowrap opacity-100 pointer-events-none transition-opacity duration-300">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                      </span>
                    )}
                  </div>
                </h3>
                <CloseOutlinedIcon onClick={() => setBuyTab(false)} style={{ height: '35px', width: '35px', color: 'white' }} />
              </div>
              <div className='flex'>
                <p className='text-white  text-lg'>Instrument which price is based on quotation of the featurecontact for...</p>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-center   text-gray-50">
                <ul className="flex flex-wrap -mb-px ">
                  <li className={`tab inline-block p-4 text-white text-2xl w-1/2 justify-start   rounded-t-lg ${activeTab === 'basicInfo' ? 'border-b-2 border-green-600' : 'border-transparent'} ${activeTab === 'basicInfo' ? 'active' : ''}`}
                    onClick={() => handleTabClick('basicInfo')}
                    aria-current={activeTab === 'basicInfo' ? 'page' : undefined}>
                    <a href="#">
                      Basic INFO
                    </a>
                  </li>
                  <li className={`tab inline-block p-4 text-white text-2xl w-1/2 justify-start   rounded-t-lg ${activeTab === 'performance' ? 'border-b-2 border-green-600' : 'border-transparent'}  ${activeTab === 'performance' ? 'active' : ''}`}
                    onClick={() => handleTabClick('performance')}
                    aria-current={activeTab === 'performance' ? 'page' : undefined}>
                    <a href="#">
                      Performance
                    </a>
                  </li>
                </ul>
                {activeTab === 'basicInfo' && (
                  <div>
                    <div className='bg-[#1E1E1E] rounded-lg'>
                      <div className='flex   rounded-lg  my-5  flex-wrap sm:flex-wrap lg:flex-wrap  basic_container'>
                        {dataKey.map((x, index) => (
                          <div className='w-[25%] px-2' key={index}>
                            <div className='border-r  border-gray-500 py-3 my-[15px]  flex-col flex-wrap justify-center  flex items-center'>
                              <span style={{ color: '#B8B8B8' }}>{x}</span>
                              <span className=''>{currencyDataApi[x]}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='bg-[#1E1E1E] rounded-lg p-3'>
                      <div className='flex'>
                        <h3 className='text-[19px]'>Market hours (Local time)</h3>
                      </div>
                      <div className='flex flex-wrap border_div'>
                        {Object.entries(currencyData?.marketHours || {}).map(([day, hours]) => (
                          <div key={day} className='flex justify-between rounded-lg  my-5 h-[4rem] w-[33%]'>
                            <div className="border-r border-right border-white py-3 my-[15px] flex-col justify-center flex items-center w-full">
                              <span style={{ color: '#B8B8B8' }}>{day}</span>
                              {typeof hours === 'object' ? (
                                <div>
                                  <span className="mr-4">{hours.morning}</span>
                                  <span>{hours.evening}</span>
                                </div>
                              ) : (
                                <span>{hours}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'performance' && tabsValue && tabsValue.content && (
                  <div className='bg-[#1E1E1E] rounded-lg performance_modal'>
                    <div className='flex justify-between rounded-lg flex-wrap lg:flex-nowrap my-5  basic_container1'>
                      <div className="py-3 my-[10px] flex-col justify-center flex items-center performance_wrapper">
                        <span style={{ color: '#fff' }}>pips</span>
                        <span className=''>price change (%)</span>
                      </div>
                      {tabsValue.content.map((item, index) => (
                        <div key={index} className="py-3 my-[10px] w-[12%] flex-col justify-center flex items-center">
                          <span style={{ color: '#B8B8B8' }}>{item.label}</span>
                          <span className=''>{item.value1}</span>
                          <span className=''>{item.value2}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;





