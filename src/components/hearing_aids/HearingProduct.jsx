"use client";

const data = [
  {
    title: "Discover the Power of Hearing",
    description:
      "Hearing loss is more common than vision loss and affects 1 out of 3 people over the age of 65. It is important to take action and seek help early to prevent further complications.",
    imageUrl: "/images/slide1.jpg",
  },
  {
    title: "Why Early Detection is Important",
    description:
      "It is crucial to detect hearing loss early to avoid isolation, frustration, and further deterioration of hearing health. Seeking help is the first step toward improving your quality of life.",
    imageUrl: "/images/slide2.jpg",
  },
  {
    title: "Hearing Aids and Technology",
    description:
      "Modern hearing aids and assistive technologies provide incredible improvements in hearing, offering a better quality of life for those with hearing impairments.",
    imageUrl: "/images/slide3.jpg",
  },
];

export default function HearingProduct() {
  return (
    <div className="w-full py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">Be brilliant with Signia hearing aids</h1>
      <div className="max-w-6xl mx-auto px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="max-w-[80%] max-h-[80%] object-contain shadow-lg p-2 bg-white"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                {item.title}
              </h2>
              <p className="text-base  text-gray-700 mb-6 font-sans">
                {item.description}
              </p>
              {/* <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Learn More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
