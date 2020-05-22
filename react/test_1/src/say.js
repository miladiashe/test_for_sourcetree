import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("hi");
    const onClickLeaver = () => setMessage("bye");
    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeaver}>Exit</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;