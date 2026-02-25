import { useState, useEffect } from "react";
import { IonText, useIonRouter, IonSpinner } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { PrimaryButton } from "../../components/buttons";

const PackageIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const mockTrackingAPI = async (trackingNumber: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: true,
    data: {
      number: trackingNumber,
      status: "In Transit",
      estimatedDelivery: "March 28, 2024",
      currentLocation: "Los Angeles, CA 90001",
      weight: "2.5 lbs",
      service: "Priority Mail",
      updates: [
        { date: "Mar 24, 2024 2:15 PM", location: "Los Angeles, CA", status: "Out for Delivery", description: "Your package is out for delivery" },
        { date: "Mar 24, 2024 6:30 AM", location: "Los Angeles, CA", status: "Arrived at Post Office", description: "Arrived at USPS facility" },
        { date: "Mar 23, 2024 10:30 AM", location: "Los Angeles, CA", status: "Arrived at facility", description: "Package arrived at sorting facility" },
        { date: "Mar 22, 2024 3:15 PM", location: "Phoenix, AZ", status: "In transit", description: "Package is in transit to next facility" },
        { date: "Mar 21, 2024 8:00 AM", location: "Dallas, TX", status: "Departed facility", description: "Package departed from facility" },
        { date: "Mar 20, 2024 2:45 PM", location: "Houston, TX", status: "Picked up", description: "Package picked up by USPS" }
      ]
    }
  };
};

const Tracking = () => {
  const router = useIonRouter();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const number = params.get('number');
    if (number) {
      setTrackingNumber(number);
      handleTrack(number);
    }
  }, []);

  const handleTrack = async (number?: string) => {
    const trackNum = number || trackingNumber;
    if (!trackNum.trim()) {
      setError("Please enter a tracking number");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await mockTrackingAPI(trackNum);
      if (response.success) {
        setTrackingData(response.data);
      }
    } catch (err) {
      setError("Failed to fetch tracking information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WhitePageLayout>
      {/* Header */}
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button 
            onClick={() => router.push("/", "back")}
            className="text-white mb-6 flex items-center gap-2 hover:text-blue-200 transition"
          >
            ← Back to Home
          </button>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Track Your Package</h1>
            <p className="text-blue-100">Enter your tracking number to get real-time updates</p>
          </div>
          
          <div className="w-full mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="flex-1 border-0 rounded-lg py-4 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <button
                onClick={() => handleTrack()}
                disabled={loading}
                className="bg-white text-blue-900 p-4 rounded-lg font-semibold hover:bg-blue-50 transition disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? <IonSpinner name="crescent" /> : <SearchIcon />}
                Track
              </button>
            </div>
            {error && <p className="text-red-300 mt-2">{error}</p>}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {loading && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <IonSpinner name="crescent" className="w-12 h-12" />
              <p className="mt-4 text-gray-600">Loading tracking information...</p>
            </div>
          )}

          {!loading && trackingData && (
            <div className="space-y-6">
              {/* Status Card */}
              <div className="bg-white rounded-lg shadow-md p-8">
             
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-gray-900">{trackingData.status}</h2>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Active
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">Tracking Number: <span className="font-semibold text-gray-900">{trackingData.number}</span></p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                        <p className="font-semibold text-gray-900">{trackingData.estimatedDelivery}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Current Location</p>
                        <p className="font-semibold text-gray-900">{trackingData.currentLocation}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Service Type</p>
                        <p className="font-semibold text-gray-900">{trackingData.service}</p>
                      </div>
                    </div>
                  </div>
              
              </div>

              {/* Tracking Timeline */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tracking History</h3>
                
                <div className="space-y-6">
                  {trackingData.updates.map((update: any, index: number) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                          index === 0 ? 'bg-green-500' : 'bg-blue-500'
                        }`}>
                          <CheckIcon />
                        </div>
                        {index < trackingData.updates.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-lg text-gray-900">{update.status}</p>
                            <p className="text-gray-600 mt-1">{update.description}</p>
                            <p className="text-sm text-gray-500 mt-2">{update.location}</p>
                          </div>
                          <p className="text-sm text-gray-500 whitespace-nowrap ml-4">{update.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-gray-700 mb-3">
                  If you have questions about your package or need assistance, please contact USPS customer service.
                </p>
                <button className="text-blue-700 font-semibold hover:underline">
                  Contact Support →
                </button>
              </div>
            </div>
          )}

          {!loading && !trackingData && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-gray-400 mb-4">
                <PackageIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Tracking Information</h3>
              <p className="text-gray-600">Enter a tracking number above to get started</p>
            </div>
          )}
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default Tracking;
