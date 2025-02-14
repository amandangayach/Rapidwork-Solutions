import { MotionDiv } from "@/components/animations/MotionDiv"
import ContactForm from "@/components/shared/ContactForm"

const Contact = () => {

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </MotionDiv>


          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white mx-auto max-w-2xl p-8 rounded-lg shadow-sm border"
          >
            <ContactForm />
          </MotionDiv>
        </div>
    </section>
  )
}

export default Contact
