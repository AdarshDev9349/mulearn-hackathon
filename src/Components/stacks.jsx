import React from 'react';

const stacks = [
  { title: 'Web Development', description: 'Build modern web applications.' },
  { title: 'Mobile Development', description: 'Create mobile apps for Android and iOS.' },
  { title: 'Data Science', description: 'Analyze and visualize data.' },
  { title: 'Machine Learning', description: 'Develop intelligent systems.' },
  { title: 'Blockchain', description: 'Work with decentralized applications.' },
  { title: 'DevOps', description: 'Automate and improve development processes.' },
];

const Stacks = () => {
  const Card = ({ title, description }) => {
    return (
      <div className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-105">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="mt-4 text-lg">{description}</p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack, index) => (
            <Card key={index} title={stack.title} description={stack.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
