import React from "react";

const Navbar = () => {
    return (
        <header className="fixed w-full z-10 top-0 start-0">
            {/* Top Bar */}
            <nav className="bg-neutral-primary bg-gray-200 flex justify-around px-10">
                <div className="flex flex-wrap bg-gray-200 justify-around items-center  max-w-screen-xl p-4">


                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-body hover:underline">
                            <span className="font-bold">Call us</span>: 9871785113
                        </a>
                        <h4>Claim Your Discount upto 50% off</h4>
                        <a href="#" className="text-sm font-medium text-fg-brand hover:underline">
                            New User? Sign Up
                        </a>
                    </div>
                </div>
            </nav>

            {/* Menu Bar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-screen-xl px-4 py-6 mx-auto">
                    <div className="flex items-center justify-around">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-7"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                                Shopee
                            </span>
                        </a>
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Features
                                </a>
                            </li>
                        </ul>

                        <div className="bg-blue-500 px-8 py-2 rounded-3xl text-white">
                            <button >Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
