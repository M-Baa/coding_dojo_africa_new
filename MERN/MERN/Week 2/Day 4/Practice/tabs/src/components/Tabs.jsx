import React from 'react'; 
import { useState } from 'react';


function Tabs({ tabs }) {
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
    setActiveTab(index);
    if (tabs[index].callback) {
    tabs[index].callback();
    }
};

return (
    <div className="tabs">
    <div className="tab-headers">
        {tabs.map((tab, index) => (
    <div key={index} className={`tab-header ${activeTab === index ? 'active' : ''}`}
onClick={() => handleTabClick(index)}
        >
            {tab.label}
</div>
        ))}
    </div>
<div className="tab-contents">
        {tabs.map((tab, index) => (
        <div
            key={index}
            className={`tab-content ${activeTab === index ? 'active' : ''}`}
        >
            {tab.content}
        </div>
        ))}
    </div>
    </div>
);
}

export default Tabs;
