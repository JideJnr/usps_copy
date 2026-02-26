import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://usps-backend-0mpf.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const trackingAPI = {
  track: (trackingNumber: string) => 
    api.post('/tracking', { trackingNumber }),
};

export const shippingAPI = {
  calculate: (data: { fromZip: string; toZip: string; weight: number }) =>
    api.post('/shipping/calculate', data),
};

export const informedDeliveryAPI = {
  signup: (data: { name: string; email: string; address: string }) =>
    api.post('/informed-delivery/signup', data),
};

export const priceAPI = {
  calculate: (data: { fromZip: string; toZip: string; weight: number; packageType: string }) =>
    api.post('/price/calculate', data),
};

export const pickupAPI = {
  schedule: (data: { address: string; date: string; packageCount: number; instructions: string }) =>
    api.post('/pickup/schedule', data),
};

export const locationAPI = {
  find: (zipCode: string) =>
    api.get(`/locations?zipCode=${zipCode}`),
};

export const productsAPI = {
  getAll: () => api.get('/products'),
  addToCart: (data: { productId: string; quantity: number }) =>
    api.post('/cart/add', data),
};

export const poBoxAPI = {
  subscribe: (data: { size: string; duration: string; customerInfo: object }) =>
    api.post('/po-box/subscribe', data),
};

export const contactAPI = {
  send: (data: { name: string; email: string; subject: string; message: string }) =>
    api.post('/contact', data),
};

export const newsletterAPI = {
  subscribe: (data: { name: string; email: string }) =>
    api.post('/newsletter/subscribe', data),
};

export default api;
