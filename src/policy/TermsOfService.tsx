import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-white font-sans">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-l-4 border-t-2 border-gray-800 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-500 mb-10">
              Terms of Service
            </h1>

            <section className="space-y-6 text-black leading-relaxed">
              <p className="text-lg text-black">
                These Terms of Service ("Terms") govern your use of the website and services provided by ACAR TRUCKING LLC. By accessing our site or using our services, you agree to these Terms.
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">1. Use of Services</h2>
                <p>
                  You agree to use our website and services only for lawful purposes and in accordance with all applicable laws and regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">2. User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li>Do not misuse our services.</li>
                  <li>Do not attempt to gain unauthorized access to any part of our systems.</li>
                  <li>You are responsible for any content you provide.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">3. Intellectual Property</h2>
                <p>
                  All content, trademarks, and data on this site are the property of ACAR TRUCKING LLC and protected by applicable intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">4. Termination</h2>
                <p>
                  We may suspend or terminate your access to our services at any time for violations of these Terms or for any other reason at our sole discretion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">5. Limitation of Liability</h2>
                <p>
                  ACAR TRUCKING LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">6. Modifications</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a new effective date. Your continued use of our services constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">7. Contact Us</h2>
                <p>If you have any questions about these Terms, please reach out to us:</p>

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

export default TermsOfService;