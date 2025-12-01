import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  const products = [
    {
      image: "/images/p1.jpg",
      title: "Awesome Brand - Cool product with nice color",
      price: 85,
      oldPrice: 45,
      location: "Aadeload",
    },
    {
      image: "/images/p2.jpg",
      title: "Awesome Brand - Cool product with nice color",
      price: 85,
      oldPrice: 45,
      location: "Wucueg",
    },
    {
      image: "/images/p3.jpg",
      title: "Awesome Brand - Cool product with nice color",
      price: 85,
      oldPrice: 45,
      location: "Mocdadzem",
    },
    {
      image: "/images/p4.jpg",
      title: "Awesome Brand - Cool product with nice color",
      price: 85,
      oldPrice: 45,
      location: "Piroge",
    },
    {
      image: "/images/p5.jpg",
      title: "Awesome Brand - Cool product with nice color",
      price: 85,
      oldPrice: 45,
      location: "Mikasakmi",
    },
    {
      image: "/images/p6.jpg",
      title: "Awesome Brand - Cool product with nice color",
      price: 85,
      oldPrice: 45,
      location: "Tirfyuhuf",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">

      {/* ------- TITLE ------ */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Products you may like
      </h2>

      {/* ------- PRODUCT GRID ------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 w-[230px]"
          >
            {/* Product Image */}
            <div className="w-full h-40 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt="product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Title */}
            <h3 className="mt-2 text-sm font-medium text-gray-800 leading-tight">
              {item.title}
            </h3>

            {/* Price + Discount */}
            <div className="mt-1">
              <p className="text-xl font-semibold text-black">${item.price}</p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-red-500 font-semibold">40%</span>
                <span className="line-through text-gray-400">
                  ${item.oldPrice}
                </span>
              </div>
            </div>

            {/* Location */}
            <p className="text-gray-500 text-sm mt-1">{item.location}</p>

            {/* Rating & Sold */}
            <div className="flex items-center gap-1 text-sm mt-1">
              <AiFillStar className="text-yellow-500" size={16} />
              <span className="text-gray-700">4.8</span>
              <span className="text-gray-400">| Sold 700+</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductCard
