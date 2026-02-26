import { useState, useEffect } from "react";
import { useIonRouter } from "@ionic/react";
import { useParams } from "react-router-dom";
import WhitePageLayout from "../../components/layout/WhitePageLayout";
import { IonSpinner } from "@ionic/react";

const AdminEdit = () => {
  const router = useIonRouter();
  const { trackingNumber } = useParams<{ trackingNumber: string }>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [formData, setFormData] = useState({
    trackingNumber: "",
    status: "In Transit",
    estimatedDelivery: "",
    currentLocation: "",
    weight: "",
    service: "Priority Mail",
    updates: [{ date: "", location: "", status: "", description: "" }]
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/";
    } else {
      setAuthorized(true);
      loadTracking();
    }
  }, [trackingNumber]);

  const loadTracking = () => {
    const data = JSON.parse(localStorage.getItem("trackingData") || "{}");
    if (data[trackingNumber]) {
      setFormData({ trackingNumber, ...data[trackingNumber] });
    }
  };

  const handleAddUpdate = () => {
    setFormData({
      ...formData,
      updates: [{ date: "", location: "", status: "", description: "" }, ...formData.updates]
    });
  };

  const handleUpdateChange = (index: number, field: string, value: string) => {
    const newUpdates = [...formData.updates];
    newUpdates[index] = { ...newUpdates[index], [field]: value };
    setFormData({ ...formData, updates: newUpdates });
  };

  const handleRemoveUpdate = (index: number) => {
    setFormData({
      ...formData,
      updates: formData.updates.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const existingData = JSON.parse(localStorage.getItem("trackingData") || "{}");
      existingData[trackingNumber] = formData;
      localStorage.setItem("trackingData", JSON.stringify(existingData));

      setSuccess("Tracking updated successfully!");
    } catch (err) {
      alert("Failed to update tracking");
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
          <button onClick={() => router.push("/admin", "back")} className="text-white mb-6 hover:text-gray-200">
            ← Back to List
          </button>
          <h1 className="text-4xl font-bold mb-2">Edit Tracking</h1>
          <p className="text-gray-100">{trackingNumber}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status *</label>
              <select
                required
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
              >
                <option>In Transit</option>
                <option>Out for Delivery</option>
                <option>Delivered</option>
                <option>Pending</option>
                <option>Exception</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Delivery *</label>
              <input
                type="text"
                required
                value={formData.estimatedDelivery}
                onChange={(e) => setFormData({ ...formData, estimatedDelivery: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
                placeholder="March 28, 2024"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Location *</label>
              <input
                type="text"
                required
                value={formData.currentLocation}
                onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
                placeholder="Los Angeles, CA 90001"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Weight</label>
              <input
                type="text"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
                placeholder="2.5 lbs"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type *</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
              >
                <option>Priority Mail</option>
                <option>Priority Mail Express</option>
                <option>First-Class Mail</option>
                <option>Ground Advantage</option>
              </select>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Tracking Updates</h3>
              <button
                type="button"
                onClick={handleAddUpdate}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                + Add New Update
              </button>
            </div>

            <div className="space-y-4">
              {formData.updates.map((update, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Update #{index + 1}</span>
                    {formData.updates.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveUpdate(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={update.date}
                      onChange={(e) => handleUpdateChange(index, "date", e.target.value)}
                      placeholder="Mar 24, 2024 2:15 PM"
                      className="border border-gray-300 rounded-lg py-2 px-3"
                    />
                    <input
                      type="text"
                      required
                      value={update.location}
                      onChange={(e) => handleUpdateChange(index, "location", e.target.value)}
                      placeholder="Los Angeles, CA"
                      className="border border-gray-300 rounded-lg py-2 px-3"
                    />
                    <input
                      type="text"
                      required
                      value={update.status}
                      onChange={(e) => handleUpdateChange(index, "status", e.target.value)}
                      placeholder="Out for Delivery"
                      className="border border-gray-300 rounded-lg py-2 px-3"
                    />
                    <input
                      type="text"
                      required
                      value={update.description}
                      onChange={(e) => handleUpdateChange(index, "description", e.target.value)}
                      placeholder="Package is out for delivery"
                      className="border border-gray-300 rounded-lg py-2 px-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <IonSpinner name="crescent" /> : null}
            {loading ? "Updating..." : "Update Tracking"}
          </button>
        </form>
      </div>
    </WhitePageLayout>
  );
};

export default AdminEdit;
