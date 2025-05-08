"use client";

const teamMembers = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    image: "/images/profile1.jpg",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/images/profile2.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: "/images/profile3.jpg",
  },
  {
    name: "Bob Williams",
    role: "DevOps Engineer",
    image: "/images/profile4.jpg",
  },
  {
    name: "Bob Williams",
    role: "DevOps Engineer",
    image: "/images/profile4.jpg",
  },
];

export default function WomenCategory() {
  return (
    <div className="w-full px-4 py-10 bg-gray-50">
      <div className="text-2xl font-bold font-serif p-5 text-center">
        <span className="border-b-4 border-blue-400 pb-1">Women Category</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle Card */}
            <div className="w-40 h-40 bg-white shadow-lg rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Role Outside */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
