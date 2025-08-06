import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, Globe, TrendingUp, CheckCircle, Truck, Phone, Mail, MapPin } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { CopyableField } from './Copyable';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fromLeft}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Professional Transportation Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                ACAR TRUCKING LLC delivers reliable, safe, and efficient logistics services nationwide.
                Join our team of professional drivers or trust us with your cargo transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:3472638848" className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors text-center text-lg">
                  Apply Now
                </a>
                <a href="#contact" className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition-colors text-center text-lg">
                  Get Quote
                </a>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fromRight}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional trucking services"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={item}>
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">On-Time Delivery</div>
            </motion.div>
            <motion.div variants={item}>
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </motion.div>
            <motion.div variants={item}>
              <div className="text-4xl font-bold text-blue-900 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Successful Deliveries</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">About ACAR TRUCKING LLC</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a DOT-certified transportation company committed to providing exceptional logistics solutions.
              Our experienced team and modern fleet ensure your cargo reaches its destination safely and on time.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-900" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h4>
              <p className="text-gray-600">
                Fully certified with DOT #4116994 and comprehensive insurance coverage for complete peace of mind.
              </p>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Professional Team</h4>
              <p className="text-gray-600">
                Our experienced drivers and dispatch team work around the clock to ensure exceptional service.
              </p>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Nationwide Coverage</h4>
              <p className="text-gray-600">
                We provide reliable transportation services across all 48 states with real-time tracking.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of experience with modern technology to deliver superior transportation services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fromLeft}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <motion.div variants={item} className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-lg mr-6 flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">DOT Certified Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Licensed carrier with MC: 1573799 and DOT: 4116994. Full compliance with federal regulations and comprehensive insurance coverage.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-lg mr-6 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Reliable On-Time Delivery</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We maintain a 100% on-time delivery record through careful planning, real-time tracking, and professional dispatch services.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-lg mr-6 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Competitive Rates</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Fair pricing with transparent billing. No hidden fees, just honest rates for professional transportation services.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fromRight}
              viewport={{ once: true }}
            >
              <img
                src="/pexels-minhle17vn-977213.jpg"
                alt="Professional trucking operations"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive transportation solutions tailored to meet your specific logistics requirements.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-blue-900" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Long Haul Transportation</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reliable cross-country shipping with GPS tracking and regular updates throughout the journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  48-state coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Real-time tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Competitive pricing
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Expedited Delivery</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Priority handling for time-sensitive shipments with dedicated routes and express service.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Rush delivery options
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Dedicated dispatch
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  24/7 monitoring
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Secure Transportation</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-value cargo transport with enhanced security protocols and comprehensive insurance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Full insurance coverage
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Secure loading protocols
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Vetted drivers
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section id="drivers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">For Drivers</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of professional drivers and enjoy competitive compensation, flexible schedules, and excellent benefits.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fromLeft}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Drive with ACAR TRUCKING?</h4>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={item} className="flex items-center">
                  <div className="bg-blue-900 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">Competitive pay rates and bonuses</span>
                </motion.div>
                <motion.div variants={item} className="flex items-center">
                  <div className="bg-red-600 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">Flexible scheduling options</span>
                </motion.div>
                <motion.div variants={item} className="flex items-center">
                  <div className="bg-green-600 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">Modern, well-maintained fleet</span>
                </motion.div>
                <motion.div variants={item} className="flex items-center">
                  <div className="bg-blue-900 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">Comprehensive benefits package</span>
                </motion.div>
                <motion.div variants={item} className="flex items-center">
                  <div className="bg-red-600 w-3 h-3 rounded-full mr-4"></div>
                  <span className="text-gray-700 text-lg">Professional development opportunities</span>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a href="tel:3472638848" className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-colors text-lg">
                  Apply Today
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fromRight}
              viewport={{ once: true }}
            >
              <img
                src="/image.png"
                alt="Professional truck driver"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Contacts</h3>
            <p className="text-xl text-gray-600">
              Ready to get started? Contact us today for a free quote or to join our team.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-900" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Call Us</h4>
              <p className="text-gray-600 mb-4">Speak with our dispatch team</p>
              <a href="tel:3472638848" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                (347) 263-8848
              </a>
            </motion.div>

            <motion.div variants={item} className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Email Us</h4>
              <p className="text-gray-600 mb-4">Send us your requirements</p>
              <a href="mailto:dispatch@acartrucking.com" className="text-lg font-bold text-red-600 hover:text-red-500 transition-colors break-all">
                dispatch@acartrucking.com
              </a>
            </motion.div>

            <motion.div variants={item} className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h4>
              <p className="text-gray-600 mb-4">Our office location</p>
              <address className="text-lg font-bold text-green-600 not-italic">
                2750 Homecrest Ave<br />
                Apt 128<br />
                Brooklyn, NY 11235-4652
              </address>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gray-100 px-8 py-4 inline-block rounded-lg">
              <p className="flex text-gray-700 justify-center font-medium gap-5">
                <CopyableField label="EIN:" value="33-2170191" />
                <span>|</span>
                <CopyableField label="MC:" value="1573799" />
                <span>|</span>
                <CopyableField label="DOT:" value="4116994" />
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Index;