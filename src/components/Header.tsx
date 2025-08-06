import { Link } from "react-router-dom";

const Header = () => {
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-5">
            <div className="h-17 w-17">
              <img
                src="/image2.png"
                alt="ACAR Trucking Fleet"
                className="h-16 w-16 object-left "
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ACAR TRUCKING LLC</h1>
              <p className="text-sm text-gray-500">MC: 1573799 | DOT: 4116994</p>
            </div>
          </div>
          <nav>
            {isHome ?
              <div className="hidden lg:flex items-center space-x-8">
                <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</a>
                <a href="#why-choose" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Why Choose Us</a>
                <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Our Services</a>
                <a href="#drivers" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">For Drivers</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contacts</a>
              </div>
              :
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Home
              </Link>
            }
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
