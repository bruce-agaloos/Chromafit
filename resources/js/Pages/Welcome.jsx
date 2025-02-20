import { Head, Link } from "@inertiajs/react";
import Navbar from "../Components/custom/Navbar";
import Footer from "../Components/custom/Footer";
import React, { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
const images = [
    "images/hot.jpg",
    "images/camera.jpg",
    "images/cute.jpg",
    "images/yellow2.jpg", // Add more image URLs here
];

const productNames = [
    "Summer Collection",
    "Latest Camera",
    "Winter Special",
    "Spring Fashion",
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lenis = useLenis();

    useEffect(() => {

        const element = document.getElementById('fade-in-element');
        if (element) {
            element.classList.add('fade-in');
        }
        
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 15000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    function handleScroll() {
        const targetElement = document.getElementById("newArrival");
        if (targetElement) {
            lenis?.scrollTo(targetElement);
        }
    }

    return (
        <>
            <div id="fade-in-element" className="bg-neutral-100">
                <div
                    className="top-0 left-0 w-full bg-black z-10 font-montserrat text-white text-center content-center"
                    style={{ height: "2.6rem" }}
                >
                    {" "}
                    free local shipping on all orders WORTH PHP 2500 purchase.
                </div>
                <div
                    className="relative w-full overflow-hidden h-[35.4rem] " // Adjust the height for mobile view
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
                                className={`absolute hidden lg:block lg:bottom-20 lg:left-20 lg:text-left transition-opacity duration-1000 ${
                                    index === currentImageIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                style={{
                                    zIndex:
                                        index === currentImageIndex ? 10 : 0,
                                }}
                            >
                                <h2
                                    className={`text-4xl font-montserrat text-white mb-4 drop-shadow-lg ${
                                        index === currentImageIndex
                                            ? "animate-fadeInUp"
                                            : "animate-fadeOutDown"
                                    }`}
                                >
                                    {productNames[index]}
                                </h2>
                                <button
                                    className={`bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ${
                                        index === currentImageIndex
                                            ? "animate-buttonInUp"
                                            : "animate-buttonOutDown"
                                    }`}
                                    onClick={() =>
                                        console.log(productNames[index])
                                    }
                                    style={{ zIndex: 20 }}
                                >
                                    Buy Now
                                </button>
                            </div>
                            <div
                                className={`lg:hidden absolute flex flex-col w-full h-full mt-40 justify-center items-center transition-opacity duration-1000 ${
                                    index === currentImageIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                style={{
                                    zIndex:
                                        index === currentImageIndex ? 10 : 0,
                                }}
                            >
                                <h2
                                    className={`text-4xl font-montserrat font-bold text-white mb-4 drop-shadow-lg ${
                                        index === currentImageIndex
                                            ? "animate-fadeInUp"
                                            : "animate-fadeOutDown"
                                    }`}
                                >
                                    {productNames[index]}
                                </h2>
                                <button
                                    className={`bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ${
                                        index === currentImageIndex
                                            ? "animate-buttonInUp"
                                            : "animate-buttonOutDown"
                                    }`}
                                    onClick={() =>
                                        console.log(productNames[index])
                                    }
                                    style={{ zIndex: 20 }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-20 right-0 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 border-2 rounded-full shadow-lg ${
                                index === currentImageIndex
                                    ? "bg-white border-white"
                                    : "bg-transparent border-white"
                            }`}
                            onClick={() => handleDotClick(index)}
                        ></button>
                    ))}
                </div>
                <div id="newArrival"></div>

                {/* circle */}
                <div
                    className="z-10 relative w-full flex justify-center top-2 cursor-pointer"
                    style={{ marginTop: "-2rem" }}
                    onClick={handleScroll}
                >
                    <div className="w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center animate-upDown shadow-glow hover:shadow-glowBrighter">
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

                <div className="mt-40 relative flex min-h-screen justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Navbar auth={auth} />

                        <main className="-mt-5 flex flex-col min-h-screen">
                            <div>
                                <h3 className="text-center text-xl font-montserrat">
                                    NEW ARRIVAL
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                    {Array(8)
                                        .fill()
                                        .map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src="images/t-shirt.jpg"
                                                    alt={`Product ${index + 1}`}
                                                    className="w-full h-60 object-contain"
                                                />
                                                <h4 className="mt-2 text-lg font-semibold">
                                                    T-Shirt {index + 1}
                                                </h4>
                                                <p className="text-gray-600">
                                                    P500 {/* {index + 1} */}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
