
function ProductCard({ product }) {
  const { name, price, rating, picture, description } = product;

  return ( 
  

    <div className="bg-white rounded-lg h-50 p-4 border">
      <div className="bg-blue-200 h-30">

      <img src={picture} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      </div>

      <div className="mt-4">
        
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-gray-600">({rating})</span>
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>


        <p className="text-lg font-semibold mt-2">PKR{price}</p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export  default ProductCard;