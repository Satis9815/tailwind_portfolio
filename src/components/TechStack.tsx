import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Shield, Smartphone } from 'lucide-react';

const TechCategory = ({ title, skills, icon: Icon, color }: {
  title: string;
  skills: string[];
  icon: React.ElementType;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Layout,
      color: "bg-blue-500",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "bg-green-500",
      skills: ["Node.js", "Express", 
        "REST APIs"
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "bg-purple-500",
      skills: ["MongoDB",
        //  "PostgreSQL", "Redis", "Firebase"
        ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "bg-orange-500",
      skills: ["React Native", "iOS", "Android"]
    },
    {
      title: "DevOps",
      icon: Code2,
      color: "bg-red-500",
      skills: [
        // "Docker", "AWS", "CI/CD",
         "Git", "Linux","VPS"
        ]
    },
    {
      title: "Security",
      icon: Shield,
      color: "bg-indigo-500",
      skills: ["OAuth", "JWT", "HTTPS"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of technologies I work with to build modern,
            scalable, and maintainable applications.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <TechCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;