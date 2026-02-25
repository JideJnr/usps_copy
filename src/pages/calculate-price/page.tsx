import { useState } from "react";
import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const CalculatePrice = () => {
  const router = useIonRouter();

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Calculate Price</h1>
          <p className="text-xl text-blue-100">Get accurate shipping costs</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Calculator</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">From ZIP Code</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">To ZIP Code</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (lbs)</label>
              <input type="number" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Package Type</label>
              <select className="w-full border border-gray-300 rounded-lg py-3 px-4">
                <option>Letter</option>
                <option>Flat</option>
                <option>Package</option>
                <option>Large Package</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <PrimaryButton>Calculate Shipping Cost</PrimaryButton>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Mail</h3>
            <p className="text-3xl font-bold text-blue-900 mb-2">$8.95</p>
            <p className="text-sm text-gray-700">1-3 Business Days</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">First-Class Mail</h3>
            <p className="text-3xl font-bold text-blue-900 mb-2">$4.50</p>
            <p className="text-sm text-gray-700">2-5 Business Days</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Express</h3>
            <p className="text-3xl font-bold text-blue-900 mb-2">$28.75</p>
            <p className="text-sm text-gray-700">Overnight</p>
          </div>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default CalculatePrice;
