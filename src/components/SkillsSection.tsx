"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiSqlite,
} from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { DiJava } from "react-icons/di";

const categories = [
  {
    title: "Mobile Development",
    icon: <TbDeviceMobileCode size={24} className="text-blue-400" />,
    skills: [
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Expo", icon: <FaReact className="text-white" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
      { name: "Dart", icon: <SiDart className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-green-500" /> },
      { name: "Java", icon: <DiJava className="text-red-600" /> },
    ],
  },
  {
    title: "Frontend",
    icon: <MdDeveloperMode size={24} className="text-blue-400" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs size={24} className="text-green-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "REST APIs", icon: <MdDeveloperMode /> },
      { name: "JWT Auth", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Firebase Auth", icon: <SiFirebase className="text-orange-400" /> },
    ],
  },
  {
    title: "Database",
    icon: <BsDatabase size={24} className="text-blue-400" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-green-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
      { name: "Firestore", icon: <SiFirebase className="text-orange-400" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <FaGitAlt size={24} className="text-orange-500" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <MdDeveloperMode /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "AWS (S3, API Gateway)", icon: <FaAws className="text-orange-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
];

export default function AnimatedSkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 bg-white text-black dark:bg-[#0b1120] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium">What I Know</p>
          <h2 className="text-4xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-[#111827] border border-gray-300 dark:border-[#1f2937] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/20 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-200 dark:bg-[#1f2937] rounded-xl p-3 flex flex-col items-center justify-center text-xs text-center shadow hover:shadow-blue-500/30 transition"
                  >
                    <div className="text-xl mb-1">{skill.icon}</div>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}