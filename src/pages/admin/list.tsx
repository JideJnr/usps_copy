import { useState, useEffect } from "react";
import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { IonSpinner } from "@ionic/react";

const AdminList = () => {
  const router = useIonRouter();
  const [authorized, setAuthorized] = useState(false);
  const [trackingList, setTrackingList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/";
    } else {
      setAuthorized(true);
      loadTrackingList();
    }
  }, []);

  const loadTrackingList = async () => {
    try {
      // TODO: Replace with API call
      const data = JSON.parse(localStorage.getItem("trackingData") || "{}");
      const list = Object.keys(data).map(key => ({
        trackingNumber: key,
        ...data[key]
      }));
      setTrackingList(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!authorized) {
    return null;
  }

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-gray-200">
            ← Back to Home
          </button>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin - Tracking Management</h1>
              <p className="text-gray-100">Manage all package tracking</p>
            </div>
            <button
              onClick={() => router.push("/admin/create", "forward")}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              + Create New
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="text-center py-12">
            <IonSpinner name="crescent" className="w-12 h-12" />
          </div>
        ) : trackingList.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 mb-4">No tracking numbers found</p>
            <button
              onClick={() => router.push("/admin/create", "forward")}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
            >
              Create First Tracking
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackingList.map((item) => (
              <div
                key={item.trackingNumber}
                onClick={() => router.push(`/admin/edit/${item.trackingNumber}`, "forward")}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.status === "Delivered" ? "bg-green-100 text-green-800" :
                    item.status === "Out for Delivery" ? "bg-blue-100 text-blue-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.trackingNumber}</h3>
                <p className="text-sm text-gray-600 mb-1">Location: {item.currentLocation}</p>
                <p className="text-sm text-gray-600">Delivery: {item.estimatedDelivery}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </WhitePageLayout>
  );
};

export default AdminList;
