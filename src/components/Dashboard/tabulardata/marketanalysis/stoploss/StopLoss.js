
import React, { useState } from 'react';
import './StopLoss.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StopLoss = ({ isChecked, handleRadioChange, ischecked2, handleRadioChange2 }) => {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const handleIncrement = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = parseFloat((newCounts[index] + 0.01).toFixed(2));
      return newCounts;
    });
  };

  const handleDecrement = (index) => {
    if (counts[index] > 0) {
      setCounts(prevCounts => {
        const newCounts = [...prevCounts];
        newCounts[index] = parseFloat((newCounts[index] - 0.01).toFixed(2));
        return newCounts;
      });
    }
  };

  return (
    <div className='bg-[#1E1E1E]'>
      {/* First row: Two input boxes */}
      <div className="flex justify-between rounded gap-1 py-2">
        <InputBox index={0} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        <div className="text-white text-2xl flex justify-center items-center py-2">Price</div>
        <InputBox index={1} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      </div>


      {/* Second row: Two radio buttons */}
      <div className="flex justify-center items-center gap-6 py-2">
        <RadioButton isChecked={ischecked2} handleRadioChange={handleRadioChange2} />
        <RadioButton isChecked={!ischecked2} handleRadioChange={handleRadioChange} />
      </div>

      {/* Third row: Two input boxes */}
      <div className="flex justify-between rounded gap-1 py-2">
        <InputBox index={2} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        <div className="text-white text-2xl flex justify-center items-center py-2">Pips</div>

        <InputBox index={3} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      </div>

      {/* Fourth row: Two input boxes */}
      <div className="flex justify-between rounded gap-1 py-2">
        <InputBox index={4} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        <div className="text-white text-2xl flex justify-center items-center py-2">EUR</div>
        <InputBox index={5} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      </div>

      {/* Fifth row: Two input boxes */}
      <div className="flex justify-between rounded gap-1 py-2">
        <InputBox index={6} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        <div className="text-white text-2xl flex justify-center items-center py-2">%</div>
        <InputBox index={7} counts={counts} setCounts={setCounts} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      </div>
    </div>
  );
};

const InputBox = ({ index, counts, setCounts, handleIncrement, handleDecrement, label }) => {
  return (
    <div className="inputSearch flex flex-col w-[40%] gap-3">
      <div className="bg-[#1E1E1E] p-2 rounded w-full flex items-center border relative border-gray-500 h-hug rounded-12 border-1 gap-3" style={{ position: 'relative' }}>
        <div className='absolute right-0'>
          <ArrowDropUpIcon className='upArrow' onClick={() => handleIncrement(index)} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', top: '-7px' }} /><br />
          <ArrowDropDownIcon className='downArrow' onClick={() => handleDecrement(index)} style={{ height: '40px', width: '40px', color: 'white', cursor: 'pointer', marginTop: '-20px' }} />
        </div>
        <input
          type="text"
          inputMode="numeric"
          min={0}
          step={0.01}
          value={counts[index]}
          onChange={e => {
            const inputValue = e.target.value;
            if (inputValue === '') {
              setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index] = 0;
                return newCounts;
              });
            } else {
              setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index] = parseFloat(inputValue);
                return newCounts;
              });
            }
          }}
          className="bg-[#1E1E1E] h-[35px] placeholder-green-500 text-green-500 text-xl outline-none   w-full"
        />
      </div>
    </div>
  );
};

const RadioButton = ({ isChecked, handleRadioChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        onChange={handleRadioChange}
        checked={isChecked}
        className="appearance-none w-6 h-6 border-2 rounded-full focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-green-500  ring-offset-2"
      />
      <label className="ms-2 text-white text-2xl">{label}</label>
    </div>
  );
};

export default StopLoss;








