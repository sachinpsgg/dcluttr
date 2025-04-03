import React, { useState } from 'react';
import Perfora from '../assets/perfora.png';
import MamaEarth from '../assets/mamaearth.png';
import Boat from '../assets/boat.png';
import Add from '../assets/add.png';
import User from '../assets/user.png';
import SS from '../assets/ss.png';
import {
    ChevronUp,
    ChevronDown,
    ChevronsLeft,
    Users,
    House,
    Tv,
    Images,
    Circle,
    CircleHelp,
    Settings
} from 'lucide-react';

const Sidebar = () => {
    // State for Channels submenu
    const [isChannelsOpen, setIsChannelsOpen] = useState(true);

    // Toggle Channels submenu
    const toggleChannels = () => {
        setIsChannelsOpen(!isChannelsOpen);
    };

    return (
        <div className="flex h-screen">
            <div className="w-16 flex flex-col items-center py-4">
                <div className="flex-1 flex flex-col items-center gap-4">
                    <img
                        src={Perfora}
                        alt="Perfora Logo"
                        className="w-12 h-12 rounded-lg mb-3"
                    />
                    <img
                        src={MamaEarth}
                        alt="Mama Earth Logo"
                        className="w-12 h-12 rounded-lg"
                    />
                    <img
                        src={Boat}
                        alt="Boat Logo"
                        className="w-12 h-12 rounded-lg"
                    />
                    <img
                        src={Add}
                        alt="Boat Logo"
                        className="w-12 h-12 rounded-lg"
                    />

                </div>
                <div className="flex flex-col items-center gap-4">
                    <Users size={20} color="#7E8986"/>
                    <img
                            src={SS}
                            alt="Boat Logo"
                            className="w-8 h-8 rounded-lg"
                        />

                </div>
            </div>
            <div className="w-56 flex flex-col justify-between py-4">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-centre items-center gap-2 ">
                        <button className="flex items-center gap-2 px-1.5 py-1 rounded-xl border-2 border-gray-300 w-full">
                        <span className="bg-[#309E96] text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold">
                            SS
                        </span>
                            <span className="text-[#031B15] text-[14px] font-bold">Test_Brand</span>
                            <div className="flex flex-col items-center ml-auto">
                                <ChevronUp size={15} color="#031B15" />
                                <ChevronDown size={15} color="#031B15"/>
                            </div>
                        </button>
                        <ChevronsLeft size={20}/>
                    </div>
                    <div className="space-y-1 bg-[#F8F8F8]">
                        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <House size={20} color="#7E8986"/>
                            <span className="text-sm">Overview</span>
                        </div>
                        <div>
                            <div
                                onClick={toggleChannels}
                                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer"
                            >
                                <Tv size={20} color="#7E8986"/>
                                <span className="text-sm">Channels</span>
                                {
                                    isChannelsOpen ? (
                                        <ChevronUp size={20} color="#031B15" className="ml-auto"/>
                                    ):(

                                    <ChevronDown size={20} color="#031B15" className="ml-auto"/>

                                    )
                                }
                            </div>
                            {isChannelsOpen && (
                                <div className="pl-10 space-y-1">
                                    <div className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-200 rounded-lg cursor-pointer">
                                        Meta Ads
                                    </div>
                                    <div className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-200 rounded-lg cursor-pointer">
                                        Google Ads
                                    </div>
                                    <div className="px-4 py-2 bg-blue-100 text-[#027056] font-medium text-sm rounded-lg cursor-pointer">
                                        Quick Commerce
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <Images size={20} color="#7E8986"/>
                            <span className="text-sm">Creatives</span>
                        </div>
                    </div>
                </div>

                <div className="px-4 space-y-1">
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <CircleHelp size={20} color="#7E8986"/>
                        <span className="text-sm">Help</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <Settings size={20} color="#7E8986"/>
                        <span className="text-sm">Settings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;