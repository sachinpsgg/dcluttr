import React from 'react';
import { ChartLine, ChevronDown } from 'lucide-react';

const SKUDataTable = ({
                          title,
                          data,
                          total,
                          selectedItems,
                          onCheckboxChange
                      }) => {
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
                        <th className="py-2 px-4"></th>
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
                    {data.map((row, index) => (
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
                                    {row.trendTraffic && (
                                        <span
                                            className={`ml-2 text-sm ${
                                                row.trendTraffic.includes('↑') ? 'text-green-500' : 'text-red-500'
                                            }`}
                                        >
                        {row.trendTraffic}
                      </span>
                                    )}
                                </div>
                            </td>
                            <td className="py-2 px-4 text-[#4E5E5A] text-[14px]">
                                <div className="flex items-center flex-col gap-2 text-center">
                                    <span>{row.estImpressions}</span>
                                    {row.trendImpressions && (
                                        <span
                                            className={`ml-2 text-sm ${
                                                row.trendImpressions.includes('↑') ? 'text-green-500' : 'text-red-500'
                                            }`}
                                        >
                        {row.trendImpressions}
                      </span>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
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