import { MotionDiv } from "@/components/animations/MotionDiv";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/constants/services";

// Map the services to include IDs from servicesData
const services = servicesData.map(service => ({
  title: service.title,
  description: service.shortDescription,
  imageUrl: service.imageUrl,
  id: service.id // Include service ID
}));

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group rounded-xl overflow-clip h-96"
  >
    
    {/* Card content */}
    <div className="relative h-full rounded-xl overflow-hidden shadow-lg border border-primary-500/30 group-hover:border-primary-500/70 transition-colors duration-300">
      <Image
        src={service.imageUrl}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-200 mb-6">{service.description}</p>
          
          <Link href={`/services#${service.id}`} passHref>
            <div className="flex items-center group/link">
              <span className="text-primary-400 font-medium group-hover/link:text-primary-300 transition-colors">Learn More</span>
              <div className="relative w-8 h-8 ml-2 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transform group-hover/link:translate-x-8 group-hover/link:translate-y-8 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 group-hover/link:text-primary-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transform translate-x-8 translate-y-8 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400 group-hover/link:text-primary-300 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </MotionDiv>
      </div>
    </div>
  </MotionDiv>
);

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/services" passHref>
            <span className="inline-flex items-center px-8 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-full font-medium transition-colors duration-300 cursor-pointer group">
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:rotate-45 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Services;
