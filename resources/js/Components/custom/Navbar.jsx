import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ auth }) => {
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
                className={`fixed left-0 w-full lg-shadow z-10 transition-colors duration-300 group hover:bg-white ${
                    scrollY > 10
                        ? "bg-white text-black"
                        : "bg-transparent text-black"
                }`}
                style={{ top: `${topValue}rem`, height: "8.3rem" }}
            >
                <div className="grid grid-cols-3 items-center gap-2 py-10 lg:grid-cols-3  group-hover:text-black">
                    <button
                        className={`lg:hidden ml-7 w-10 ${
                            scrollY > 10
                                ? "text-black"
                                : "text-white group-hover:text-black"
                        }`}
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
                    <div className="hidden lg:flex text-5xl font-londrina lg:col-start-2 justify-center -mt-5 group-hover:text-black">
                        Chromafit
                    </div>
                    <div className="lg:hidden flex text-5xl font-londrina lg:col-start-2 justify-center group-hover:text-black">
                        Chromafit
                    </div>
                    <nav className="hidden lg:flex -mx-3 -mt-2 flex-1 justify-end mr-10 font-montserrat text-xs lg:col-start-3 group-hover:text-black">
                        {auth.user ? (
                            <Link
                                href={route("profile")}
                                className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                    scrollY > 10
                                        ? "text-slate-500"
                                        : "text-white group-hover:text-slate-500"
                                }`}
                            >
                                ACCOUNT
                            </Link>
                        ) : (
                            <Link
                                href={route("login")}
                                className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                    scrollY > 10
                                        ? "text-slate-500"
                                        : "text-white group-hover:text-slate-500"
                                }`}
                            >
                                ACCOUNT
                            </Link>
                        )}
                        <Link
                            href="#"
                            className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                scrollY > 10
                                    ? "text-slate-500"
                                    : "text-white group-hover:text-slate-500"
                            }`}
                        >
                            SEARCH
                        </Link>
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleCart();
                            }}
                            className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                scrollY > 10
                                    ? "text-slate-500"
                                    : "text-white group-hover:text-slate-500"
                            }`}
                        >
                            CART (0)
                        </Link>
                    </nav>
                </div>
                <nav className="hidden lg:flex justify-center items-center font-montserrat text-sm -mt-5 group-hover:text-black">
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition  hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10
                                ? "text-black"
                                : "text-white group-hover:text-black"
                        }`}
                    >
                        NEW ARRIVAL
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10
                                ? "text-black"
                                : "text-white group-hover:text-black"
                        }`}
                    >
                        ALL PRODUCTS
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10
                                ? "text-black"
                                : "text-white group-hover:text-black"
                        }`}
                    >
                        COLLABORATIONS
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10
                                ? "text-black"
                                : "text-white group-hover:text-black"
                        }`}
                    >
                        MEN
                    </Link>
                    <Link
                        href="#"
                        className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:!text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                            scrollY > 10
                                ? "text-black"
                                : "text-white group-hover:text-black"
                        }`}
                    >
                        WOMEN
                    </Link>
                </nav>
            </header>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    sidebarOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleSidebar}
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
                className={`fixed inset-y-0 left-0 bg-black/95 z-50 transform transition-transform duration-300 ${
                    cartOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ width: "40%" }}
            >
                <div className="p-4">
                    <button className="text-white" onClick={toggleCart}>
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
                {/* <nav className="flex flex-col p-4 space-y-4 font-montserrat text-2xl">
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
                    <div>
                    option 1
                    option 2
                    option 3
    
                    </div>
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
                </nav> */}
            </div>
        </>
    );
};

export default Navbar;
