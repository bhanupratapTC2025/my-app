'use client';
import React, { useState } from 'react';
import AllCategory from './AllCategory';
import MenCategory from './MenCategory';
import WomenCategory from './WomenCategory';
import KidsCategory from './kidCategory';




const TabPanel = ({ children, value, index }) => {
  return (
    <div className={value !== index ? 'hidden' : 'py-6'}>
      {value === index && children}
    </div>
  );
};

const TopCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabLabels = [
 
    'Men',
    'Women',
    'Kids',
    

  ];

  const handleTabClick = (index) => {
    setTabIndex(index);
  };

  return (
    <>
        <div className='text-center text-2xl font-serif font-bold p-5'>Shop by Category</div>

      {/* 🔹 Mobile: Stack all sections */}
      

      {/* 🔹 Desktop/Tablet: Tab navigation */}
      
      <div className="block ">
        <div className="flex  overflow-x-auto border-b border-gray-300 justify-center">
          {tabLabels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`flex py-3 px-6 whitespace-nowrap text-lg  font-bold font-serif focus:outline-none ${
                tabIndex === index
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-[#356877]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <TabPanel value={tabIndex} index={0}>
          <MenCategory  />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <WomenCategory />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <KidsCategory />
        </TabPanel>

      


      </div>
    </>
  );
};

export default TopCategory;
