import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ auth }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const topValue = Math.max(0, 2.5 - scrollY / 15.5); // Adjust the divisor to control the speed of the transition

    return (
        <>
            <header
                className={`fixed left-0 w-full lg-shadow z-10 transition-colors duration-300  ${
                    scrollY > 10
                        ? "bg-white text-black"
                        : "bg-transparent text-black"
                }`}
                style={{ top: `${topValue}rem`, height: "8.3rem" }}
            >
                <div className="grid grid-cols-3 items-center gap-2 py-10 lg:grid-cols-3">
                    <div></div>
                    <div className=" -mt-5 text-5xl font-londrina flex lg:col-start-2 justify-center">
                        Chromafit
                    </div>
                    <nav className="-mx-3 -mt-2 flex flex-1 justify-end mr-10 font-montserrat text-xs lg:col-start-3">
                        {auth.user ? (
                            <Link
                                href={route("profile")}
                                className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                    scrollY > 10 ? "text-slate-500" : "text-white"
                                }`}
                            >
                                ACCOUNT
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                        scrollY > 10
                                            ? "text-slate-500"
                                            : "text-white"
                                    }`}
                                >
                                    ACCOUNT
                                </Link>
                            </>
                        )}
                        <Link
                            href="#"
                            className={`rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                scrollY > 10 ? "text-slate-500" : "text-white"
                            }`}
                        >
                            SEARCH
                        </Link>
                        <Link
                            href="#"
                            className={`rounded-md  px-3 py-2 ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ${
                                scrollY > 10 ? "text-slate-500" : "text-white"
                            }`}
                        >
                            CART ( 0 )
                        </Link>
                    </nav>
                </div>
                <nav className="flex justify-center items-center font-montserrat text-sm -mt-5">
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
            </header>
        </>
    );
};

export default Navbar;
