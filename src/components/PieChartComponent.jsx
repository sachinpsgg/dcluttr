import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { CircleHelp } from 'lucide-react';
ChartJS.register(ArcElement, Tooltip);

const data = {
    labels: ['New Delhi', 'Mumbai', 'West Bengal', 'Others'],
    datasets: [
        {
            data: [26.5, 36.4, 12.2, 24.3],
            backgroundColor: ['#4B40EE', '#FF6B6B', '#FFD700', '#D3D3D3'],
            borderWidth: 0,
            borderColor: '#fff',
        },
    ],
};

const PieChartComponent = () => {
    const totalValue = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
    const percentages = [35, 23, 21, 9];
    const changes = [1.12, -3.3, -2.3, 1.009];

    const options = {
        cutout: '70%',
        circumference: 180,
        rotation: -90,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
            centerText: {
                beforeDraw(chart) {
                    const { ctx, chartArea } = chart;
                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    const centerX = (chartArea.left + chartArea.right) / 2;
                    const centerY = (chartArea.top + chartArea.bottom) / 2 + 20;
                    ctx.font = '13px Mulish';
                    ctx.fillStyle = '#7D7D7E';
                    ctx.fillText('Total', centerX, centerY - 20);
                    ctx.font = 'bold 18px Mulish';
                    ctx.fillStyle = '#000';
                    ctx.fillText(`₹${totalValue.toFixed(1)}L`, centerX, centerY);
                    ctx.font = '13px Mulish';
                    ctx.fillStyle = '#1D874F';
                    ctx.fillText('↑ 2.2%', centerX, centerY + 20);
                    ctx.restore();
                },
            },
        },
    };

    const plugins = [
        {
            id: 'centerText',
            beforeDraw: options.plugins.centerText.beforeDraw,
        },
    ];

    return (
        <div className="bg-white rounded-lg border border-[#EBEBEB] w-full">
            <div className="flex items-center justify-between mb-3 p-2 border-b-1 border-[#EBEBEB]">
                <h2 className="text-[14px] font-medium text-[#515153]">Sales (MRP)</h2>
                <CircleHelp size={15} />
            </div>
            <div className="relative w-full flex justify-center items-center py-2">
                <div className="w-[190px] h-[100px]">
                    <Doughnut data={data} options={options} plugins={plugins} />
                </div>
            </div>
            <div className="flex flex-col px-4 gap-2">
                {data.labels.map((label, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span
                                className="w-1 h-1 rounded-full mr-2"
                                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                            ></span>
                            <span className="text-[13px] text-[#7D7D7E]">{label}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[13px] text-[#000000] font-bold">
                                ₹{data.datasets[0].data[index]}L
                            </span>
                            <span className="text-sm">{percentages[index]}%</span>
                            <span
                                className={`text-sm ${
                                    changes[index] >= 0 ? 'text-green-500' : 'text-red-500'
                                }`}
                            >
                                {changes[index] >= 0 ? '↑' : '↓'} {Math.abs(changes[index])}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartComponent;