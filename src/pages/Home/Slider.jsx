import React from 'react';
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className='flex items-center pl-8'>
            <div><button className="btn btn-active btn-secondary">Secondary</button>
            </div>

            <div>

            <Marquee pauseOnHover={true} direction="right">
              <p>I can be a React component, multiple React components, or just some text.</p>

              <p>I can be a React component, multiple React components, or just some text.</p>

              <p>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>

            </div>
        </div>
    );
};

export default Slider;