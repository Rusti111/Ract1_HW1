

// import React from 'react';

const Work = ({ num, setNum }) => {
    return (
        <div>
            
            <button onClick={() => {
                if (num < 15) setNum(num + 1)
            }}>+</button>

            <button onClick={() => {
                if (num > 0) setNum(num - 1)
            }}>-</button>

            <button onClick={() => {
                setNum(0)
            }}>Reset</button>

            <button onClick={() => {
                setNum(15)
            }}>Max</button>

            {/* <button onClick={() => {
        setNum(Math.min(num + 5, 15));
      }}>+5</button> */}

            <button onClick={() => {
                if (num > 10) {
                    setNum(15)
                } else {
                    setNum(num + 5)
                }
            }}>+5</button>

            <button onClick={() => {
                if (num < 5) {
                    setNum(0)
                } else {
                    setNum(num - 5)
                }
            }}>-5</button>
        </div>
    );
}

export default Work;
