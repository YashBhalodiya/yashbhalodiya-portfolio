
import { useEffect, useState } from "react";
import { Layout, Smartphone } from "lucide-react";

const ServicesSection = () => {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and interactive web applications with modern frameworks like React",
      icon: <Layout size={32} className="text-primary" />,
      technologies: ["React", "HTML", "CSS/SCSS", "JavaScript"]
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform and native mobile applications for iOS and Android",
      icon: <Smartphone size={32} className="text-primary" />,
      technologies: ["React Native", "Flutter", "Dart", "Kotlin", "Java"]
    }
  ];

  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="mb-4">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass p-8 rounded-xl transition-all duration-700 delay-${index * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-block p-4 rounded-lg bg-primary/10 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div>
                <h4 className="text-sm font-medium mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background rounded-full text-xs font-medium"
                    >
                      {tech}
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

export default ServicesSection;
