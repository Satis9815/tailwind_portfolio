import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Coffee } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600">
            Passionate frontend developer with a keen eye for design and a love for creating
            seamless user experiences. I specialize in modern web technologies and enjoy
            turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AboutCard
            icon={Code2}
            title="Clean Code"
            description="Writing maintainable, scalable, and efficient code is my top priority."
          />
          <AboutCard
            icon={Palette}
            title="Design Focus"
            description="Creating beautiful and intuitive user interfaces that delight users."
          />
          <AboutCard
            icon={Coffee}
            title="Always Learning"
            description="Constantly exploring new technologies and best practices in web development."
          />
        </div>
      </div>
    </section>
  );
};

export default About;