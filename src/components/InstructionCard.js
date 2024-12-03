
function InstructionCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-green-500 text-white rounded-full p-4 text-xl">
          <i>{icon}</i>
        </div>
        <h3 className="text-xl font-bold ml-4">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default InstructionCard;