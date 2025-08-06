import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-white font-sans">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-l-4 border-t-2 border-gray-800 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-500 mb-10">
              Privacy Policy
            </h1>

            <section className="space-y-6 text-black leading-relaxed">
              <p className="text-lg">
                At ACAR TRUCKING LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including integrations with third-party communication platforms such as RingCentral.
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">1. Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li>Personal Identifiable Information (PII): your name, email address, phone number, and company name.</li>
                  <li>Communication Data: data related to communication tools usage like RingCentral, such as call logs, messages (metadata), and user preferences.</li>
                  <li>Technical Data: IP address, browser type, device info, OS, and activity logs.</li>
                  <li>Usage Data: information on how you use our website or services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li>Providing logistics services to you</li>
                  <li>Facilitating communication using RingCentral</li>
                  <li>Improving our website and customer experience</li>
                  <li>Providing customer support</li>
                  <li>Monitoring and analyzing usage trends</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">3. RingCentral Integration</h2>
                <p>
                  Our service uses RingCentral’s APIs to facilitate communication. When you connect your RingCentral account, we may access and use data such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900 mt-2">
                  <li>Your RingCentral account information</li>
                  <li>Call and message metadata (not message content)</li>
                  <li>Contact and directory information</li>
                </ul>
                <p className="mt-2">
                  This data is not shared with third parties except as required to operate the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">4. Sharing of Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li>With service providers under confidentiality agreements</li>
                  <li>To comply with legal obligations or government requests</li>
                  <li>In connection with a merger, acquisition, or asset sale</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">5. Data Retention</h2>
                <p>
                  We retain personal data only as long as necessary to provide services and fulfill the purposes outlined in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">6. Your Data Protection Rights</h2>
                <ul className="list-disc pl-6 space-y-2 marker:text-gray-900">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Object to or restrict certain data processing</li>
                  <li>Withdraw consent for data usage (where applicable)</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, contact us at <strong>dispatch@acartrucking.com</strong>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">7. Security of Your Information</h2>
                <p>
                  We implement industry-standard technical and organizational measures to protect your information, including encryption, secure data storage, and access controls.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of such sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">9. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">10. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, contact us at:</p>

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

export default PrivacyPolicy;
