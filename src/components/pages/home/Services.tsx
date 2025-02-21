import { MotionDiv } from "@/components/animations/MotionDiv";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Elevate your digital presence with our cutting-edge web development solutions. We create scalable, high-performance applications that deliver exceptional user experiences. Our team leverages the latest technologies and best practices to ensure your web applications are future-proof and maintainable.",
    features: [
      "Progressive Web Apps with Next.js and React",
      "Custom API development with Node.js",
      "Database design and optimization",
      "Cloud deployment and scaling solutions",
      "Performance optimization and caching",
      "Security implementation and testing"
    ],
    gradient: "from-primary-500 to-secondary-500",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
  },
  {
    title: "ERP Solutions",
    description: "Transform your business operations with our comprehensive ERP solutions. We design and implement custom enterprise systems that streamline processes, enhance productivity, and provide real-time insights into your business performance. Our solutions are tailored to meet your specific industry requirements.",
    features: [
      "Comprehensive business process automation",
      "Resource planning and management",
      "Supply chain optimization",
      "Financial management and reporting",
      "Inventory and warehouse management",
      "Business intelligence and analytics"
    ],
    gradient: "from-primary to-secondary",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984"
  },
  {
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to drive innovation and efficiency. Our AI solutions help businesses automate processes, gain valuable insights, and make data-driven decisions. We develop custom AI models and integrate them seamlessly into your existing systems.",
    features: [
      "Custom AI model development",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics",
      "AI-powered automation",
      "Machine learning pipelines"
    ],
    gradient: "from-primary-500 to-secondary-500",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "Mobile Development",
    description: "Create immersive mobile experiences that engage and delight your users. Our mobile development team builds native and cross-platform applications that combine beautiful design with powerful functionality. We ensure your apps perform flawlessly across all devices and platforms.",
    features: [
      "iOS and Android native development",
      "Cross-platform solutions with React Native",
      "Mobile UI/UX design",
      "App performance optimization",
      "Push notification systems",
      "Mobile backend integration"
    ],
    gradient: "from-primary-500 to-secondary-500",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  },
  {
    title: "Business Consultancy",
    description: "Transform your business with our strategic consulting services. Our experienced consultants work closely with you to analyze your business, identify opportunities, and develop actionable strategies for growth. We provide comprehensive guidance to help you make informed decisions and achieve your business objectives.",
    features: [
      "Strategic business planning",
      "Process optimization",
      "Market analysis and research",
      "Growth strategy development",
      "Risk assessment and management",
      "Performance monitoring and analytics"
    ],
    gradient: "from-primary-500 to-secondary-500",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  },
  {
    title: "Content Writing",
    description: "Engage your audience with compelling, SEO-optimized content that drives results. Our expert content team crafts high-quality, strategic content that tells your brand story, builds authority, and connects with your target audience. We ensure your content strategy aligns with your business goals and market demands.",
    features: [
      "SEO-optimized website content",
      "Technical documentation",
      "Blog posts and articles",
      "Social media content",
      "Email marketing campaigns",
      "Brand storytelling and messaging"
    ],
    gradient: "from-primary-500 to-secondary-500",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a"
  },
  {
    title: "Digital Marketing",
    description: "Maximize your online presence with our comprehensive digital marketing solutions. We develop and execute data-driven marketing strategies that increase visibility, engage customers, and drive conversions. Our holistic approach ensures your marketing efforts deliver measurable results and ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click Advertising",
      "Email Marketing Automation",
      "Content Marketing Strategy",
      "Analytics and Performance Tracking"
    ],
    gradient: "from-primary-500 to-secondary-500",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-20 p-8 rounded-2xl shadow-lg bg-background/20"
  >
    {/* Content Side */}
    <MotionDiv
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
    >
      <h3 className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
        {service.title}
      </h3>
      <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2">
            <span className="text-primary mt-1">•</span>
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </MotionDiv>

    {/* Image Side */}
    <MotionDiv
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
    >
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
      </div>
    </MotionDiv>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mt-4 text-foreground/80 max-w-3xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </MotionDiv>

        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
