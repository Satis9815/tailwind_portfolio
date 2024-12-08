import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

const EducationCard = ({ year, title, institution, description, certifications }: {
  year: string;
  title: string;
  institution: string;
  description: string;
  certifications?: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
        <BookOpen size={24} />
      </div>
      <div>
        <span className="text-sm text-blue-600 font-semibold">{year}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
    <p className="text-gray-700 font-medium mb-2">{institution}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    {certifications && (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-700">
          <Award size={18} />
          <span className="font-medium">Certifications</span>
        </div>
        <ul className="list-disc list-inside text-gray-600 ml-2">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    )}
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      year: "2018 - 2022",
      title: "Bachelor's in Computer Science",
      institution: "University of Technology",
      description: "Specialized in Web Development and UI/UX Design with focus on modern web technologies.",
      certifications: [
        "AWS Certified Developer",
        "Google UX Design Professional Certificate"
      ]
    },
    {
      year: "2022 - 2023",
      title: "Master's in Web Engineering",
      institution: "Tech Institute",
      description: "Advanced studies in Modern Web Technologies and Software Architecture.",
      certifications: [
        "React Advanced Certification",
        "Cloud Architecture Specialization"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;