"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

export default function ProductOne() {
  // Main carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Men's and Women's carousel states
  const [mensIndex, setMensIndex] = useState(0);
  const [womensIndex, setWomensIndex] = useState(0);

  const products = [
    { title: "Nike Air Max Pulse", description: "Women's Shoes", img: "/p1.png", price: "$16,995" },
    { title: "Nike Air Max Pulse", description: "Men's Shoes", img: "/p2.png", price: "$16,995" },
    { title: "Nike Air Max Pulse", description: "Men's Shoes", img: "/p3.png", price: "$16,995" },
    { title: "Nike Air Max Pulse", description: "Women's Shoes", img: "/p4.png", price: "$16,995" },
  ];

  const productone = [
    { title: "Nike Dri-FIT ADV TechKnit Ultra", description: "Men's Short Sleeves", des2: "Running Top", img: "/c1.png", price: "$3895" },
    { title: "Nike Dri-FIT ADV TechKnit Ultra", description: "Men's Short Sleeves", des2: "Running Top", img: "/c2.png", price: "$2495" },
  ];

  const producttwo = [
    { title: "Nike Dri-FIT ADV TechKnit Ultra", description: "Women's Short Sleeves", des2: "Running Top", img: "/c3.png", price: "$16,995" },
    { title: "Nike Dri-FIT ADV TechKnit Ultra", description: "Women's Short Sleeves", des2: "Running Top", img: "/c4.png", price: "$16,995" },
  ];

  // Carousel navigation handlers
  const prevMainSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };
  const nextMainSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const prevMensSlide = () => {
    setMensIndex((prevIndex) => (prevIndex === 0 ? productone.length - 1 : prevIndex - 1));
  };
  const nextMensSlide = () => {
    setMensIndex((prevIndex) => (prevIndex === productone.length - 1 ? 0 : prevIndex + 1));
  };

  const prevWomensSlide = () => {
    setWomensIndex((prevIndex) => (prevIndex === 0 ? producttwo.length - 1 : prevIndex - 1));
  };
  const nextWomensSlide = () => {
    setWomensIndex((prevIndex) => (prevIndex === producttwo.length - 1 ? 0 : prevIndex + 1));
  };


  const productsthree = [
    { img: "/w1.png" , buttonText: "Men's" },
    { img: "/w2.png" , buttonText: "Women's"},
    { img: "/w3.png" , buttonText: "Kid's"},
   
  ];

  return (
    <>
      {/* Main Carousel */}
      <div className="flex justify-between items-center p-4 m-9">
        <h2 className="font-semibold text-xl text-gray-900">Best of Air Max</h2>
        <div className="flex items-center gap-4">
          <p className="text-md text-gray-800 cursor-pointer hover:text-gray-700">Shop</p>
          <button onClick={prevMainSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <FiChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={nextMainSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <FiChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 px-4">
                <div className="bg-white rounded-sm overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                  <div className="p-4">
                    <div className="justify-between flex">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <p className="text-sm font-bold">{product.price}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="m-9"  >
  <h2 className="font-semibold text-xl text-gray-900  pb-9">Featured</h2>
  <Image src="/b1.png" alt="bg" width={1344} height={700}/>
</div>

<div className="flex flex-col items-center p-4 text-center">
<h3 className="font-semibold text-black text-3xl mt-1">STEP INTO WHAT FEELS GOOD</h3>
    <p className="text-gray-800 max-w-xl text-[15px] mt-3">Cause everyone should know the feeling of running in that perfect pair.</p>
</div>
<div className="flex place-content-center gap-x-2">
    <button className="bg-black p-2 rounded-full text-white px-4">Find Your Shoe</button>
      </div> 



      {/* Men's Carousel */}
      <div className="grid grid-cols-2 gap-4 p-4 m-9">
        <div>
          <div className="flex items-center gap-4">
            <p className="text-md text-gray-800 cursor-pointer hover:text-gray-700">Shop Men's</p>
            <button onClick={prevMensSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FiChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={nextMensSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FiChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${mensIndex * 50}%)` }}
            >
              {productone.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 px-4">
                  <div className="bg-white rounded-sm overflow-hidden">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                    <div className="p-4">
                    <div className="justify-between">

<h3 className="text-sm font-semibold">{product.title}</h3> 
<p className="text-sm font-bold">{product.price}</p></div>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                      <p className="text-gray-600 text-sm">{product.des2}</p>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Women's Carousel */}
        <div>
          <div className="flex items-center gap-4">
            <p className="text-md text-gray-800 cursor-pointer hover:text-gray-700">Shop Women's</p>
            <button onClick={prevWomensSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FiChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={nextWomensSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FiChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${womensIndex * 50}%)` }}
            >
              {producttwo.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 px-4">
                  <div className="bg-white rounded-sm overflow-hidden">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                    <div className="p-4">
                      <div className="justify-between">

                      <h3 className="text-sm font-semibold">{product.title}</h3>
                      <p className="text-sm font-bold">{product.price}</p></div>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                      <p className="text-gray-600 text-sm">{product.des2}</p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>


      </div>



      <div className="m-9"  >
  <h2 className="font-semibold text-xl text-gray-900  pb-9">Don't Miss</h2>
  <Image src="/bg2.png" alt="bg" width={1344} height={700}/>
</div>

<div className="flex flex-col items-center p-4 text-center">
<h3 className="font-semibold text-black text-3xl mt-1">FLIGHT ESSENTIALS</h3>
    <p className="text-gray-800 max-w-xl text-[15px] mt-3">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
</div>
<div className="flex place-content-center gap-x-2">
    <button className="bg-black p-2 rounded-full text-white px-4">Shop</button>
      </div> 



      <div className="p-6">
        {/* Grid layout */}
        <div className="grid grid-cols-3 gap-4">
          {productsthree.map((product, index) => (
            <div key={index} className="relative group">
              {/* Product Image */}
              <img
                src={product.img}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />

              {/* Button inside image */}
              <button className="absolute bottom-4 left-4 bg-white text-black text-sm px-4 py-2 rounded-full ">
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>



    </>
  );
}
