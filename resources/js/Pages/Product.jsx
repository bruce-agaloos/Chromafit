import { Head, Link } from "@inertiajs/react";
import NavbarP from "../Components/custom/NavbarP";
import Footer from "../Components/custom/Footer";
import Sidebar from '../Components/custom/Sidebar';
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
        
    }, []);


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
               
                
                <div className="mt-40 relative flex min-h-screen justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <NavbarP auth={auth} />

                        <div className="flex">
            <Sidebar />
            <main className="flex flex-col min-h-screen flex-grow p-4">
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
                </div>
                <Footer />
            </div>
        </>
    );
}
