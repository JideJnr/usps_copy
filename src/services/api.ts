import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1';

export const adminAPI = {
  // Get all tracking numbers
  getAllTracking: async () => {
    const response = await axios.get(`${API_BASE_URL}/admin/tracking`);
    return response.data;
  },

  // Get single tracking by number
  getTracking: async (trackingNumber: string) => {
    const response = await axios.get(`${API_BASE_URL}/admin/tracking/${trackingNumber}`);
    return response.data;
  },

  // Create new tracking
  createTracking: async (data: any) => {
    const response = await axios.post(`${API_BASE_URL}/admin/tracking`, data);
    return response.data;
  },

  // Update tracking
  updateTracking: async (trackingNumber: string, data: any) => {
    const response = await axios.put(`${API_BASE_URL}/admin/tracking/${trackingNumber}`, data);
    return response.data;
  },

  // Delete tracking
  deleteTracking: async (trackingNumber: string) => {
    const response = await axios.delete(`${API_BASE_URL}/admin/tracking/${trackingNumber}`);
    return response.data;
  }
};

export const trackingAPI = {
  // Public tracking search
  searchTracking: async (trackingNumber: string) => {
    const response = await axios.get(`${API_BASE_URL}/tracking/${trackingNumber}`);
    return response.data;
  }
};

export const newsletterAPI = {
  subscribe: async (name: string, email: string) => {
    const response = await axios.post(`${API_BASE_URL}/newsletter/subscribe`, { name, email });
    return response.data;
  }
};

export const contactAPI = {
  sendMessage: async (data: any) => {
    const response = await axios.post(`${API_BASE_URL}/contact`, data);
    return response.data;
  }
};
