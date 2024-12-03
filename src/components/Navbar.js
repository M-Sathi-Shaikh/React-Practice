
function Navbar() {
  return (
    <nav className="bg-green-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Hairnic</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:underline">Home</a></li>
          <li><a href="#" className="text-white hover:underline">About</a></li>
          <li><a href="#" className="text-white hover:underline">Products</a></li>
          <li><a href="#" className="text-white hover:underline">Pages</a></li>
          <li><a href="#" className="text-white hover:underline">Contact</a></li>
          <li><a href="#" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Shop Now</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;