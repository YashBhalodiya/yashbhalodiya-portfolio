// AnimatedSkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiDart, SiFlutter, SiKotlin } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { DiJava } from "react-icons/di";

const categories = [
  {
    title: "Frontend",
    icon: <MdDeveloperMode size={24} className="text-blue-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: "Mobile",
    icon: <TbDeviceMobileCode size={24} className="text-blue-400" />,
    skills: [
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
      { name: "Dart", icon: <SiDart className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-green-500" /> },
      { name: "Java", icon: <DiJava className="text-red-600" /> },
    ],
  },
  {
    title: "Backend & Tools",
    icon: <BsDatabase size={24} className="text-blue-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
    ],
  },
];

export default function AnimatedSkillsSection() {
  return (
    <section id="skills" className="py-16 bg-[#0b1120] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium">What I Know</p>
          <h2 className="text-4xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-[#1f2937] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/20 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#1f2937] rounded-xl p-3 flex flex-col items-center justify-center text-sm text-center shadow hover:shadow-blue-500/30 transition"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
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
