import { FaRegSmile, FaRegHeart, FaRegStar } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    icon: <FaRegSmile className="text-blue-500 text-4xl" />,
    title: "Welcome!",
    description: "We’re glad to have you here.",
    hoverColor: "blue", // Color for hover effect
  },
  {
    id: 2,
    icon: <FaRegHeart className="text-red-500 text-4xl" />,
    title: "Favorites",
    description: "See your liked items.",
    hoverColor: "red",
  },
  {
    id: 3,
    icon: <FaRegStar className="text-yellow-500 text-4xl" />,
    title: "Top Rated",
    description: "Check out the best rated content.",
    hoverColor: "yellow",
  },
  {
    id: 4,
    icon: <FaRegStar className="text-green-500 text-4xl" />,
    title: "Special Picks",
    description: "Handpicked just for you.",
    hoverColor: "green",
  },
];

const StoreTopCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="relative flex items-center bg-white shadow-md rounded-2xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
        >
          {/* Left-to-Right Background Fill Animation */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent to-${card.hoverColor}-500 transition-all duration-500 transform bg-[length:0%_100%] hover:bg-[length:100%_100%]`}
          ></div>

          {/* Card Content */}
          <div className="relative z-1 flex items-center">
            <div className="mr-4">{card.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreTopCard;
