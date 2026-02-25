import { useIonRouter } from "@ionic/react";
import WhitePageLayout from "../../components/layout/WhitePageLayout";

const Stamps = () => {
  const router = useIonRouter();

  const products = [
    { name: "Forever® Stamps (Book of 20)", price: "$15.60", image: "📮" },
    { name: "Postcard Stamps (Book of 20)", price: "$12.20", image: "📬" },
    { name: "Priority Mail Flat Rate Envelope", price: "$10.40", image: "✉️" },
    { name: "Priority Mail Medium Box", price: "$17.50", image: "📦" },
    { name: "Certified Mail", price: "$4.30", image: "📋" },
    { name: "Registered Mail", price: "$15.95", image: "🔒" }
  ];

  return (
    <WhitePageLayout>
      <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => router.push("/", "back")} className="text-white mb-6 hover:text-blue-200">
            ← Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Stamps & Supplies</h1>
          <p className="text-xl text-blue-100">Everything you need for mailing</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Products</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-5xl mb-4 text-center">{product.image}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-900 mb-4">{product.price}</p>
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
          <p className="text-gray-700">Orders over $50 ship free to your door.</p>
        </div>
      </div>
    </WhitePageLayout>
  );
};

export default Stamps;
