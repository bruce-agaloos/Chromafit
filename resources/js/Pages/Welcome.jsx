import { Head, Link } from "@inertiajs/react";
import Navbar from "../Components/custom/Navbar";
import React, { useState, useEffect } from "react";

const images = [
    "images/hot.jpg",
    "images/camera.jpg",
    "images/cute.jpg",
    "images/yellow.jpg", // Add more image URLs here
];

const productNames = [
    "Summer Collection",
    "Latest Camera",
    "Winter Special",
    "Spring Fashion",
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 3000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-slate-200">
                <div
                    className="top-0 left-0 w-full bg-black z-10 font-montserrat text-white text-center content-center"
                    style={{ height: "2.6rem" }}
                >
                    {" "}
                    free local shipping on all orders WORTH PHP 2500 purchase.
                </div>
                <div
                    className="relative w-full overflow-hidden"
                    style={{ height: "33.4rem" }}
                >
                                        {images.map((image, index) => (
                        <div key={index} className="absolute w-full h-full">
                            <img
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
                                    index === currentImageIndex
                                        ? "opacity-100 transform scale-100"
                                        : "opacity-0 transform scale-125"
                                }`}
                                src={image}
                                alt={`image-${index}`}
                            />
                            <div
                                className={`absolute bottom-20 left-20 text-left transition-opacity duration-1000 ${
                                    index === currentImageIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                style={{
                                    zIndex: index === currentImageIndex ? 10 : 0,
                                }}
                            >
                                <h2
                                    className={`text-4xl font-bold text-white mb-4 drop-shadow-lg ${
                                        index === currentImageIndex ? "animate-fadeInUp" : "animate-fadeOutDown"
                                    }`}
                                >
                                    {productNames[index]}
                                </h2>
                                <button
                                    className={`bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ${
                                        index === currentImageIndex ? "animate-buttonInUp" : "animate-buttonOutDown"
                                    }`}
                                    onClick={() => console.log(productNames[index])}
                                    style={{ zIndex: 20 }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="relative w-full flex justify-center top-2"
                    style={{ marginTop: "-2rem" }}
                >
                    <div className="w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Navbar auth={auth} />

                        <main></main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70"></footer>
                    </div>
                </div>
            </div>
        </>
    );
}
