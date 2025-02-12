import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { aboutData } from "@/lib/constants";

const About = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-100/10 to-background/0" />
      
      <div className="container mx-auto px-4">
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
              className="relative z-10"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team collaboration"
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

          {/* Content Side */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                About Rapidwork Solutions
              </span>
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {aboutData.map((stat, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-foreground/5 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-foreground/90 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-foreground/60 mt-1">
                      {stat.detail}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>
        </MotionSection>
      </div>
    </section>
  );
};

export default About;
