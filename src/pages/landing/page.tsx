import {  useIonRouter } from "@ionic/react";
import { useState } from "react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PrinterIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" strokeWidth="2" strokeLinecap="round"/>
    <rect x="6" y="14" width="12" height="8" strokeWidth="2"/>
  </svg>
);

const StampIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth="2"/>
  </svg>
);

const TruckIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5.5" cy="18.5" r="2.5" strokeWidth="2"/>
    <circle cx="18.5" cy="18.5" r="2.5" strokeWidth="2"/>
  </svg>
);

const Landing = () => {
  const router = useIonRouter();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      router.push(`/tracking?number=${trackingNumber}`, "forward");
    }
  };

  return (
    <WhitePageLayout>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Welcome to USPS Premium</h1>
            <p className="text-xl text-blue-100">Your trusted partner for secure shipping and financial services</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Track Your Package</h2>
            <div className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter Tracking Number(s)"
                className="w-full border-0 rounded-lg py-4 pl-4 pr-12 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <button 
                onClick={handleTrack}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <div className="w-full bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={() => router.push("/click-n-ship", "forward")} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition cursor-pointer">
              <div className="text-blue-900 mb-4">
                <PrinterIcon />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Click-N-Ship®
              </h3>
              <p className="text-gray-700">
                Pay for and print shipping labels from home.
              </p>
            </div>

            <div onClick={() => router.push("/stamps", "forward")} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition cursor-pointer">
              <div className="text-blue-900 mb-4">
                <StampIcon />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Stamps & Supplies
              </h3>
              <p className="text-gray-700 mb-2">
                Forever® Stamps: $0.78
              </p>
              <p className="text-gray-700">
                Postcard Stamps: $0.61
              </p>
            </div>

            <div onClick={() => router.push("/informed-delivery", "forward")} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition cursor-pointer">
              <div className="text-blue-900 mb-4">
                <TruckIcon />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Informed Delivery®
              </h3>
              <p className="text-gray-700">
                Digitally preview your incoming mail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Service */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-900 text-white px-8 py-6 mb-6 transform -skew-x-6">
                <h3 className="text-3xl font-bold skew-x-6">
                  Ship from Home in 3 Easy Steps
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Use our online Click-N-Ship® service to pay for postage, print your own shipping labels, and schedule a free package pickup.
              </p>
              <button onClick={() => router.push("/click-n-ship", "forward")} className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition">
                Use Click-N-Ship
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
                alt="Shipping from home"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USPS Updates */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center bg-blue-100 border-l-4 border-blue-900 px-8 py-6 mb-12">
            <div className="flex-1">
              <p className="text-gray-900 leading-relaxed">
                <span className="font-semibold">Postmarks:</span> If you want to ensure that your mail receives a postmark on the day you mail it, ask a retail associate at a Post Office retail counter to hand-cancel it for free.{" "}
                <a href="#" className="text-blue-700 underline hover:no-underline">Learn more</a>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg px-6 md:px-10 py-6 md:py-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">
                Delivering Since 1775 <span className="font-normal text-base md:text-lg">— Celebrate 250 years of USPS!</span>
              </h3>
            </div>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap">
              Explore Now
            </button>
          </div>

          <h2 className="text-4xl font-semibold text-center text-blue-900 mb-12">
            USPS Updates
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-900">
                Alert: Text & Email Scams
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you get a text or email claiming to be from USPS about a package awaiting action or a delivery failure, don't click it: Delete it immediately. This is an attempt to steal your personal information.
              </p>
              <div className="space-y-2">
                <a href="#" className="block text-blue-700 underline hover:no-underline">Text Scams</a>
                <a href="#" className="block text-blue-700 underline hover:no-underline">Email Scams</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-900">
                Jobs with USPS
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Find nationwide opportunities to build your career while serving the American public.
              </p>
              <a href="#" className="text-blue-700 underline hover:no-underline">Find Out More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-md mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
          <p className="text-gray-600">Subscribe to receive the latest updates and exclusive offers</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">USPS Premium</h3>
              <p className="text-sm">Your trusted partner for secure shipping and financial services since 1775.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => router.push("/tracking", "forward")} className="hover:text-white">Track Package</button></li>
                <li><button onClick={() => router.push("/locations", "forward")} className="hover:text-white">Find Locations</button></li>
                <li><button onClick={() => router.push("/calculate-price", "forward")} className="hover:text-white">Calculate Price</button></li>
                <li><button onClick={() => router.push("/schedule-pickup", "forward")} className="hover:text-white">Schedule Pickup</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => router.push("/click-n-ship", "forward")} className="hover:text-white">Click-N-Ship</button></li>
                <li><button onClick={() => router.push("/informed-delivery", "forward")} className="hover:text-white">Informed Delivery</button></li>
                <li><button onClick={() => router.push("/po-boxes", "forward")} className="hover:text-white">PO Boxes</button></li>
                <li><button onClick={() => router.push("/stamps", "forward")} className="hover:text-white">Stamps & Supplies</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => router.push("/help", "forward")} className="hover:text-white">Help Center</button></li>
                <li><button onClick={() => router.push("/contact", "forward")} className="hover:text-white">Contact Us</button></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Report Scam</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 USPS Premium. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </WhitePageLayout>
  );
};

export default Landing;
