import shampooImage from "../images/product-1.png"; 
import shampooImage2 from "../images/product-2.png";
import Navbar from './Navbar';

function Heading() {
  return (
    <div className="bg-green-200 min-h-screen">
      
    <Navbar/>
    
      <section className="container mx-auto mt-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Natural & Organic</h2>
            <h1 className="text-6xl font-bold mb-4">Hair Shampoo For Healthy Hair</h1>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etain feugiat rutrum lectus, sed audier ex malesuatte id. Orci varius natoque penas et magnis dis partialent I</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Shop Now</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Contact Us</button>
            </div>
          </div>

          <div className="md:w-1/4 flex justify-center items-center">
            <img src={shampooImage} alt="Shampoo" className="w-48 md:w-full" />
            <img src={shampooImage2} alt="Shampoo" className="w-48 md:w-full mt-4" />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Heading;