
import { useEffect, useState } from "react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      title: "Project One",
      description: "Coming Soon",
      tags: ["React", "Tailwind CSS"],
      image: "placeholder-project-1"
    },
    {
      title: "Project Two",
      description: "Coming Soon",
      tags: ["React Native", "Mobile"],
      image: "placeholder-project-2"
    },
    {
      title: "Project Three",
      description: "Coming Soon",
      tags: ["Flutter", "Firebase"],
      image: "placeholder-project-3"
    }
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="mb-4">Projects Coming Soon</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectPlaceholders.map((project, index) => (
            <div
              key={project.title}
              className={`glass overflow-hidden rounded-xl shadow-lg transition-all duration-700 delay-${index * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Project placeholder image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl opacity-30">
                  {project.image === "placeholder-project-1" && "🖥️"}
                  {project.image === "placeholder-project-2" && "📱"}
                  {project.image === "placeholder-project-3" && "📊"}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
