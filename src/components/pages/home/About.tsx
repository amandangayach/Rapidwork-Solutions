import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import { MotionDiv } from "@/components/animations/MotionDiv";

const About = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-100/10 to-background/0" />

      <div className="container mx-auto px-4 max-w-7xl">
        <MotionSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Side */}
          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 mr-12"
            >
              <div className="relative h-[30rem] w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  alt="Modern office with team"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20" />
              </div>
            </MotionDiv>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl" />
          </div>

          {/* Content Side with Title */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Title Section - Now placed here instead of at the top */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                About Rapidwork Solutions
              </h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering cutting-edge AI and machine learning solutions for enterprises 
                with a focus on quality and innovation.
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-foreground/80">
              <p>
                At Rapidwork Solutions, we specialize in delivering cutting-edge AI and 
                machine learning solutions for enterprises. Our expertise in custom software 
                development and digital transformation helps businesses modernize and scale 
                efficiently.
              </p>

              <p className="mb-8">
                With our dedicated team of experts and 24/7 support, we ensure your 
                business receives high-quality service and exceptional results that drive 
                growth and innovation.
              </p>
            </div>
          </MotionDiv>
        </MotionSection>
      </div>
    </section>
  );
};

export default About;
