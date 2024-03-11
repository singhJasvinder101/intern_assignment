"use client"
import React from 'react'
import { createButton } from "react-social-login-buttons";
import Image from 'next/image';

const images = {
    "google": "/assets/google.jpg",
    "facebook": "/assets/facebook.png",
}

const SocialButton = ({ text, name, onClick, className }) => {
    return (
        <button className="btn w-[100%] d-flex align-items-center social-btn">
            <Image
                src={images[name]}
                width={20}
                height={20}
                alt=""
                className="me-2"
            />
            <span className="mx-4">{text}</span>
        </button>
    )
}


export default SocialButton
