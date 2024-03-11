"use client"
import Header from '@/components/Header';
import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import SocialButton from '@/components/SocialButton';
import Card from '@/components/Card';
import Image from 'next/image'

export const cards = [
  {
    title: "People",
    src: "people",
    text: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    btn: "connect",
    color: "rgb(128,100,162)"
  },
  {
    title: "Place",
    src: "place",
    text: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    btn: "Meetup",
    color: "rgb(119,147,60)"
  },
  {
    title: "Product",
    src: "product",
    text: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    btn: "Get it",
    color: "rgb(192,80,77)"
  },
  {
    title: "Program",
    src: "program",
    text: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
    btn: "Attend",
    color: "rgb(0,150,200)"
  },
]

export default function Home() {
  return (
    <main className="">

      <div className="home">
        <section className="hero w-[90%] mx-auto row d-flex align-items-center justify-content-around">
          <div className="hero-section col-lg-6 col-11">
            <h2 className="my-3">Explore your hobby or passion</h2>
            <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
            <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
          </div>

          <div className="sign-up-section col-11 col-lg-4 col-md-8">
            <h8>Sign In</h8>
            <div className="h-1 bg-[#8449a0] w-12 rounded-lg  "></div>

            <div className="social-buttons py-4">
              <SocialButton className={"bg-white"} onClick={() => console.log("google")} name={"google"} text={"Login with Google"} />
              <SocialButton onClick={() => console.log("facebook")} name={"facebook"} text={"Login with Facebook"} />
            </div>

            <div className="d-flex my-3 align-items-center">
              <div className="w-[60%] h-1 bg-black"></div>
              <span className="mx-3">or</span>
              <div className="w-[60%] h-1 bg-black"></div>
            </div>

            <div className="input-form">
              <input type="text" placeholder="Email" className="input-field w-[100%]" />
              <input type="text" placeholder="Password" className="input-field w-[100%]" />
              <button className="btn btn-primary w-[100%]">Continue</button>
            </div>
          </div>
        </section>
      </div>

      <div className="cards-section row w-[80%] mx-auto">
        {cards.map((c, idx) => (
          <Card className="card col-10 col-md-5" key={idx} color={c.color} text={c.text} title={c.title} btn={c.btn} src={c.src} />
        ))}
      </div>

      <div className="section add-listing-section w-[80%] m-auto p-5">
        <Card
          text={"Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page"}
          title={"Add Your Own"}
          btn={"Add New"}
          src={"add"}
          className={"text-black"}
        />
      </div>

      <div className="section testinomials-section w-[80%] m-auto p-5">
        <h3 className="d-flex align-items-center">
          <Image
            src={`/assets/testinomial.svg`}
            width={34}
            height={34}
            alt={"testinomial"}
          />
          <span className="px-3">Testinomials</span>
        </h3>
        <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
      </div>


      <div className="section w-[80%] m-auto p-5">
        <h2>Your Hobby, Your Community...</h2>
        <button className="btn card-btn">
          Get started
        </button>
        <Image
          className="img"
          src={`/assets/image(1).svg`}
          width={12}
          height={12}
          alt={"testinomial"}
          quality={100}
        />
      </div>

    </main>
  );
}
