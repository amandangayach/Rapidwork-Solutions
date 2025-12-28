"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import LogoWhite from '@/assets/RWS Logo Full white.png';
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary-950/90 backdrop-blur-sm">
      {/* Grid Background */}
      <div
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      {/* Decorative Gradients */}
      <div className="absolute -top-24 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-12 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white/80">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <Image
                src={LogoWhite}
                alt="Rapidwork Solutions Logo"
                width={225}
                height={75}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm">
              Transforming ideas into digital reality with innovative solutions
              and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="hover:text-primary-400 transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/#contact" },
                { name: "Blog", href: "/blog" },
                { name: "Projects", href: "/projects" }
              ].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "Content Writing",
                "Digital Marketing",
                "Business Consulting",
                "ERP Solutions",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {[
                {
                  Icon: User,
                  text: "Merchant Legal entity name: AMAN DANGAYACH",
                },
                {
                  Icon: MapPin,
                  text: "Dangayach Bhawan, Naya Katla, Dausa, Rajasthan, PIN: 303303",
                },
                { Icon: Phone, text: "+91 9001111430" },
                { Icon: Mail, text: "rwspay@gmail.com" },
              ].map(({ Icon, text }, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon size={16} className="text-primary-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} Rapidwork Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link
                href="/privacy"
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund"
                className="hover:text-primary-400 transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
