import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          <div className="">
            <div className="flex items-center mb-6 gap-5">
              <div className="h-12">
                <img
                  src="/image2.png"
                  alt="ACAR Trucking Fleet"
                  className="h-12 w-12 object-left "
                />
              </div>
              <h5 className="text-2xl font-bold">ACAR TRUCKING LLC</h5>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional transportation services with a commitment to safety, reliability, and customer satisfaction. We pride ourselves on delivering efficient and dependable logistics solutions tailored to meet the unique needs of each client. Whether you're moving freight across the city or across the country, we ensure your cargo is handled with care and delivered on time.
            </p>
            {/* <div className="text-sm text-gray-400">
              <p className="mb-1">MC: 1573799 | DOT: 4116994 | EIN: 33-2170191</p>
            </div> */}
          </div>

          {/* <div>
            <h6 className="text-lg font-bold mb-6">Quick Links</h6>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-choose" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#drivers" className="hover:text-white transition-colors">For Drivers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacts</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h6 className="text-lg font-bold mb-6">Contact Info</h6>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="tel:3472638848" className="hover:text-white transition-colors">(347) 263-8848</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="mailto:dispatch@acartrucking.com" className="hover:text-white transition-colors">dispatch@acartrucking.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  2750 Homecrest Ave, Apt 128<br />
                  Brooklyn, NY 11235-4652
                </address>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 text-center text-gray-400">
          <div className="flex justify-center gap-20 pt-3">
            {/* <div className='space-x-7'> */}
            <Link to="/privacy-policy" className="text-blue-sky hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-service" className="text-blue-sky hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-blue-sky hover:text-white transition-colors">
              Cookie Policy
            </Link>
            {/* </div> */}
            {/* <div>
              <p>&copy; 2025 ACAR TRUCKING LLC. All rights reserved.</p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
