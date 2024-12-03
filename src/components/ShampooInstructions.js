import { FaHandsWash, FaHome } from 'react-icons/fa';
import InstructionCard from './InstructionCard';
import { FaHandHolding } from 'react-icons/fa6';

function ShampooInstructions() {
  const instructions = [
    {
      icon: <FaHome/>,
      title: 'Wash Hair With Water',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    },
    {
      icon: <FaHandsWash/>,
      title: 'Apply Shampoo On Hair',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    },
    {
      icon: <FaHandHolding/>,
      title: 'Wait 5 Mins And Wash',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    },
  ];

  return (
    <div className="bg-green-200">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">How To Use Our Natural & Organic Hair Shampoo</h2>
        <p className="text-center mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructions.map((instruction, index) => (
            <InstructionCard key={index} {...instruction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShampooInstructions;