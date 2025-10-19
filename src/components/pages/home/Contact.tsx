import { MotionDiv } from "@/components/animations/MotionDiv"
import ContactForm from "@/components/shared/ContactForm"

const Contact = () => {

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50/50" id="contact">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white mx-auto max-w-2xl p-8 rounded-lg shadow-sm border"
        >
          <ContactForm />
        </MotionDiv>
      </div>
    </section>
  )
}

export default Contact
