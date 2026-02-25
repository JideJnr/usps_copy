import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const POBoxes = () => {
  const router = useIonRouter();

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">PO Boxes</h1>
          <p className="text-xl text-blue-100">Secure mail delivery at your convenience</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Box Size</h2>
          <p className="text-xl text-gray-700">Affordable options for every need</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-900 transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Small</h3>
            <p className="text-4xl font-bold text-blue-900 mb-4">$19<span className="text-lg">/month</span></p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• 3" x 5.5" box</li>
              <li>• Perfect for letters</li>
              <li>• 24/7 access</li>
              <li>• Package notification</li>
            </ul>
            <PrimaryButton>Select Plan</PrimaryButton>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-8 transform scale-105 shadow-xl">
            <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
            <h3 className="text-2xl font-bold mb-4">Medium</h3>
            <p className="text-4xl font-bold mb-4">$35<span className="text-lg">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li>• 5.5" x 11" box</li>
              <li>• Small packages</li>
              <li>• 24/7 access</li>
              <li>• Package notification</li>
            </ul>
            <button className="w-full bg-white text-blue-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Select Plan
            </button>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-900 transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Large</h3>
            <p className="text-4xl font-bold text-blue-900 mb-4">$55<span className="text-lg">/month</span></p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• 11" x 22" box</li>
              <li>• Large packages</li>
              <li>• 24/7 access</li>
              <li>• Package notification</li>
            </ul>
            <PrimaryButton>Select Plan</PrimaryButton>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">All Plans Include</h4>
          <p className="text-gray-700">Free mail forwarding, package acceptance, and secure 24/7 access to your mail.</p>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default POBoxes;
