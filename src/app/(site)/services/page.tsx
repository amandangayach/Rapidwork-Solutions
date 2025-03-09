import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '@/components/animations/MotionDiv'
import Link from 'next/link'
import { benefits, servicesData } from '@/lib/constants/services';
import { 
  FaLightbulb, 
  FaPuzzlePiece, 
  FaBolt, 
  FaComments 
} from 'react-icons/fa';

// Function to get the appropriate icon component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLightbulb':
      return <FaLightbulb className="h-8 w-8" />;
    case 'FaPuzzlePiece':
      return <FaPuzzlePiece className="h-8 w-8" />;
    case 'FaBolt':
      return <FaBolt className="h-8 w-8" />;
    case 'FaComments':
      return <FaComments className="h-8 w-8" />;
    default:
      return <FaLightbulb className="h-8 w-8" />; // Default icon
  }
};

const ServiceCard = ({ service }: { service: typeof servicesData[0] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
    <div className="relative h-64 w-full">
      <Image 
        src={service.imageUrl} 
        alt={service.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{service.shortDescription}</p>
      <Link href={`#${service.id}`} passHref>
        <span className="text-primary-500 font-medium hover:text-primary-600 dark:hover:text-primary-400 flex items-center transition-colors cursor-pointer">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </Link>
    </div>
  </div>
);

const ServiceDetails = ({ service, index }: { service: typeof servicesData[0], index: number }) => (
  <section
    id={service.id}
    className={`py-20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'} scroll-mt-28`}
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {service.title}
          </h2>
          <div className="w-16 h-1 bg-primary-500 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            {service.fullDescription}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">What we offer:</h3>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Link href="/contact" passHref>
              <span className="px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors cursor-pointer">
                Get Started
              </span>
            </Link>
            <Link href="/portfolio" passHref>
              <span className="ml-4 px-6 py-3 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition-colors cursor-pointer">
                View Projects
              </span>
            </Link>
          </div>
        </div>
        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src={service.caseStudyImage} 
              alt={`${service.title} illustration`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index < 2} // Prioritize loading the first two images
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
              <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {service.highlightText}
                </p>
              </div>
            </div>
          </div>
          <div 
            className="absolute -z-10 w-full h-full bg-primary-500/20 rounded-xl"
            style={{ top: '20px', left: '20px' }}
          />
        </div>
      </div>
    </div>
  </section>
);

// Server component - no client-side logic needed
const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Services Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Comprehensive Digital Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Innovative solutions designed to transform your business and drive growth in the digital age
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Tailored Solutions</h3>
              <p className="text-gray-300">Customized strategies and solutions aligned with your business goals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Seasoned professionals with deep industry knowledge and experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable outcomes for our clients</p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive range of services designed to help your business succeed in the digital landscape
              </p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <MotionDiv
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section - No animations that would cause rendering delay */}
      {servicesData.map((service, index) => (
        <ServiceDetails key={service.id} service={service} index={index} />
      ))}

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-primary-100">
                When you partner with us, you gain access to a team of experts committed to your success
              </p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <MotionDiv
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <div className="text-white mb-4">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-primary-100">{benefit.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
                Let us help you leverage our expertise to achieve your business goals. Contact us today for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" passHref>
                  <span className="px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors font-medium text-lg cursor-pointer">
                    Get in Touch
                  </span>
                </Link>
                <Link href="/portfolio" passHref>
                  <span className="px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-colors font-medium text-lg cursor-pointer">
                    View Our Work
                  </span>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage