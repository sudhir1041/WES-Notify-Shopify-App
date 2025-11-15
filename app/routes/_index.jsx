import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { useState } from "react";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");
  
  return json({
    shop,
    installUrl: shop 
      ? `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=${process.env.SCOPES}&redirect_uri=${process.env.SHOPIFY_APP_URL}/auth/callback&state=nonce`
      : null,
    appUrl: process.env.SHOPIFY_APP_URL
  });
};

export default function Index() {
  const { shop, installUrl, appUrl } = useLoaderData();
  const [shopDomain, setShopDomain] = useState("");

  if (shop && installUrl) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Ready to Install</h1>
            <p className="text-gray-600">Install WhatsApp Analytics for your store: <strong>{shop}</strong></p>
          </div>
          
          <a 
            href={installUrl}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 inline-block"
          >
            Install WhatsApp Analytics
          </a>
        </div>
      </div>
    );
  }

  const handleInstall = () => {
    if (shopDomain) {
      const cleanDomain = shopDomain.replace('.myshopify.com', '').replace('https://', '').replace('http://', '');
      window.location.href = `${appUrl}?shop=${cleanDomain}.myshopify.com`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">📱</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">WhatsApp Analytics</h1>
            </div>
            <a href="/support" className="text-green-600 hover:text-green-700 font-medium">
              Support
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Recover Abandoned Carts with WhatsApp
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Boost your Shopify store's revenue with automated WhatsApp messaging, cart abandonment recovery, and detailed analytics. Increase conversions by up to 30%.
          </p>
          
          {/* Installation Form */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Install on Your Store</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="my-shop-domain.myshopify.com"
                value={shopDomain}
                onChange={(e) => setShopDomain(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleInstall}
                disabled={!shopDomain}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Install App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Your Store</h2>
            <p className="text-lg text-gray-600">Everything you need to engage customers and recover lost sales</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cart Abandonment Recovery</h3>
              <p className="text-gray-600">Automatically detect abandoned carts and send personalized WhatsApp messages to recover lost sales with customizable timing and templates.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600">Track message delivery rates, conversion metrics, and campaign performance with detailed analytics and insights to optimize your strategy.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Setup & Automation</h3>
              <p className="text-gray-600">Quick 5-minute setup with pre-built templates and workflows. No coding required - just connect your WhatsApp Business API and start recovering carts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">Join thousands of Shopify merchants increasing their revenue</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Average conversion increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Message delivery rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5min</div>
              <div className="text-gray-600">Setup time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Automated messaging</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Recover More Sales?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Install WhatsApp Analytics today and start converting abandoned carts into revenue.
          </p>
          <a 
            href="https://apps.shopify.com" 
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-200 inline-block"
          >
            Find in Shopify App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-sm">📱</span>
                </div>
                <span className="font-bold">WhatsApp Analytics</span>
              </div>
              <p className="text-gray-400">Boost your Shopify store revenue with automated WhatsApp messaging.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/support" className="hover:text-white">Help Center</a></li>
                <li><a href="mailto:zaptoolonline@gmail.com" className="hover:text-white">Contact Us</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WhatsApp Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}