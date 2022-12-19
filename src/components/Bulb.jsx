import React, { useState } from 'react';

const Bulb = () => {

    const[ isOn, setIson] = useState(false)

    const changeState = () => {
        setIson(!isOn)
    }

    return (
        <div className='boxbulb'>
            <div className='bulb' style={{backgroundColor: isOn ? 'yellow':'grey', boxShadow: isOn ? '1px 1px 50px yellow': 'none' }}></div>
            <button onClick={changeState}>on/off</button>
        </div>
    );
};

export default Bulb;