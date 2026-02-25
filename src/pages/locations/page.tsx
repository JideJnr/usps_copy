import { useState } from "react";
import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const Locations = () => {
  const router = useIonRouter();
  const [zipCode, setZipCode] = useState("");

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Find Locations</h1>
          <p className="text-xl text-blue-100">Locate Post Offices near you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Search by ZIP Code</h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter ZIP Code"
                className="flex-1 border border-gray-300 rounded-lg py-3 px-4"
              />
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">USPS Post Office #{i}</h3>
              <p className="text-gray-700 mb-2">123 Main Street</p>
              <p className="text-gray-700 mb-2">Los Angeles, CA 90001</p>
              <p className="text-gray-700 mb-4">Distance: {i * 0.5} miles</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition">
                  Get Directions
                </button>
                <button className="flex-1 border-2 border-blue-900 text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-lg font-semibold transition">
                  View Hours
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default Locations;
