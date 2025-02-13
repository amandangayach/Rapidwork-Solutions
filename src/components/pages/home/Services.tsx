import { MotionDiv } from "@/components/animations/MotionDiv";
import { Icons } from "@/components/shared/Icons";
import React from "react";

type ServiceIcon = "webdev" | "content" | "marketing" | "consulting" | "erp" | "mobile";

const services: { title: string; description: string; icon: ServiceIcon; gradient: string }[] = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies",
    icon: "webdev",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Content Writing",
    description: "SEO-optimized content that engages your audience and drives results",
    icon: "content",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence",
    icon: "marketing",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Business Consultancy",
    description: "Strategic business solutions and expert consulting for sustainable growth",
    icon: "consulting",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "ERP Solutions",
    description: "Integrated enterprise solutions to streamline your business operations",
    icon: "erp",
    gradient: "from-primary to-secondary",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android",
    icon: "mobile",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-xl bg-foreground/5 p-6 backdrop-blur-sm hover:bg-foreground/10 transition-all duration-300"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} transition-opacity duration-300`} />
    <div className="relative z-10">
      <div className={`inline-flex rounded-lg bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg`}>
        <Icons name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-foreground/70">{service.description}</p>
    </div>
  </MotionDiv>
);

const Services = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary-100/10 to-background/0" />
      
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
