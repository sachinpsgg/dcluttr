import React, { useState } from 'react';
import SalesChart from "./SalesChart.jsx";
import {CalendarDays, ChartLine, ChevronDown} from "lucide-react";
import PieChartComponent from "./PieChartComponent.jsx";
import {cityLevelData, cityTotal, skuLevelData, skuTotal} from "../utils/sampleData.jsx";
import BrandTogglers from "./BrandTogglers.jsx";
import SKUDataTable from "./Table.jsx";

const Dashboard = () => {
    const [isToggled, setIsToggled] = useState(true);
    const [selectedSKUs, setSelectedSKUs] = useState({
        'Protein Bar 100g': true,
        'Choco Bar 100g': true,
        'SKU3': false,
        'SKU4': false,
    });

    const [selectedCities, setSelectedCities] = useState({
        'Delhi': true,
        'Bengaluru': true,
        'SKU3': false,
        'SKU4': false,
    });

    const handleSKUCheckboxChange = (skuName) => {
        setSelectedSKUs((prev) => ({
            ...prev,
            [skuName]: !prev[skuName],
        }));
    };

    const handleCityCheckboxChange = (cityName) => {
        setSelectedCities((prev) => ({
            ...prev,
            [cityName]: !prev[cityName],
        }));
    };
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    return (
        <div className="flex flex-col border-2 border-[#EBEBEB] rounded-xl">
            <div className="flex items-center flex-row border-b-1 border-[#EBEBEB]  justify-between px-3 py-2">
                <h2 className="text-lg font-medium text-[#031B15] text-[14px]">Quick Commerce</h2>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-gray-300">
                        <label className="relative inline-flex items-center justify-between gap-4">
                            <ChartLine size={17} strokeWidth={2} className="text-black" />
                            <input
                                type="checkbox"
                                checked={isToggled}
                                onChange={handleToggle}
                                className="sr-only peer"
                            />
                            <div
                                className={`w-[25px] h-[15px] bg-gray-200 rounded-full peer peer-checked:bg-[#027056] transition-colors duration-300 flex items-center`}
                            >
                                <div
                                    className={`w-[14px] h-[15px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                        isToggled ? 'translate-x-[12px]' : 'translate-x-[2px]'
                                    } `}
                                ></div>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-gray-300 w-full">
                        <CalendarDays size={20} strokeWidth={1.5} />
                        <p className="text-[#031B15] text-[14px]">Aug 01, 024 - Aug 03, 2024</p>
                        <ChevronDown size={20} strokeWidth={1.5}/>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-row border-b-1 border-[#EBEBEB]  justify-between px-3 py-2">
                <BrandTogglers/>
            </div>
            {isToggled && (
                <div className="flex items-center flex-row border-b-1 border-[#EBEBEB] gap-4 p-4">
                    <SalesChart title="Sales (MRP)"/>
                    <SalesChart title="Total Quantity Sold"/>
                    <PieChartComponent/>
                </div>
            )}
            <SKUDataTable title="SKU Level Data"
                   data={skuLevelData}
                   total={skuTotal}
                   selectedItems={selectedSKUs}
                   onCheckboxChange={handleSKUCheckboxChange}/>
            <SKUDataTable
                title="City Level Data"
                data={cityLevelData}
                total={cityTotal}
                selectedItems={selectedCities}
                onCheckboxChange={handleCityCheckboxChange}
            />

        </div>
    );
};

export default Dashboard;