import React from 'react';

const IterationSample = () => {
    const names = ['하나', '둘', '셋','넷'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>;
};

export default IterationSample;