import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Clean() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCounter(counter + 1);
        }, 1000);
        return () => {
            console.log(timeoutId);
        };
    }, [counter]);
    console.clear();
    return (
        <div>
            <p>Count: {counter}</p>           
        </div>
    );
}
export default Clean