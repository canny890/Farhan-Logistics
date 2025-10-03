import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceCard, TestimonialCard, VehicleCard } from '../../components';
import { SERVICES, FLEET, TESTIMONIALS } from '../../constants';
import GetQuoteForm from '../components/GetQuoteForm';

export const HomePage: React.FC = () => (
  <>
    {/* Hero Section */}
    <section 
      className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] flex items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg">
          Farhan Logistics
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-6 sm:mb-8 drop-shadow-md">
          Delivering Trust Across Borders
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8 px-4 sm:px-6">
          {[
            { title: "Container Handling", desc: "Professional container handling services" },
            { title: "Trailer on Rent", desc: "Reliable trailer rental solutions" },
            { title: "Shipping Line Agent", desc: "Expert shipping line coordination" },
            { title: "General Transport", desc: "All types of transport services" }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-white/20"
            >
              <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
              <p className="text-gray-200 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8 px-4">
          <a 
            href="tel:03002122000" 
            className="bg-accent hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transform transition-all duration-300 hover:scale-105"
          >
            Call Now: +92 343 2426160
          </a>
          <Link 
            to="/quote" 
            className="bg-primary hover:bg-blue-800 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transform transition-all duration-300 hover:scale-105 text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Our Specialized Services</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for heavy and specialized transport needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map(service => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>

    {/* Fleet Showcase */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Fleet</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in logistics and transport services across Pakistan with a commitment to reliability and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FLEET.slice(0, 4).map(vehicle => <VehicleCard key={vehicle.name} vehicle={vehicle} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/fleet" className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105">View Our Entire Fleet</Link>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Trusted by leaders in trade, construction, and industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testimonial => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
        </div>
      </div>
    </section>
  </>
);

export const AboutPage: React.FC = () => (
  <div>
    <PageHeader 
      title="About Farhan Logistics" 
      subtitle="Your Trusted Partner in Logistics and Transportation" 
    />
    
    {/* Company Profile Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Company Profile</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Farhan Logistics is a leading logistics and transportation company based in Pakistan, 
              providing reliable and efficient services since our establishment. We specialize in 
              container handling, trailer rentals, and comprehensive logistics solutions for businesses 
              of all sizes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a trusted name in 
              the industry. We pride ourselves on our professional team, modern fleet, and 
              customer-centric approach to logistics solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary text-xl">50+</h4>
                <p className="text-gray-600">Vehicles</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary text-xl">100%</h4>
                <p className="text-gray-600">Satisfaction</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary text-xl">24/7</h4>
                <p className="text-gray-600">Support</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary text-xl">10+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Farhan Logistics Company"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide reliable, efficient, and cost-effective logistics solutions that exceed our 
              customers' expectations while maintaining the highest standards of safety and 
              environmental responsibility.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading logistics and transportation company in the region, recognized for 
              innovation, reliability, and exceptional customer service, while contributing 
              positively to our community and environment.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CEO's Message */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 p-8 md:p-12 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="CEO of Farhan Logistics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-dark mb-4">Message from Our CEO</h2>
              <p className="text-gray-700 italic text-lg mb-6">
                "At Farhan Logistics, we don't just move goods; we move businesses forward. 
                Our commitment to excellence and customer satisfaction drives everything we do."
              </p>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in the logistics industry, our team is dedicated to 
                providing seamless transportation solutions tailored to your specific needs. We 
                understand the importance of reliability and efficiency in today's fast-paced business 
                environment.
              </p>
              <p className="text-gray-600 mb-6">
                Our success is built on the trust of our clients and the dedication of our team. 
                We continuously invest in technology, training, and our fleet to ensure we deliver 
                the highest standards of service.
              </p>
              <div>
                <p className="font-bold text-dark">Muhammad Farhan Naseem</p>
                <p className="text-primary">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-blue-200">{subtitle}</p>
        </div>
    </div>
);



export const ServicesPage: React.FC = () => (
    <div>
        <PageHeader title="Our Specialized Services" subtitle="Tailored solutions for your heavy transport and logistics needs" />
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {SERVICES.map((service) => (
                    <div key={service.title} className="group flex flex-col md:flex-row items-center gap-8 odd:md:flex-row-reverse">
                        <div className="md:w-1/3 text-center transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[-6deg]">
                            {service.icon}
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-3xl font-bold text-dark mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const FleetPage: React.FC = () => (
    <div>
        <PageHeader title="Our Heavy-Duty Fleet" subtitle="Modern, Diverse, and Ready for Action" />
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FLEET.map(vehicle => <VehicleCard key={vehicle.name} vehicle={vehicle} />)}
                </div>
            </div>
        </div>
    </div>
);

export const ContactPage: React.FC = () => (
  <div>
    <PageHeader title="Contact Us & Get a Quote" subtitle="We're here to help. Reach out to us anytime." />
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Get in Touch</h2>
            <div className="space-y-4 text-lg text-gray-700 bg-white p-8 rounded-lg shadow-md">
              <p><strong>Address:</strong> Office No 15-B, MEZZANINE FLOOR NAGINA CENTER MA JINNAH ROAD KEMARI KARACHI</p>
              <p><strong>Phone:</strong> <a href="tel:+923432426160" className="text-primary hover:underline">+92 343 2426160</a></p>
              <p><strong>Email:</strong> <a href="mailto:Farhan4naseem@gmail.com" className="text-primary hover:underline">Farhan4naseem@gmail.com</a></p>
              <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Quote Form */}
          <div>
            <GetQuoteForm />
          </div>

        </div>
      </div>
    </div>
  </div>
);


export const PrivacyPolicyPage: React.FC = () => (
    <div>
        <PageHeader title="Privacy Policy" subtitle="Your privacy is important to us" />
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6 text-gray-700">
                <h2 className="text-2xl font-bold text-dark">1. Introduction</h2>
                <p>Welcome to Farhan Logistics. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                
                <h2 className="text-2xl font-bold text-dark">2. Information We Collect</h2>
                <p>We may collect personal information that you voluntarily provide to us when you fill out a contact form, request a quote, or subscribe to our newsletter. This may include your name, email address, phone number, and company information.</p>

                <h2 className="text-2xl font-bold text-dark">3. Use of Your Information</h2>
                <p>We may use the information we collect from you to: provide, operate, and maintain our website; improve, personalize, and expand our website; understand and analyze how you use our website; develop new products, services, features, and functionality; communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes; send you emails; and find and prevent fraud.</p>

                <h2 className="text-2xl font-bold text-dark">4. Security of Your Information</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                <h2 className="text-2xl font-bold text-dark">5. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at info@farhanlogistics.pk.</p>
            </div>
        </div>
    </div>
);

export const TermsPage: React.FC = () => (
    <div>
        <PageHeader title="Terms of Service" subtitle="Please read these terms carefully" />
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6 text-gray-700">
                <h2 className="text-2xl font-bold text-dark">1. Agreement to Terms</h2>
                <p>By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time.</p>

                <h2 className="text-2xl font-bold text-dark">2. Use of Our Services</h2>
                <p>You agree to use our services for lawful purposes only. You are prohibited from using our site to engage in any activity that could be deemed illegal or harmful to others.</p>

                <h2 className="text-2xl font-bold text-dark">3. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and images, is the property of Farhan Logistics or its content suppliers and is protected by international copyright laws.</p>

                <h2 className="text-2xl font-bold text-dark">4. Limitation of Liability</h2>
                <p>Farhan Logistics will not be liable for any damages of any kind arising from the use of this site, including, but not to limited to direct, indirect, incidental, punitive, and consequential damages. We do not warrant that this site, its servers, or email sent from us are free of viruses or other harmful components.</p>

                <h2 className="text-2xl font-bold text-dark">5. Governing Law</h2>
                <p>These terms and conditions are governed by and and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </div>
        </div>
    </div>
);

