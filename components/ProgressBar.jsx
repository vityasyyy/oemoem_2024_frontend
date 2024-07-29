// components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ enrolledBy, slots }) => {
    const progress = (enrolledBy.length / slots) * 100;

    return (
        <div className="w-full">
            <div className="flex justify-between text-xs text-white mb-1">
                <span>Participant: {enrolledBy.length}</span>
                <span>Slots left: {slots}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
