import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const SchedulePickup = () => {
  const router = useIonRouter();

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Schedule a Pickup</h1>
          <p className="text-xl text-blue-100">Free package pickup at your door</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pickup Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Address</label>
              <input type="text" placeholder="Street Address" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Packages</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg py-3 px-4" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-lg py-3 px-4" placeholder="Leave at front door, ring doorbell, etc."></textarea>
            </div>
            <PrimaryButton>Schedule Pickup</PrimaryButton>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Pickup Guidelines</h4>
          <ul className="text-gray-700 space-y-2">
            <li>• Packages must have prepaid postage</li>
            <li>• Schedule by 2 AM CT for next-day pickup</li>
            <li>• Free for Priority Mail and Priority Mail Express</li>
          </ul>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default SchedulePickup;
