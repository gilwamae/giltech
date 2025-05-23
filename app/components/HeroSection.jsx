"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">Hello I'm, {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Gil Wamae",
                                1000,
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                                "UI/UX Designer",
                                1000,
                                "SEO Engineer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl">Looking for a modern, high-performance website or custom software to grow your business? You’re in the right place!
                    </p>
                    <div>
                    <a href="mailto:gilwayne900@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Gil,%20I%20would%20like%20to%20hire%20you%20for..." className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white inline-block text-center">
  Hire Me
</a>
                        { /* Cut out part 
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </button> */}
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image-2.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
       
    )
}
export default HeroSection;