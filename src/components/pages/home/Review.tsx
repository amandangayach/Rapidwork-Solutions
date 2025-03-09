'use client'
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Corp",
    content: "Rapidworks transformed our digital presence completely. Their team delivered beyond our expectations with attention to every detail. The new website has significantly improved our user engagement and conversion rates.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Innovate Solutions",
    content: "Working with Rapidworks was seamless and efficient. Their creative approach to our website redesign brought fresh ideas while maintaining our brand identity. Our customers love the new interface!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "GrowFast Startups",
    content: "The team at Rapidworks doesn't just deliver websites; they deliver results. Their strategic approach to development helped us scale our platform quickly while maintaining exceptional performance and user experience.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "NextGen Systems",
    content: "Rapidworks' technical expertise is unmatched. They tackled complex integration challenges with ease and delivered a robust solution that has streamlined our operations significantly. Highly recommended!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const diff = startX - e.clientX;
    if (diff > 50) {
      goToNext();
      setIsDragging(false);
    } else if (diff < -50) {
      goToPrev();
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden" id="reviews">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We take pride in delivering exceptional services that exceed expectations.
            Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={containerRef}
            className="relative cursor-grab"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <div className="overflow-hidden relative h-[500px] md:h-[400px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute w-full h-full py-12"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : index < activeIndex ? -100 : 100,
                    scale: index === activeIndex ? 1 : 0.9,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 h-full mx-auto max-w-4xl flex flex-col md:flex-row items-center mb-6 mt-2">
                    <motion.div 
                      className="w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-0 md:mr-8 flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-100 dark:border-blue-900 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    
                    <div className="flex flex-col text-center md:text-left">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="mb-4">
                          <svg className="text-primary-500 h-8 w-8 mb-3 mx-auto md:ml-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="text-gray-600 dark:text-gray-300 text-lg italic">
                            {testimonial.content}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-primary-500 dark:text-primary-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-2 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary-500 dark:bg-primary-400 w-8"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
