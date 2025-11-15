# WhatsApp Analytics for Shopify - Public App

A comprehensive **public Shopify app** that provides automated WhatsApp messaging, cart abandonment recovery, and detailed analytics for e-commerce stores. Available for installation by any Shopify merchant.

## 🏪 For Merchants (App Installation)

### Easy Installation
1. **Find the app** in the Shopify App Store
2. **Click "Add app"** to install
3. **Grant permissions** for orders, customers, and products
4. **Configure WhatsApp** Business API credentials
5. **Start recovering** abandoned carts automatically!

### Direct Installation
Visit: `https://zaptool.online?shop=your-store.myshopify.com`

## 🛠️ For Developers (App Development)

### Prerequisites
- Node.js 18+
- Shopify Partner Account (Public App)
- WhatsApp Business API Account
- Meta Business Manager Access
- Production hosting environment

### Development Setup
```bash
npm install
npx prisma db push
npm run dev
```

### Public App Deployment
```bash
npm run deploy
```

## ✨ Key Features

### 🛒 Cart Abandonment Recovery
- **Automatic Detection**: Tracks carts via Shopify webhooks
- **Smart Timing**: Configurable delays (30min - 24hrs)
- **Multiple Reminders**: Up to 5 reminder sequences
- **Custom Templates**: Personalized messages with variables
- **Success Tracking**: Monitor recovery rates and performance

### 👋 Welcome Series
- **New Customer Onboarding**: Automatic welcome messages
- **Discount Integration**: Include welcome offers and codes
- **Brand Introduction**: Customize first impression messages

### 📦 Order Management
- **Order Confirmations**: Instant purchase confirmations
- **Shipping Notifications**: Fulfillment alerts with tracking
- **Status Updates**: Real-time order progress updates

### 📊 Analytics Dashboard
- **Real-time Metrics**: Live performance monitoring
- **Cart Analytics**: Abandonment rates and recovery stats
- **Message Tracking**: Delivery and success rates
- **Campaign Performance**: Individual automation insights

## 🎯 WhatsApp Templates

### Cart Abandonment
```
Hi {{1}}, you left {{2}} worth {{3}} in your cart at {{4}}. Complete your purchase: {{5}}
```

### Welcome Series
```
Welcome to {{1}}, {{2}}! Use code {{3}} for {{4}} off your first order: {{5}}
```

### Order Confirmation
```
Hi {{1}}, your order #{{2}} for {{3}} has been confirmed. Total: {{4}}
```

## ⚙️ Configuration

### 1. WhatsApp Setup
- Navigate to **Settings** page
- Enter WhatsApp Business API Token
- Configure Phone Number ID
- Set template names and language

### 2. Cart Abandonment
- Go to **Cart Abandonment** page
- Set reminder timing (delay, intervals, max reminders)
- Create custom message templates
- Enable/disable abandonment recovery

### 3. Webhooks
Required webhooks are automatically configured:
- `orders/paid` - Order confirmations
- `orders/fulfilled` - Shipping notifications
- `carts/create` - Cart tracking
- `carts/update` - Cart updates
- `customers/create` - Welcome messages

## 📱 Meta Business Manager Setup

1. **Create Templates** in WhatsApp Manager
2. **Set Categories**:
   - Cart Abandonment: `MARKETING`
   - Welcome Series: `MARKETING`
   - Order Notifications: `TRANSACTIONAL`
3. **Submit for Approval**
4. **Use Template Names** in app settings

## 🔧 Development

### Database Schema
- **WhatsAppSettings**: Configuration storage
- **Cart**: Abandonment tracking
- **Automation**: Campaign management
- **AutomationExecution**: Message tracking
- **CartAbandonmentTemplate**: Custom templates

### Key Files
- `/app/routes/app.settings.jsx` - Configuration page
- `/app/routes/app.cart-abandonment.jsx` - Abandonment management
- `/app/routes/app._index.jsx` - Analytics dashboard
- `/app/services/abandoned-cart.server.js` - Processing logic
- `/app/utils/whatsapp.server.js` - WhatsApp API integration

## 📊 Analytics Features

### Dashboard Metrics
- **Total Automations**: All created campaigns
- **Active Campaigns**: Currently running automations
- **Success Rate**: Overall message delivery rate
- **Cart Abandonment Rate**: Percentage of abandoned carts

### Real-time Updates
- Auto-refresh every 30 seconds
- Manual refresh button
- Live activity feed
- Performance indicators

## 🛠️ Troubleshooting

### Common Issues

**Messages Not Sending**
- Check access token validity
- Verify template approval status
- Ensure correct phone number format

**No Cart Data**
- Verify webhook registration: `npm run deploy`
- Check customers are adding contact info
- Monitor webhook response logs

**Analytics Not Updating**
- Check execution records in database
- Verify webhook handlers are working
- Use manual refresh button

## 🏪 Public App Distribution

### App Store Listing
- **Category**: Marketing > Messaging
- **Keywords**: whatsapp, cart abandonment, analytics, messaging, automation
- **Pricing**: Free to install (WhatsApp API costs apply)

### Multi-Tenant Architecture
- Supports unlimited Shopify stores
- Isolated data per merchant
- Automatic webhook registration
- Store-specific settings and analytics

### Legal Compliance
- Privacy Policy: `/privacy`
- Terms of Service: `/terms`
- Support Page: `/support`
- GDPR compliant data handling

## 📞 Support

- **Email**: zaptoolonline@gmail.com
- **Website**: https://zaptool.online
- **Support Page**: https://zaptool.online/support
- **Documentation**: See `PUBLIC_APP_DEPLOYMENT.md` for deployment guide

## 🚀 Deployment

### Public App Setup
1. Configure Shopify Partner Dashboard for public distribution
2. Set up production environment with PostgreSQL
3. Deploy to production hosting (Heroku, AWS, etc.)
4. Submit to Shopify App Store for review

### Production Environment
```bash
NODE_ENV=production
APP_DISTRIBUTION=public
DATABASE_URL=postgresql://...
SHOPIFY_APP_URL=https://your-domain.com
```

### Monitoring
- Monitor installation rates across stores
- Track message delivery success rates
- Set up error alerting and logging
- Customer support ticket management

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Shopify merchants who want to recover abandoned carts and engage customers through WhatsApp.**