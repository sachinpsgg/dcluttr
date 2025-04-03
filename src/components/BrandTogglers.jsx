import React, { useState } from 'react';
import Blinkit from '../assets/blinkit.png'
import Zepto from '../assets/zepto.png'
import Instamart from '../assets/instamart.png'

const BrandTogglers = () => {
    const [activeButton, setActiveButton] = useState('Blinkit');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="flex gap-3 p-1 border-1 border-[#F1F1F1] rounded-2xl w-fit">
            <button
                onClick={() => handleButtonClick('Blinkit')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-opacity duration-300 ${
                    activeButton === 'Blinkit'
                        ? 'bg-[#DFEAE8] opacity-100'
                        : 'bg-transparent opacity-50'
                }`}
            >
                <img src={Blinkit} alt="Blinkit" className="w-5 h-5" />
                <span className="text-[#027056] text-[14px] font-medium">Blinkit</span>
            </button>

            <button
                onClick={() => handleButtonClick('Zepto')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-opacity duration-300 ${
                    activeButton === 'Zepto'
                        ? 'bg-[#DFEAE8] opacity-100'
                        : 'bg-transparent opacity-50'
                }`}
            >
                <img src={Zepto} alt="Blinkit" className="w-5 h-5" />
                <span className="text-[#027056] text-[14px] font-medium">Zepto</span>
            </button>
            <button
                onClick={() => handleButtonClick('Instamart')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-opacity duration-300 ${
                    activeButton === 'Instamart'
                        ? 'bg-[#DFEAE8] opacity-100'
                        : 'bg-transparent opacity-50'
                }`}
            >
                <img src={Instamart} alt="Blinkit" className="w-5 h-5" />
                <span className="text-[#027056] text-[14px] font-medium">Instamart</span>
            </button>
        </div>
    );
};

export default BrandTogglers;