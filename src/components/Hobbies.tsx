import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Bike, Book, Gamepad, Music, Plane } from 'lucide-react';

const HobbyCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Hobbies = () => {
  const hobbies = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring urban landscapes through my lens."
    },
    {
      icon: Bike,
      title: "Cycling",
      description: "Weekend adventures exploring new trails and scenic routes."
    },
    {
      icon: Book,
      title: "Reading",
      description: "Tech books, science fiction, and personal development literature."
    },
    {
      icon: Gamepad,
      title: "Gaming",
      description: "Strategy games and indie titles that challenge the mind."
    },
    {
      icon: Music,
      title: "Music",
      description: "Playing guitar and discovering new indie artists."
    },
    {
      icon: Plane,
      title: "Traveling",
      description: "Exploring new cultures and working remotely from different places."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Beyond Coding</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When I'm not crafting code, you can find me pursuing these passions
            that keep me creative and energized.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;