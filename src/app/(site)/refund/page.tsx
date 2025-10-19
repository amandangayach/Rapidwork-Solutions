import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '@/components/animations/MotionDiv'
import Link from 'next/link'

const RefundPolicy = () => {
  const refundData = [
    {
      title: "Refund Policy Overview",
      content: "AMAN DANGAYACH believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:"
    }
  ]

  const conditions = [
    "Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.",
    "AMAN DANGAYACH does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.",
    "In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 Days days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 Days days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.",
    "In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the AMAN DANGAYACH, it'll take 3-5 Days days for the refund to be processed to the end customer."
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Refund Policy Background"
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
                Cancellation & Refund Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Please read our refund policy carefully before using our services
              </p>
              <p className="text-lg text-gray-400">
                Last updated on 19-10-2025 16:25:01
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Refund Overview Section */}
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
                  Refund Policy Overview
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our commitment to customer satisfaction and fair refund practices
                </p>
              </div>
            </MotionDiv>

            <div className="space-y-8">
              {refundData.map((section, index) => (
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

      {/* Detailed Refund Policy Section */}
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
                  Detailed Refund Policy
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive terms governing cancellations and refunds
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
                Questions About Our Refund Policy?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-primary-100 mb-10 text-lg">
                If you have any questions or concerns about our refund policy, please don't hesitate to contact us.
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
                  This refund policy is governed by the laws of India and subject to the exclusive jurisdiction 
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

export default RefundPolicy