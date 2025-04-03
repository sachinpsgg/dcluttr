import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import {CircleHelp} from "lucide-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const SalesChart = ({title}) => {
    const data = {
        labels: ['9', '10', '11', '12', '13', '14', '15'],
        datasets: [
            {
                label: 'This Month',
                data: [0, 2.0, 1.8, 3.0, 2.5, 4.0, 5.0],
                borderColor: '#34C759',
                backgroundColor: 'rgba(52, 199, 89, 0.1)',
                fill: true,
                tension: 0,
                pointRadius: 0,
                borderWidth: 1,
            },
            {
                label: 'Last Month',
                data: [2, 0, 3, 2, 4, 3, 5],
                borderColor: '#DB3500CC',
                borderDash: [3,3],
                backgroundColor: 'transparent',
                fill: false,
                tension: 0,
                pointRadius: 0,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'line',
                    padding: 7,
                    font: {
                        size: 9,
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                },
            },
            y: {
                min: 0,
                max: 8,
                ticks: {
                    stepSize: 1.5,
                    font: {
                        size: 10,
                    },
                },
                grid: {
                    borderDash: [5, 5],
                    color: '#E5E7EB',
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-lg border border-[#EBEBEB] w-full">
            <div className="flex items-center justify-between mb-4 p-2 border-b-1 border-[#EBEBEB] ">
                <h2 className="text-[14px] font-medium text-[#515153]">{title}</h2>
                <CircleHelp size={15}/>
            </div>
            <div className="flex items-center justify-between mb-4 px-2">
                <div className="text-[24px] font-semibold text-gray-800 text-right right-0">125.49</div>
                <div className="flex flex-col items-center">
                    <span className="text-green-500 text-sm font-medium text-right">↑ 2.4%</span>
                    <span className="text-gray-500 text-sm">vs 119.69 last month</span>
                </div>
            </div>
            <div className="h-40">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default SalesChart;