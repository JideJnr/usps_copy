import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const InformedDelivery = () => {
  const router = useIonRouter();

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Informed Delivery®</h1>
          <p className="text-xl text-blue-100">Preview your mail before it arrives</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Know What's Coming</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get daily email notifications with images of your incoming mail and expected packages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Daily Emails</h3>
            <p className="text-gray-700">Receive notifications every morning with images of your mail</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Package Tracking</h3>
            <p className="text-gray-700">Track all your packages in one convenient dashboard</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔔</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Alerts</h3>
            <p className="text-gray-700">Get notified when packages are out for delivery</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Sign Up for Free</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            <input type="text" placeholder="Street Address" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            <PrimaryButton>Sign Up Now</PrimaryButton>
          </div>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default InformedDelivery;
