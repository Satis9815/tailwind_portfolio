import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface TimelineItem {
  type: 'education' | 'experience';
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements?: string[];
  certifications?: string[];
}

const TimelineEntry = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isLeft = index % 2 === 0;
  const Icon = item.type === 'education' ? GraduationCap : Briefcase;

  return (
    <div className={`flex overflow-x-hidden ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full items-center justify-center`}>
      <div className="md:w-5/12">
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 ${
            item.type === 'education' ? 'border-blue-500' : 'border-purple-500'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 ${
              item.type === 'education' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-purple-100 text-purple-600'
            } rounded-lg`}>
              <Icon size={24} />
            </div>
            <div>
              <span className={`text-sm ${
                item.type === 'education' ? 'text-blue-600' : 'text-purple-600'
              } font-semibold`}>
                {item.year}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </div>
          <p className="text-gray-700 font-medium mb-2">{item.organization}</p>
          <p className="text-gray-600 mb-4">{item.description}</p>
          
          {/* {item.certifications && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Award size={18} />
                <span className="font-medium">Certifications</span>
              </div>
              <ul className="space-y-1">
                {item.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-1" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {/* {item.achievements && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 size={18} />
                <span className="font-medium">Key Achievements</span>
              </div>
              <ul className="space-y-1">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-1" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </motion.div>
      </div>

      <div className="md:w-2/12 flex justify-center">
        <div className="w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={` hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
              item.type === 'education' ? 'bg-blue-500' : 'bg-purple-500'
            }`}
          />
        </div>
      </div>

      <div className="md:w-5/12" />
    </div>
  );
};

const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      type: 'education',
      year: '2018 - 2022',
      title: "Bachelor's in Computer Science Engineering",
      organization: 'Sambhram Institute of technology,Visvesvaraya Technological University(VTU), India(Banglore)',
      description: 'Studied Computer Science Engineering which consists of all the subjects accross all engineering and computer science streams. Passed with 7.1 CGPA',
      // certifications: [
      //   'AWS Certified Developer',
      //   'Google UX Design Professional Certificate'
      // ]
    },
    {
      type: 'experience',
      year: 'Oct 2022 - Jan 2023',
      title: 'React Intern',
      organization: 'Techxillence',
      description: 'Devlope creative website with amazing design and animation.Learn about new technology.motivate myself to do hardwork.',
      // achievements: [
      //   'Built 3 major client projects with 100% satisfaction rate',
      //   'Mentored 2 junior developers',
      //   'Introduced TypeScript to the team, reducing bugs by 30%'
      // ]
    },
    {
      type: 'education',
      year: '2016 - 2018',
      title: "+2(Science)",
      organization: 'Janta Multiple campus,National Examinations Board(NEB),Nepal(Ithari)',
      description: 'Studied 12th Science stream which consists of all the subjects accross computer science(Basic) and Biology. Passed with 64%',
      // certifications: [
      //   'React Advanced Certification',
      //   'Cloud Architecture Specialization'
      // ]
    },
    {
      type: 'experience',
      year: 'Feb 2023 - May 2023',
      title: 'Trainee developer (Remote)',
      organization: 'Robotech Solutions Pvt. Ltd.',
      description: 'Developing components and landing pages from scratch using html,scss and javascript framework like React and Nextjs',
      // achievements: [
      //   'Led a team of 5 developers in rebuilding the company\'s flagship product',
      //   'Improved application performance by 40% through optimization',
      //   'Implemented CI/CD pipeline reducing deployment time by 60%'
      // ]
    },
    {
      type: 'education',
      year: '2005 - 2016',
      title: "High school(1-10th)",
      organization: 'Shree Bhadhgaun sinuwari higher secondary school,Nepal(Jhumka)',
      description: 'Studied 1 to 10th class and Passed with 81%.',
      // certifications: [
      //   'React Advanced Certification',
      //   'Cloud Architecture Specialization'
      // ]
    },
    {
      type: 'experience',
      year: 'May 2023 - Present',
      title: 'Junior React Developer',
      organization: 'Robotech Solutions Pvt. Ltd.',
      description: 'Devlope creative components with amazing design and animation. And Integration.',
      // achievements: [
      //   'Led a team of 5 developers in rebuilding the company\'s flagship product',
      //   'Improved application performance by 40% through optimization',
      //   'Implemented CI/CD pipeline reducing deployment time by 60%'
      // ]
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Journey</h2>
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Education</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Experience</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional path combining education and industry experience
          </p>
        </motion.div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineEntry key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;