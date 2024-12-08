import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const ExperienceCard = ({ year, title, company, description, achievements }: {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
        <Briefcase size={24} />
      </div>
      <div>
        <span className="text-sm text-blue-600 font-semibold">{year}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
    <p className="text-gray-700 font-medium mb-2">{company}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="space-y-3">
      <h4 className="font-medium text-gray-700">Key Achievements:</h4>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const experienceData = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Leading frontend development team and implementing modern web solutions.",
      achievements: [
        "Led a team of 5 developers in rebuilding the company's flagship product",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      year: "2021 - 2022",
      title: "Frontend Developer",
      company: "Digital Innovations Ltd",
      description: "Developed responsive web applications using React and TypeScript.",
      achievements: [
        "Built 3 major client projects with 100% satisfaction rate",
        "Mentored 2 junior developers",
        "Introduced TypeScript to the team, reducing bugs by 30%"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;