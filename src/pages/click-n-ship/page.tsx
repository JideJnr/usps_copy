import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const ClickNShip = () => {
  const router = useIonRouter();

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Click-N-Ship®</h1>
          <p className="text-xl text-blue-100">Print shipping labels from home</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ship Smarter, Not Harder</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Skip the trip to the Post Office. With Click-N-Ship, you can create shipping labels, pay for postage, and schedule free package pickup—all from your computer.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Print shipping labels instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Schedule free package pickup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Track packages in real-time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Save up to 16% on shipping</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Started</h3>
            <div className="space-y-4">
              <input type="text" placeholder="From ZIP Code" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
              <input type="text" placeholder="To ZIP Code" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
              <input type="text" placeholder="Weight (lbs)" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
              <PrimaryButton>Calculate Shipping</PrimaryButton>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
          <p className="text-gray-700">Contact our support team for assistance with Click-N-Ship.</p>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default ClickNShip;
