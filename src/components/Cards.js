import { FaYoutube, FaHeart, FaLeaf, FaHandHoldingWater } from "react-icons/fa";
import Product from "./Products";
import { TbFlagCancel } from "react-icons/tb";
function Cards() {
  const features = [
    {
      icon: <FaLeaf/>,
      title: '100% Natural',
    },
    {
      icon: <FaHandHoldingWater/>,
      title: 'Anti Hair Fall',
    },
    {
      icon: <TbFlagCancel />,
      title: 'Hypoallergenic',
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-1">
        {features.map((feature, index) => (
          <div key={index} className="bg-green-300 p-4 rounded-md shadow-md text-center">
            <div className="text-4xl mb-2">{feature.icon}</div>
            <p className="text-lg font-bold">{feature.title}</p>
          </div>
        ))}
      </div>
      <Product/>
    </div>
  );
}

export default Cards;