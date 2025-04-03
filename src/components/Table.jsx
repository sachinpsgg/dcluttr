import React, { useState, useEffect } from 'react';
import { ChartLine, ChevronDown } from 'lucide-react';
import { fetchCubeData } from '../utils/cube';

const SKUDataTable = ({
                          title,
                          selectedItems,
                          onCheckboxChange,
                      }) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState({
        sales: '₹0',
        outOfStock: '0%',
        totalInventory: 0,
        avgRank: 0,
        estTraffic: 0,
        estImpressions: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const query = {
                measures: [
                    'blinkit_insights_sku.sales_mrp_sum',
                    'blinkit_insights_sku.qty_sold',
                    'blinkit_insights_sku.inv_qty',
                    'blinkit_scraping_stream.on_shelf_availability',
                    'blinkit_scraping_stream.rank_avg',
                ],
                dimensions: ['blinkit_insights_sku.name'],
                timeDimensions: [
                    {
                        dimension: 'blinkit_insights_sku.created_at',
                        dateRange: ['2025-02-01', '2025-02-28'],
                    },
                ],
                limit: 10,
                offset: (2 - 1) * 5,
            };

            const response = await fetchCubeData(query);
            console.log('Cube.js response:=', response,"query=",query);
            const mappedData = response[0].data.map((item) => ({
                name: item['blinkit_insights_sku.name'] || 'Unknown',
                sales: `₹${Number(item['blinkit_insights_sku.sales_mrp_sum'] || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
                outOfStock: `${Number(item['blinkit_scraping_stream.on_shelf_availability'] || 0).toFixed(2)}%`,
                totalInventory: item['blinkit_insights_sku.inv_qty'] || 0,
                avgRank: Number(item['blinkit_scraping_stream.rank_avg'] || 0).toFixed(1),
                estTraffic: 0,
                estImpressions: 0,
            }));
            console.log(mappedData)
            const calculatedTotal = {
                sales: `₹${response
                    .reduce((sum, item) => sum + (item['blinkit_insights_sku.sales_mrp_sum'] || 0), 0)
                    .toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
                outOfStock: `${(
                    response.reduce((sum, item) => sum + (item['blinkit_scraping_stream.on_shelf_availability'] || 0), 0) /
                    (response.length || 1)
                ).toFixed(2)}%`,
                totalInventory: response.reduce((sum, item) => sum + (item['blinkit_insights_sku.inv_qty'] || 0), 0),
                avgRank: (
                    response.reduce((sum, item) => sum + (item['blinkit_scraping_stream.rank_avg'] || 0), 0) /
                    (response.length || 1)
                ).toFixed(1),
                estTraffic: 0,
                estImpressions: 0,
            };

            setData(mappedData);
            setTotal(calculatedTotal);
        };

        fetchData();
    }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h2 className="text-[20px] font-bold text-[#031B15]">{title}</h2>
                    <p className="text-[14px] text-[#4F4D55] font-normal m-0 mt-1">
                        Analytics for all your {title.split(' ')[0].toLowerCase()}s
                    </p>
                </div>
                <button className="flex items-center gap-2 px-2.5 py-2 bg-[#027056] border border-gray-300 rounded-lg text-sm text-[#FFFFFF]">
                    <p className="text[14px] font-medium tracking-normal">Filters(1)</p>
                    <ChevronDown size={20} color="#FAFAFA" strokeWidth={1.5} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700 border-1 border-[#F1F1F1]">
                    <thead className="border border-[#F1F1F1]">
                    <tr className="border-b border-[#F1F1F1]">
                        <th className="py-2 px-4"></th>
                        <th colSpan="3" className="py-2 px-4 font-semibold text-gray-800 text-center border-[#F1F1F1] border-r-1 border-l-1">
                            Availability
                        </th>
                        <th colSpan="3" className="py-2 px-4 font-semibold text-gray-800 text-center">
                            Visibility
                        </th>
                    </tr>
                    <tr className="border-b border-[#F1F1F1]">
                        <th className="py-2 px-4 font-medium border-[#F1F1F1] border-r-1">
                            <div className="flex items-center gap-2">
                                <ChartLine size={20} strokeWidth={1.5} />
                                <p className="text-[15px] text-[#013025]">{title.split(' ')[0]} Name</p>
                            </div>
                        </th>
                        <th className="py-2 px-4 font-medium">
                            <div className="flex items-center">
                                <p className="text-[15px] text-[#013025]">Sales</p>
                                <ChevronDown size={15} strokeWidth={1.5} />
                            </div>
                        </th>
                        <th className="py-2 px-4 font-medium">
                            <div className="flex items-center">
                                <p className="text-[15px] text-[#013025] w-full ">Out of Stock</p>
                                <ChevronDown size={15} strokeWidth={1.5} />
                            </div>
                        </th>
                        <th className="py-2 px-4 font-medium border-[#F1F1F1] border-r-1">
                            <div className="flex items-center">
                                <p className="text-[15px] text-[#013025] w-full">Total Inventory</p>
                                <ChevronDown size={15} strokeWidth={1.5} />
                            </div>
                        </th>
                        <th className="py-2 px-4 font-medium">
                            <div className="flex items-center">
                                <p className="text-[15px] text-[#013025] w-full">Average Rank</p>
                                <ChevronDown size={15} strokeWidth={1.5} />
                            </div>
                        </th>
                        <th className="py-2 px-4 font-medium">
                            <div className="flex items-center">
                                <p className="text-[15px] text-[#013025] w-full">Est. Traffic</p>
                                <ChevronDown size={15} strokeWidth={1.5} />
                            </div>
                        </th>
                        <th className="py-2 px-4 font-medium">
                            <div className="flex items-center">
                                <p className="text-[15px] text-[#013025] w-full">Est. Impressions</p>
                                <ChevronDown size={15} strokeWidth={1.5} />
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="py-4 text-center text-gray-500">
                                Loading data...
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <tr
                                key={index}
                                className={`border-b border-[#F1F1F1] transition-all duration-200 ${
                                    selectedItems[row.name] ? 'bg-[#F1F1F1]' : 'bg-transparent'
                                }`}
                            >
                                <td className="py-2 px-4 flex items-center border-r-1 border-[#F1F1F1]">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems[row.name] || false}
                                        onChange={() => onCheckboxChange(row.name)}
                                        className="mr-2 h-4 w-4 accent-[#027056] rounded"
                                    />
                                    <span className="text-[#0A090B] text[15px] underline w-full font-bold">
                      {row.name}
                    </span>
                                </td>
                                <td className="py-2 px-4 text-[#4E5E5A] text-[14px] text-center flex-col gap-2">{row.sales}</td>
                                <td className="py-2 px-4 text-[#4E5E5A] text-center text-[14px] flex-col gap-2">{row.outOfStock}</td>
                                <td className="py-2 px-4 text-[#4E5E5A] text-center text-[14px] border-[#F1F1F1] border-r-1 flex-col gap-2">
                                    {row.totalInventory}
                                </td>
                                <td className="py-2 px-4 text-[#4E5E5A] text-[14px] flex-col gap-2 text-center">{row.avgRank}</td>
                                <td className="py-2 px-4 text-[#4E5E5A] text-[14px] flex-col gap-2 text-center">
                                    <div className="flex items-center flex-col gap-2">
                                        <span>{row.estTraffic}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-[#4E5E5A] text-[14px]">
                                    <div className="flex items-center flex-col gap-2 text-center">
                                        <span>{row.estImpressions}</span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                    <tr className="font-semibold border-t border-gray-200">
                        <td className="py-2 px-4 border-[#F1F1F1] text-[15px] text-[#0A090B] font-bold border-r-1 flex-col gap-2">TOTAL</td>
                        <td className="py-2 px-4 text-[15px] text-[#0A090B] font-bold text-center">{total.sales}</td>
                        <td className="py-2 px-4 text-[15px] text-[#0A090B] font-bold text-center">{total.outOfStock}</td>
                        <td className="py-2 px-4 border-[#F1F1F1] border-r-1 text-[15px] text-[#0A090B] font-bold text-center">{total.totalInventory}</td>
                        <td className="py-2 px-4 text-[15px] text-[#0A090B] font-bold text-center">{total.avgRank}</td>
                        <td className="py-2 px-4 text-[15px] text-[#0A090B] font-bold text-center">{total.estTraffic}</td>
                        <td className="py-2 px-4 text-[15px] text-[#0A090B] font-bold text-center">{total.estImpressions}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SKUDataTable;