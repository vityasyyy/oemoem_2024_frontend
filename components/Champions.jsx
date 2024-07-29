import Image from "next/image";
import { useState } from "react";
import ChampsGamedev from "./ChampsGamedev";
import ChampsCP from "./ChampsCP";
import ChampsCysec from "./ChampsCysec";
import ChampsUIUX from "./ChampsUIUX";
import ChampsFE from "./ChampsFE";
import ChampsBE from "./ChampsBE";
import ChampsDSAI from "./ChampsDSAI";
import ChampsMobapps from "./ChampsMobapps";

const Champions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('Comp Programming');

    const allTopics = [
        "Comp Programming",
        "UI/UX",
        "Front-End",
        "Back-End",
        "Data Science AI",
        "Mobile Apps",
        "Cyber Security",
        "Game-Dev"
    ];

    const topics = allTopics.filter(topic => topic !== selectedTopic);

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        setIsOpen(false);
    };

    const renderChampionComponent = () => {
        switch(selectedTopic) {
            case "Comp Programming":
                return <ChampsCP />;
            case "UI/UX":
                return <ChampsUIUX />;
            case "Front-End":
                return <ChampsFE />;
            case "Back-End":
                return <ChampsBE />;
            case "Data Science AI":
                return <ChampsDSAI />;
            case "Mobile Apps":
                return <ChampsMobapps />;
            case "Cyber Security":
                return <ChampsCysec />;
            case "Game-Dev":
                return <ChampsGamedev />;
            default:
                return null;
        }
    };

    return (
        <>
            <p className="text-white">Champions dipersembahkan bagi top-3 pemenang challenge untuk masing-masing kelas</p>

            {/* Dropdown */}
            <div className="w-72 mt-4 font-medium relative">
                <div className="flex items-center justify-between text-white rounded-lg">
                    <span className="flex-grow bg-basicBlue-10 pl-4 py-1 rounded-lg">{selectedTopic}</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-2 focus:outline-none bg-basicBlue-10 rounded-lg"
                    >
                        <Image
                            src="/arrowDropdown.svg"
                            height={20}
                            width={20}
                            className={`m-2 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0' : 'rotate-180'}`}
                            alt="Dropdown"
                        />
                    </button>
                </div>
                <div 
                    className={`absolute w-full z-10 mt-1 transition-all duration-300 ease-in-out ${
                        isOpen 
                        ? 'opacity-100 visible max-h-96' 
                        : 'opacity-0 invisible max-h-0'
                    }`}
                >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                        {topics.map((topic, index) => (
                            <div 
                            key={index} 
                            className="p-3 text-indigo-800 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleTopicClick(topic)}
                            >
                            {topic}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Render selected champion component */}
            <div className="flex flex-col md:flex-row mt-10 items-center justify-center gap-10">
                {renderChampionComponent()}
            </div>
        </>
    )
};

export default Champions;