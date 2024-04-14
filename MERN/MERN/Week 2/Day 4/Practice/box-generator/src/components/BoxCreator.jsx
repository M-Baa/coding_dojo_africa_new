import React, { useState } from "react";

function BoxCreator() {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [boxes, setBoxes] = useState([]);

    console.log(boxes);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(boxes);
        if (!color || !size) return;
        const newBox = {
            color: color,
            size: size
        };
        setBoxes([...boxes, newBox]);
        setColor('');
        setSize('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter your color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Enter the size" 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)} 
                />
                <button type="submit">Add your box</button>
            </form>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((box, index) => (
                    <div 
                        key={index}
                        style={{
                            backgroundColor: box.color,
                            width: `${box.size}px`,
                            height: `${box.size}px`,
                            margin: '5px'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default BoxCreator;
