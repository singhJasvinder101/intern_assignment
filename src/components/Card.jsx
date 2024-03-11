import React, { useState } from 'react'
import Image from 'next/image'

const Card = ({ title, src, text, btn, className, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    const hoverStyle = {
        backgroundColor: isHovered ? color : '',
        color: isHovered ? 'white' : ''
    };

    const imgHoverStyle = {
        brightness: isHovered ? '300%' : '0%',
    };


    return (
        <div
            style={hoverStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className={`mx-auto hover-bg-[${color}] my-4 p-4 py-md-5 ${className}`}
        >
            <h3 className="d-flex align-items-center">
                <Image
                    style={imgHoverStyle}
                    src={`/assets/${src}.svg`}
                    width={34}
                    height={34}
                    alt={title}
                    className={`${isHovered && 'brightness-200'}`}
                />
                <span className="px-2">{title}</span>
            </h3>
            <p className="my-3">
                {text}
            </p>
            {btn && <button className="btn card-btn d-inline-block">
                {btn}
            </button>}
        </div>
    )
}

export default Card
