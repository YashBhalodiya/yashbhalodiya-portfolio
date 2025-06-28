
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
      title: "Mobile App Development",
      description: "Building cross-platform and native mobile applications for iOS and Android",
      icon: <Smartphone size={32} className="text-primary" />,
      technologies: ["React Native", "Flutter", "Dart", "Kotlin", "Java"]
    },
  ];

  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="mb-4">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass p-12 rounded-xl transition-all duration-700 delay-${index * 200} max-w-4xl w-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-block p-6 rounded-lg bg-primary/10 mb-8">
                <Smartphone size={48} className="text-primary" />
              </div>
              <h3 className="text-3xl font-semibold mb-6">{service.title}</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>
              <div>
                <h4 className="text-lg font-medium mb-4">Technologies:</h4>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-background rounded-full text-sm font-medium"
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
