import { useEffect, useState } from "react";
import { Layout, Smartphone, Server } from "lucide-react";

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
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Mobile App Development",
      description: "Building cross-platform and native mobile applications for iOS and Android.",
      Icon: Smartphone,
      technologies: ["React Native", "Flutter", "Kotlin", "Java"]
    },
    {
      title: "Web Development",
      description: "Creating responsive, fast, and interactive web applications using modern frameworks.",
      Icon: Layout,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      title: "Backend Development",
      description: "Designing scalable APIs, managing databases, and building robust server-side architectures.",
      Icon: Server,
      technologies: ["Node.js", "Express", "MongoDB", "SQL"]
    }
  ];

  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.title}
                className={`glass p-8 rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-block p-4 rounded-lg bg-primary/10 mb-6 w-fit">
                  <Icon size={36} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">{service.description}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-medium mb-3 text-foreground/80 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border/50 text-foreground/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
