import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import wpColoneImage from "../assets/images/wp-clone.png";
import blogTempImg from "../assets/images/blog-temp.png";
import ecomImg from "../assets/images/ecom.png";
import xcryptoImg from "../assets/images/crypto.png";
import ytImg from "../assets/images/youtube.png";
import storeImg from "../assets/images/store.png"
import expenseTracker from "../assets/images/expense-tracker.png";
import extrableImg from "../assets/images/x-table.png";
import wordCounter from "../assets/images/wordCounter.png";
import tacImg from "../assets/images/tac.png";
import aa from "../assets/images/aa.png";
import careerImg from "../assets/images/career.png";
import lms from "../assets/images/lms.png";
import kencenter from "../assets/images/kencenter.png";
import khojbazar from "../assets/images/khojbazar.png";
import mauntech from "../assets/images/mauntech.png";
import swifly from "../assets/images/swifly.png";
import ees from "../assets/images/ees.png";


const ProjectCard = ({ title, description, image, tech, github, demo ,isWorked}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  isWorked?:boolean

}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {
          !isWorked &&(   <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
            <span>Code</span>
          </a>)
        }
     
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ExternalLink size={20} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Web Clone",
      description: "WhatsApp Web Clone is a simple clone of WhatsApp Web which I have build with the help of html,css and bootstrap",
      image:wpColoneImage,
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/Satis9815/What-sApp-web-Clone",
      demo: "https://satis9815.github.io/What-sApp-web-Clone/",
    },
    {
      title: "Blog Template",
      description: "I have created a static blog template which is using plain html,css and Javascript with full responsive",
      image: blogTempImg,
      tech: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Satis9815/Simple-blog-template",
      demo: "https://satis9815.github.io/Simple-blog-template/",
    },
    {
      title: "E-commerce website",
      description: "I have created a simple coding tshirts ecommerce website template using React.",
      image: ecomImg,
      tech: ["React","HTML","Sass"],
      github: "",
      demo: "https://coding-t-shirts-wala-ecommerce-website-frontend.vercel.app/",
      isWorked:true
    },
    {
      title: "xCrypto(CryptoCoins)",
      description: "I have created real time crypto trading site.In this website shows the real time data(CryptoCoins)",
      image: xcryptoImg,
      tech: ["React","HTML","Chakra UI"],
      github: "",
      demo: "https://crypto-trading-app-nu.vercel.app/",
      isWorked:true
    },
    {
      title: "Modern Yotube media",
      description: "I have created modern YouTube media and I have used React and material ui(YouTube 2.0)",
      image: ytImg,
      tech: ["React","HTML","CSS","Material UI"],
      github: "#",
      demo: "https://modern-you-tube-media.vercel.app/",
      isWorked:true
    },
    {
      title: "X Table Generator",
      description: "I have created mutiplication table generator using html,css and javascript",
      image: extrableImg,
      tech: ["HTML","CSS","Javascript"],
      github: "https://github.com/Satis9815/multiplication-table-generator",
      demo: "https://satis9815.github.io/multiplication-table-generator/",
    },
    {
      title: "E-commerce",
      description: "I have created a simple ecommerce  ecommerce website  template to display products,search products with light and dark mode  using React.",
      image: storeImg,
      tech: ["React","Sass","Redux","Redux toolkit","Fakestore API"],
      github: "https://github.com/Satis9815/myStore",
      demo: "https://my-store-two-sepia.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description: "I have created Expense Tracker using html,css and Javscript",
      image: expenseTracker,
      tech: ["HTML","CSS","Javascript"],
      github: "https://github.com/Satis9815/Expense-Tracker",
      demo: "https://satis9815.github.io/Expense-Tracker/",
    },
    {
      title: "Word Counter",
      description: "I have created textutils webapp which can manipulate your text like convert uppercase,lowercase,remove punctuation,remove extra spaces and also extract email from your give text.",
      image: wordCounter,
      tech: ["HTML","CSS","Javascript"],
      github: "https://github.com/Satis9815/word-counter",
      demo: "https://satis9815.github.io/word-counter/",
    },
  ];

  const workedProjects = [
    {
      title: "The Agile Coatch",
      description: "",
      image:tacImg,
      tech: ["HTML", "CSS", "Bootstrap","Javascript","Sass","Reactjs"],
      github: "#",
      demo: "https://theagilecoach.com/",
      isWorked:true
    },
    {
      title: "Agile Academy",
      description: "",
      image:aa,
      tech: ["HTML", "CSS", "Bootstrap","Javascript","Sass","Reactjs"],
      github: "#",
      demo: "https://agileacademy.io/",
      isWorked:true
    },
    {
      title: "Career AI",
      description: "",
      image:careerImg,
      tech: ["Reactjs","Sass","Netxjs","Nodejs","Redux","Redux Toolkit"],
      github: "#",
      demo: "https://www.careerai.io/",
      isWorked:true
    },
    {
      title: "Learning Management System",
      description: "",
      image:lms,
      tech: ["Reactjs","Sass","Redux","Redux Toolkit"],
      github: "#",
      demo: "https://scholarsai.com/",
      isWorked:true
    },
    {
      title: "Kencenter",
      description: "",
      image:kencenter,
      tech: ["Reactjs","Sass","Redux","Redux Toolkit"],
      github: "#",
      demo: "https://kencenter.com.np/",
      isWorked:true
    },
    {
      title: "Khojbazar",
      description: "",
      image:khojbazar,
      tech: ["Reactjs","Sass","Redux","Redux Toolkit"],
      github: "#",
      demo: "https://khojbazar.com/",
      isWorked:true
    },
    {
      title: "Mauntechnology",
      description: "",
      image:mauntech,
      tech: ["HTML","CSS","Javascript"],
      github: "#",
      demo: "https://mauntechnology.com/",
      isWorked:true
    },
    {
      title: "joinswiftly",
      description: "",
      image:swifly,
      tech: ["Reactjs","Sass","Redux","Redux Toolkit"],
      github: "#",
      demo: "https://joinswiftly.com/",
      isWorked:true
    },
    {
      title: "engineering endeavor service",
      description: "",
      image:ees,
      tech: ["Reactjs","Sass","Redux","Redux Toolkit"],
      github: "#",
      demo: "https://endeavourengineering.com.np/",
      isWorked:true
    },

  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 mt-12"
        >
          Worked  Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;