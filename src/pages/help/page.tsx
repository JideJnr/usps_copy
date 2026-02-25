import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";

const Help = () => {
  const router = useIonRouter();

  const faqs = [
    { q: "How do I track my package?", a: "Enter your tracking number on our tracking page to see real-time updates." },
    { q: "What are your shipping rates?", a: "Rates vary by weight, size, and destination. Use our price calculator for accurate quotes." },
    { q: "How long does delivery take?", a: "Delivery times range from overnight to 2-8 business days depending on service selected." },
    { q: "Can I schedule a pickup?", a: "Yes! Schedule free package pickup for Priority Mail and Priority Mail Express." },
    { q: "What is Informed Delivery?", a: "A free service that provides daily email previews of your incoming mail." },
    { q: "How do I file a claim?", a: "Visit your local Post Office or file online through our claims portal." }
  ];

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-blue-100">Find answers to common questions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-700 mb-4">1-800-ASK-USPS</p>
            <p className="text-sm text-gray-600">Mon-Fri: 8AM-8PM ET</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-700 mb-4">Chat with an agent</p>
            <button className="text-blue-900 font-semibold hover:underline">Start Chat</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-700 mb-4">Get help via email</p>
            <button className="text-blue-900 font-semibold hover:underline">Send Email</button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded text-center">
          <h4 className="font-semibold text-gray-900 mb-2">Still Need Help?</h4>
          <p className="text-gray-700 mb-4">Our support team is here to assist you.</p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition">
            Contact Support
          </button>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default Help;
