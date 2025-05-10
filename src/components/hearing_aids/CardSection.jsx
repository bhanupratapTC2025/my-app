"use client";
import { EarOff, UsersRound, ShieldQuestion } from "lucide-react";

export default function CardSection() {
  const cardData = [
    {
      icon: EarOff,
      title: "Hearing loss is more common than vision loss",
      description: "Hearing loss is more common than vision loss",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: UsersRound,
      title: "It affects 1 out of 3 people over the age of 65. Care",
      description: "It affects 1 out of 3 people over the age of 65.",
      color: "text-red-500 bg-red-100 ",
    },
    {
      icon: ShieldQuestion,
      title: "Average person waits 7 years before seeking help.",
      description: "Average person waits 7 years before seeking help.",
      color: "text-yellow-500 bg-yellow-100",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-2xl font-bold font-serif p-5 text-center">
        Did You Know?
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <div
                className={`w-16 h-16 rounded-lg   flex items-center justify-center ${card.color}`}
              >
                <card.icon size={28} />
              </div>
            </div>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
