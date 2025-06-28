import { useEffect, useState } from "react";
import bmiImage from "../assets/BMI.jpg";
import WallpaperApp from "../assets/WallpaperApp.png";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("portfolio");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projectPlaceholders = [
    {
      title: "BMI Calculator",
      description:
        "A BMI (Body Mass Index) calculator application has three text fields that take your name, weight, and height, and then it calculates your BMI and displays the result on the screen.",
      tags: ["Flutter", "Dart"],
      image: bmiImage,
      github: "https://github.com/YashBhalodiya/BMI_Calculator",
    },
    {
      title: "A Wallpaper App",
      description:
        "A Simple Wallpaper app using React Native Expo, and i have used API of the Pixabay to show the wallpapers",
      tags: ["React Native", "Mobile"],
      image: WallpaperApp,
      github: "https://github.com/YashBhalodiya/wallpaper-app",
    },
    {
      title: "Project Three",
      description: "Coming Soon",
      tags: ["Flutter", "Firebase"],
      image: "placeholder-project-3",
    },
  ];

  return (
    <section id="portfolio" className="section relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 text-lg">My Work</p>
          <h2 className="mb-4 text-4xl md:text-5xl">Projects Coming Soon</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectPlaceholders.map((project, index) => (
            <div
              key={project.title}
              onClick={() => handleCardClick(project)}
              className={`group cursor-pointer bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 overflow-hidden rounded-2xl shadow-xl transition-all duration-500 delay-${
                index * 150
              } hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="h-64 overflow-hidden relative">
                {typeof project.image === "string" &&
                project.image.startsWith("placeholder") ? (
                  <div className="h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl opacity-50 mb-4 block">
                        {project.image === "placeholder-project-3" && "🚀"}
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                        style={{
                          imageRendering: "crisp-edges",
                          WebkitImageSmoothing: "high",
                          imageSmoothing: "high",
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-sm md:text-base font-semibold border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:from-primary/20 hover:to-primary/10 hover:border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <span className="inline-flex items-center text-sm md:text-base text-primary font-medium opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Code
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-2xl relative shadow-2xl border border-gray-200/20 dark:border-gray-700/30 overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-0">
              {selectedProject.image &&
              !selectedProject.image.toString().startsWith("placeholder") ? (
                <div className="h-80 bg-white dark:bg-gray-900 flex items-center justify-center p-8 border-b border-gray-200/20 dark:border-gray-700/30">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitImageSmoothing: "high",
                      imageSmoothing: "high",
                    }}
                  />
                </div>
              ) : (
                <div className="h-80 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center border-b border-gray-200/20 dark:border-gray-700/30">
                  <div className="text-center">
                    <span className="text-8xl opacity-50 mb-4 block">
                      {selectedProject.image === "placeholder-project-3" && "🚀"}
                    </span>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                      Coming Soon
                    </p>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg md:text-xl">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-5 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-base md:text-lg font-semibold border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium text-base md:text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
