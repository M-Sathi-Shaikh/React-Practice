import React from 'react';
import shampooImage from "../images/product-1.png"; 

function Product() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center items-center">
            <img src={shampooImage} alt="Shampoo" className="w-80" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Healthy Hair Is A Symbol Of Our Beauty</h1>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisi vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
            <p className="text-lg mb-8">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Shop Now</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Product;