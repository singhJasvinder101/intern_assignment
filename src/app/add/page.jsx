"use client"


import Image from 'next/image'
import { cards } from '../page'
import Card from '@/components/Card'

const page = () => {

    return (
        <div className="py-24 d-flex flex-col align-items-center justify-content-center">
            <h2 className="d-flex">
                <Image
                    src="/assets/add.svg"
                    width={34}
                    height={34}
                    alt="Add Your Listing"
                    className="me-2"
                />
                <span>Add Your Listing</span>
            </h2>
            <div className="cards-section row w-[80%] mx-auto">
                {cards?.map((c, idx) => (
                    <Card className="card col-10 col-md-5" key={idx} color={c.color} text={c.text} title={c.title} src={c.src} />
                ))}
            </div>
        </div>
    )
}

export default page
