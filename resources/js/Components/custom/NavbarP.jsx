import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const NavbarP = ({ auth }) => {
    const [scrollY, setScrollY] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

   
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const topValue = Math.max(0, 2.5 - scrollY / 15.5); // Adjust the divisor to control the speed of the transition

    return (
        <>
            <header
                className="fixed left-0 w-full lg-shadow z-10 transition-colors duration-300 group 
                        bg-white text-black drop-shadow-xl "
                style={{ top: `${topValue}rem`, height: "8.3rem" }}
            >
                <div className="grid grid-cols-3 items-center gap-2 py-10 lg:grid-cols-3">
                    <button
                        className="lg:hidden ml-7 w-10 text-black"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    <div className="hidden lg:flex text-5xl font-londrina lg:col-start-2 justify-center -mt-5">
                        Chromafit
                    </div>

                    <div className="lg:hidden text-shadow-outline flex text-5xl font-londrina lg:col-start-2 justify-center">
                        Chromafit
                    </div>

                    <button
                        className={
                            "absolute mr-8 right-0 lg:hidden justify-end text-black"
                        }
                        onClick={toggleCart}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21h6"
                            ></path>
                        </svg>
                    </button>

                    <nav className="hidden lg:flex -mx-3 -mt-2 flex-1 justify-end mr-10 font-montserrat text-xs lg:col-start-3">
                        {auth.user ? (
                            <Link
                                href={route("profile")}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] text-slate-500"
                            >
                                ACCOUNT
                            </Link>
                        ) : (
                            <Link
                                href={route("login")}
                                className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                ACCOUNT
                            </Link>
                        )}
                        <Link
                            href="#"
                            className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                "
                        >
                            SEARCH
                        </Link>
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleCart();
                            }}
                            className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                scrollY > 10
                                   "
                        >
                            CART (0)
                        </Link>
                    </nav>
                </div>
                <nav className="hidden lg:flex justify-center items-center font-montserrat text-sm -mt-5 group-hover:text-black">
                    <Link
                        href="#"
                        className="group rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            "
                    >
                        NEW ARRIVAL
                    </Link>
                    <Link
                        href="#"
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            "
                    >
                        ALL PRODUCTS
                    </Link>
                    <Link
                        href="#"
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            "
                    >
                        COLLABORATIONS
                    </Link>
                    <Link
                        href="#"
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            "
                    >
                        MEN
                    </Link>
                    <Link
                        href="#"
                        className="rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            "
                    >
                        WOMEN
                    </Link>
                </nav>
            </header>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    sidebarOpen || cartOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => {
                    if (sidebarOpen) toggleSidebar();
                    if (cartOpen) toggleCart();
                }}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 bg-black/95 z-50 transform transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ width: "40%" }}
            >
                <div className="p-4">
                    <button className="text-white" onClick={toggleSidebar}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4 font-montserrat text-2xl">
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10 ? "text-black" : "text-white"
                        }`}
                    >
                        NEW ARRIVAL
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10 ? "text-black" : "text-white"
                        }`}
                    >
                        ALL PRODUCTS
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10 ? "text-black" : "text-white"
                        }`}
                    >
                        COLLABORATIONS
                    </Link>
                    <div>option 1 option 2 option 3</div>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10 ? "text-black" : "text-white"
                        }`}
                    >
                        MEN
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10 ? "text-black" : "text-white"
                        }`}
                    >
                        WOMEN
                    </Link>
                </nav>
            </div>

            {/* cart */}
            <div
                className={`fixed inset-y-0 right-0 sm:w-[30rem] lg:w-[30%] shadow-black shadow-xl bg-stone-100 z-50 transform transition-transform duration-300 ${
                    cartOpen ? "-translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-8 py-7 flex justify-between border-b border-gray-300 shadow-sm">
                    <div className="font-montserrat text-base tracking-tight font-medium">
                        C A R T
                    </div>
                    <button className="text-black" onClick={toggleCart}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div>Cart</div>
            </div>
        </>
    );
};

export default NavbarP;
