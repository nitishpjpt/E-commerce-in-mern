import React, { useState, useEffect } from "react";
import p1 from "../../assets/headphone1.png";
import p2 from "../../assets/product1.png";
import p3 from "../../assets/product2.png";
import p4 from "../../assets/headphone2.png";
import p5 from "../../assets/product4.png";
import p6 from "../../assets/product4.png";

const products = [
    { id: 1, name: "Smart Watch", price: "₹1999", img: p1 },
    { id: 2, name: "Wireless Earbuds", price: "₹999", img: p2 },
    { id: 3, name: "Bluetooth Speaker", price: "₹1299", img: p3 },
    { id: 4, name: "Gaming Mouse", price: "₹599", img: p4 },
    { id: 5, name: "Power Bank", price: "₹899", img: p5 },
    { id: 6, name: "Smartphone Stand", price: "₹299", img: p6 },
    { id: 7, name: "Phone Case", price: "₹399", img: p5 },
    { id: 8, name: "Tablet Holder", price: "₹499", img: p6 },
    { id: 9, name: "Laptop Sleeve", price: "₹799", img: p1 },
    { id: 10, name: "USB Cable", price: "₹199", img: p2 },
    { id: 11, name: "Wireless Charger", price: "₹1299", img: p3 },
    { id: 12, name: "Headphones", price: "₹1499", img: p4 },
];

const ProductCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    // Responsive items per slide
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(1); // Mobile
            } else if (window.innerWidth < 768) {
                setItemsPerSlide(2); // Tablet small
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(3); // Tablet large
            } else {
                setItemsPerSlide(4); // Desktop
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(products.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Check if we can go left or right
    const canGoLeft = current > 0;
    const canGoRight = current < totalSlides - 1;

    return (
        <div className="relative w-full px-2 sm:px-4 lg:px-6 mt-6 sm:mt-8 lg:mt-10 bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg">

            {/* Enhanced Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Featured Products</h2>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Discover our most popular items</p>
                </div>

            </div>

            {/* Product Slider Wrapper */}
            <div className="relative overflow-hidden w-full">

                {/* Left Navigation Button */}
                {canGoLeft && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl text-gray-700 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 backdrop-blur-sm"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Right Navigation Button */}
                {canGoRight && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl text-gray-700 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 backdrop-blur-sm"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Slider Content */}
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${current * (100 / totalSlides)}%)`,
                        width: `${totalSlides * 100}%`,
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="flex gap-3 sm:gap-4 lg:gap-6 px-1 sm:px-2"
                            style={{ width: `${100 / totalSlides}%` }}
                        >
                            {products
                                .slice(
                                    slideIndex * itemsPerSlide,
                                    slideIndex * itemsPerSlide + itemsPerSlide
                                )
                                .map((product) => (
                                    <div
                                        key={`${product.id}-${slideIndex}`}
                                        className="flex-1 min-w-0 bg-white shadow-md sm:shadow-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                    >
                                        {/* Product Image */}
                                        <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-50">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-32 sm:h-36 md:h-40 lg:h-48 object-contain transition-transform duration-300 hover:scale-105"
                                            />
                                            <div className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold">
                                                Hot
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="mt-2 sm:mt-3 lg:mt-4">
                                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                                            <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2 hidden sm:block">
                                                High-quality premium product with best in class features.
                                            </p>
                                            <div className="flex  items-center justify-between mt-2 sm:mt-3">
                                                <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">{product.price}</p>
                                                <div className="flex items-center ">
                                                    <span className="text-yellow-400 text-sm sm:text-base">★</span>
                                                    <span className="text-xs sm:text-sm text-gray-600 ml-1">4.8</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <button className="mt-2 sm:mt-3 lg:mt-4 w-full bg-gradient-to-r from-gray-800 to-black text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg">
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-1 sm:space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full transition-all duration-300 ${index === current
                            ? 'bg-gray-800 w-4 sm:w-6 lg:w-8 h-2 sm:h-3'
                            : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3 h-2 sm:h-3'
                            }`}
                    />
                ))}
            </div>

            {/* Mobile swipe instructions */}
            <div className="text-center  mt-4 sm:hidden">
                <p className="text-xs text-gray-500">Swipe to navigate</p>
            </div>
        </div>
    );
};

export default ProductCarousel;