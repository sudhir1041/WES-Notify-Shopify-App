import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export const loader = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const shop = url.searchParams.get("shop");
    
    return json({
      shop,
      installUrl: shop 
        ? `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=${process.env.SCOPES}&redirect_uri=${process.env.SHOPIFY_APP_URL}/auth/callback&state=nonce`
        : null,
      appUrl: process.env.SHOPIFY_APP_URL
    });
  } catch (error) {
    console.error('Loader error:', error);
    return json({ shop: null, installUrl: null, appUrl: process.env.SHOPIFY_APP_URL });
  }
};

export default function Index() {
  const { shop, installUrl, appUrl } = useLoaderData();
  const [shopDomain, setShopDomain] = useState("");

  if (shop && installUrl) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <div style={{
          maxWidth: '28rem',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem'
            }}>
              📱
            </div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>Ready to Install</h1>
            <p style={{ color: '#6b7280' }}>Install WhatsApp Analytics for your store: <strong>{shop}</strong></p>
          </div>
          
          <a 
            href={installUrl}
            style={{
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#16a34a',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
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
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '1.5rem 0'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              backgroundColor: '#22c55e',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem',
              fontSize: '1.25rem'
            }}>
              📱
            </div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#111827'
            }}>WhatsApp Analytics</h1>
          </div>
          <a href="/support" style={{
            color: '#16a34a',
            fontWeight: '500',
            textDecoration: 'none'
          }}>Support</a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Recover Abandoned Carts with WhatsApp
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '2rem',
            maxWidth: '48rem',
            margin: '0 auto 2rem'
          }}>
            Boost your Shopify store's revenue with automated WhatsApp messaging, cart abandonment recovery, and detailed analytics. Increase conversions by up to 30%.
          </p>
          
          {/* Installation Form */}
          <div style={{
            maxWidth: '28rem',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem'
          }}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '1rem'
            }}>Install on Your Store</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="my-shop-domain.myshopify.com"
                value={shopDomain}
                onChange={(e) => setShopDomain(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#22c55e';
                  e.target.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                onClick={handleInstall}
                disabled={!shopDomain}
                style={{
                  width: '100%',
                  backgroundColor: shopDomain ? '#16a34a' : '#d1d5db',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: shopDomain ? 'pointer' : 'not-allowed',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => {
                  if (shopDomain) e.target.style.backgroundColor = '#15803d';
                }}
                onMouseOut={(e) => {
                  if (shopDomain) e.target.style.backgroundColor = '#16a34a';
                }}
              >
                Install App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>Powerful Features for Your Store</h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280'
            }}>Everything you need to engage customers and recover lost sales</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                🛒
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.75rem'
              }}>Cart Abandonment Recovery</h3>
              <p style={{ color: '#6b7280' }}>Automatically detect abandoned carts and send personalized WhatsApp messages to recover lost sales with customizable timing and templates.</p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dcfce7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                📊
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.75rem'
              }}>Real-time Analytics</h3>
              <p style={{ color: '#6b7280' }}>Track message delivery rates, conversion metrics, and campaign performance with detailed analytics and insights to optimize your strategy.</p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#f3e8ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                ⚡
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.75rem'
              }}>Easy Setup & Automation</h3>
              <p style={{ color: '#6b7280' }}>Quick 5-minute setup with pre-built templates and workflows. No coding required - just connect your WhatsApp Business API and start recovering carts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>Proven Results</h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280'
            }}>Join thousands of Shopify merchants increasing their revenue</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#16a34a',
                marginBottom: '0.5rem'
              }}>30%</div>
              <div style={{ color: '#6b7280' }}>Average conversion increase</div>
            </div>
            <div>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#16a34a',
                marginBottom: '0.5rem'
              }}>85%</div>
              <div style={{ color: '#6b7280' }}>Message delivery rate</div>
            </div>
            <div>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#16a34a',
                marginBottom: '0.5rem'
              }}>5min</div>
              <div style={{ color: '#6b7280' }}>Setup time</div>
            </div>
            <div>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#16a34a',
                marginBottom: '0.5rem'
              }}>24/7</div>
              <div style={{ color: '#6b7280' }}>Automated messaging</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#16a34a',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Ready to Recover More Sales?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#bbf7d0',
            marginBottom: '2rem'
          }}>
            Install WhatsApp Analytics today and start converting abandoned carts into revenue.
          </p>
          <a 
            href="https://apps.shopify.com" 
            style={{
              backgroundColor: 'white',
              color: '#16a34a',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            Find in Shopify App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  backgroundColor: '#22c55e',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '0.5rem',
                  fontSize: '0.875rem'
                }}>
                  📱
                </div>
                <span style={{ fontWeight: 'bold' }}>WhatsApp Analytics</span>
              </div>
              <p style={{ color: '#9ca3af' }}>Boost your Shopify store revenue with automated WhatsApp messaging.</p>
            </div>
            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem'
              }}>Support</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a href="/support" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }}>Help Center</a>
                <a href="mailto:zaptoolonline@gmail.com" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }}>Contact Us</a>
              </div>
            </div>
            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem'
              }}>Legal</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a href="/terms" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }}>Terms of Service</a>
                <a href="/privacy" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }}>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '2rem',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; 2024 WhatsApp Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}-bold">WhatsApp Analytics</span>
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