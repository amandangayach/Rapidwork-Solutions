import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '@/components/animations/MotionDiv'
import Link from 'next/link'

const TermsAndConditions = () => {
  const termsData = [
    {
      title: "Terms Overview",
      content: "These Terms and Conditions, along with privacy policy or other terms (\"Terms\") constitute a binding agreement by and between AMAN DANGAYACH, (\"Website Owner\" or \"we\" or \"us\" or \"our\") and you (\"you\" or \"your\") and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, \"Services\")."
    },
    {
      title: "Agreement Acceptance",
      content: "By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates."
    },
    {
      title: "Service Terms",
      content: "The use of this website or availing of our Services is subject to the following terms of use:"
    }
  ]

  const conditions = [
    "To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.",
    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
    "Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.",
    "The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.",
    "You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.",
    "You agree to pay us the charges associated with availing the Services.",
    "You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.",
    "You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.",
    "You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.",
    "You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.",
    "Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.",
    "These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.",
    "All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Dausa, Rajasthan.",
    "All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website."
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Terms and Conditions Background"
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
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Please read these terms carefully before using our services
              </p>
              <p className="text-lg text-gray-400">
                Last updated on 19-10-2025
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Terms Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Terms Overview
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  These terms establish the foundation of our relationship and outline important policies
                </p>
              </div>
            </MotionDiv>

            <div className="space-y-8">
              {termsData.map((section, index) => (
                <MotionDiv
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      {section.title}
                    </h3>
                    <div className="w-16 h-1 bg-primary-500 mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Detailed Terms & Conditions
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive terms governing your use of our services
                </p>
              </div>
            </MotionDiv>

            <div className="space-y-6">
              {conditions.map((condition, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {condition}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Terms?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-primary-100 mb-10 text-lg">
                If you have any questions or concerns about these terms and conditions, please don't hesitate to contact us.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" passHref>
                  <span className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg cursor-pointer">
                    Contact Us
                  </span>
                </Link>
                <Link href="/" passHref>
                  <span className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors font-medium text-lg cursor-pointer">
                    Back to Home
                  </span>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-primary-800 mb-4">Important Legal Notice</h3>
                <p className="text-sm leading-relaxed">
                  These terms and conditions are governed by the laws of India and subject to the exclusive jurisdiction 
                  of courts in Dausa, Rajasthan. For any legal concerns or disputes, please contact us through the 
                  official channels provided on our website.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs">
                    © 2025 Rapidwork Solutions. All rights reserved. AMAN DANGAYACH - Website Owner
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsAndConditions
