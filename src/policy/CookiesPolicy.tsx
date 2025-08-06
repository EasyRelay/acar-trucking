import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-white font-sans">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-l-4 border-t-2 border-gray-800 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-500 mb-10">
              Cookie Policy
            </h1>

            <section className="space-y-6 text-black leading-relaxed">
              <p className="text-lg text-black">
                This Cookie Policy explains how ACAR TRUCKING LLC (“we,” “our,” or “us”) uses cookies and similar technologies when you visit our website or use our services, including tools integrated with third-party platforms such as RingCentral.
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They help improve your experience by remembering your preferences, enabling functionality, and providing analytical insights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">2. Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li><strong>Essential Cookies:</strong> Necessary for core functionality like authentication and security.</li>
                  <li><strong>Functional Cookies:</strong> Save your preferences such as region or language.</li>
                  <li><strong>Analytics Cookies:</strong> Track anonymous usage data for optimization.</li>
                  <li><strong>RingCentral Integration:</strong> Used by RingCentral for communication features.</li>
                  <li><strong>Third-Party Cookies:</strong> Set by services like Google Maps or reCAPTCHA.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">3. Why We Use Cookies</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li>Ensure the website works properly</li>
                  <li>Customize the user experience</li>
                  <li>Track and improve performance</li>
                  <li>Support integrations like RingCentral</li>
                  <li>Enhance security and detect fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">4. How to Manage Cookies</h2>
                <p>
                  Most browsers allow you to view, delete, or block cookies. Use these features to control your cookie settings:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900 mt-2">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Safari</li>
                  <li>Edge</li>
                </ul>
                <p className="mt-2">
                  Disabling essential cookies might limit your access to key features.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">5. Updates to This Policy</h2>
                <p>
                  We may revise this Cookie Policy from time to time. Updates will be posted here with the latest date. Continued use implies consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">6. Contact Us</h2>
                <p>If you have questions about this Cookie Policy, please reach out:</p>

                <div className="bg-gray-800 mt-4 rounded-xl p-5 border border-gray-700">
                  <p className="font-bold text-white mb-1">ACAR TRUCKING LLC</p>
                  <p className="text-gray-300">2750 Homecrest Ave Apt 128</p>
                  <p className="text-gray-300">Brooklyn, NY 11235-4652</p>
                  <p className="text-gray-300">Phone: 3472638848</p>
                  <p className="text-gray-300">Email: dispatch@acartrucking.com</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mt-12 italic">
                Last Updated: 06.08.2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;