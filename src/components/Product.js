import shampoo from "../images/shampoo-2.png"
function Product(){

    return(
        <div className="bg-green-400 min-h-screen">
        <div className="container mx-auto p-8">
          <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center items-center">
              <img src={shampoo} alt="Shampoo"  />
            </div>

            <div className="md:w-1/3 bg-white border p-4 text-center">
  <div className="border p-4">
    <p className="mb-2">Natural & Organic Shampoo</p>
    <h1 className="text-2xl font-bold text-center mb-4">DEALS OF THE DAY</h1>
    <p className="text-3xl font-bold text-center text-green-700 mb-8">PKR 99.99</p>
    <h4 className="text-lg font-bold text-center mb-2">Fresh Organic Shampoo</h4>
    <p className="text-sm text-center mb-4">In three words I can sum up everything I've learned about life: it goes on. Robert Frost</p>
    <div className="flex justify-center items-center space-x-4 mb-4">
      <div className="text-center">
        <p className="text-2xl font-bold" id="cdt-days">0</p>
        <p className="text-sm">Days</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold" id="cdt-hours">23</p>
        <p className="text-sm">Hours</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold" id="cdt-minutes">51</p>
        <p className="text-sm">Mins</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold" id="cdt-seconds">13</p>
        <p className="text-sm">Secs</p>
      </div>
    </div>
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Shop Now</button>
    
  </div>
</div>
           
          </div>
        </div>
      </div>
    )
}

export default Product;