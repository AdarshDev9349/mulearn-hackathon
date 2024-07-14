import React from "react";

const stacks = [
  { title: "Web Development", description: "Build modern web applications." },
  {
    title: "Mobile Development",
    description: "Create mobile apps for Android and iOS.",
  },
  { title: "Data Science", description: "Analyze and visualize data." },
  { title: "Machine Learning", description: "Develop intelligent systems." },
  { title: "Blockchain", description: "Work with decentralized applications." },
  {
    title: "DevOps",
    description: "Automate and improve development processes.",
  },
];

const colors = [
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
  "bg-transparent",
];

const Stacks = () => {
  const Card = ({ title, description, color }) => {
    return (
      <div
        className={`card ${color} border-2 rounded-xl w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 perspective-1000 justify-self-center transition-transform transform hover:scale-105`}
      >
      <div className={`card ${color} border-none w-full sm:w-72 md:w-90 h-40 sm:h-60 md:h-65 perspective-1000 justify-self-center transition-transform transform hover:scale-105`}>
        <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-[999ms]">
          <div className="card-body absolute w-full h-full backface-hidden bg-base-100 shadow-xl flex flex-col justify-center items-center text-center p-4 sm:p-6">
            <h2 className="card-title text-xl sm:text-2xl text-white font-bold" style={{ color: "#E292E7" }}>{title}</h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-lg"style={{ color: "#EEE8DA" }}>{description}</p>
            <div className="card-actions mt-2 sm:mt-4">
             
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

  return (
    <div className="relative py-16" style={{ backgroundColor: "#020b12" }}>
      <div className="absolute inset-0 flex justify-center items-center z-0 items-start">
        <h1 className="custom-heading2">STACKS</h1>
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack, index) => (
            <Card
              key={index}
              title={stack.title}
              description={stack.description}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
