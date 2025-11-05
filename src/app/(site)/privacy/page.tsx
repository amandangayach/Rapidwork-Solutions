import React from 'react'
import Image from 'next/image'
import { MotionDiv } from '@/components/animations/MotionDiv'
import Link from 'next/link'

const PrivacyPolicy = () => {
  const privacyData = [
    {
      title: "Privacy Policy Overview",
      content: "At AMAN DANGAYACH, your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and how we keep it safe."
    }
  ]

  const sections = [
    {
      title: "Information We Collect",
      content: "We may collect the following information when you use our website or contact us: Name, Email address, Phone number, Messages or inquiries you send us, Any other information you choose to share. We may also collect some basic technical information automatically, like your IP address and browser type, to help improve our website."
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to: Respond to your messages or questions, Provide services or updates you requested, Improve our website and user experience, Send important notifications or updates (if you've opted in). We do not sell, rent, or share your personal information with anyone for marketing purposes."
    },
    {
      title: "How We Protect Your Information",
      content: "We take reasonable steps to protect your personal data from loss, misuse, or unauthorized access. However, please note that no method of internet transmission or storage is 100% secure."
    },
    {
      title: "Cookies",
      content: "Our website may use cookies to improve your experience. You can choose to disable cookies in your browser settings if you prefer."
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party tools (like analytics or email services) that collect limited information to help us improve our services. These tools follow their own privacy policies."
    },
    {
      title: "Your Rights",
      content: "You have the right to: Access the personal data we hold about you, Request correction or deletion of your data, Withdraw your consent for us to use your information. To make such requests, you can contact us at rwspay@gmail.com."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Privacy Policy Background"
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Please read our privacy policy carefully to understand how we protect your data
              </p>
              <p className="text-lg text-gray-400">
                Last Updated: 5 November 2025
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Privacy Overview Section */}
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
                  Privacy Policy Overview
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our commitment to protecting your personal information and privacy
                </p>
              </div>
            </MotionDiv>

            <div className="space-y-8">
              {privacyData.map((section, index) => (
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

      {/* Detailed Privacy Policy Section */}
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
                  Detailed Privacy Policy
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive information about how we handle your data
                </p>
              </div>
            </MotionDiv>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <MotionDiv
                  key={section.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {index + 1}. {section.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary-500 mb-4"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {section.content}
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
                Questions About Our Privacy Policy?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-primary-100 mb-10 text-lg">
                If you have any questions about this Privacy Policy or how your data is handled, please don't hesitate to contact us.
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
                  This privacy policy is governed by the laws of India and subject to the exclusive jurisdiction
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

export default PrivacyPolicy