import image from "../images/product-1.png";
import imge from "../images/product-2.png";
import React from 'react';
import ProductCard from './ProductCard'; 

function ProductList() {
  const products = [
    {
      name: 'Hair Shining Shampoo',
      price: 99.99,
      rating: 90,
      picture: image,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Anti-dandruff Shining Shampoo',
        price: 99.99,
        rating: 90,
        picture: imge,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        name: 'Anti Hair Shining Shampoo',
        price: 99.99,
        rating: 90,
        picture: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        name: 'Hair Growing Shampoo',
        price: 99.99,
        rating: 90,
        picture: imge,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },

    ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
     
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;