# Shopify Partner Dashboard Setup for Public App

Since the `[app_store]` section is not supported in shopify.app.toml, you need to configure the app store listing through the Shopify Partner Dashboard.

## 🏪 Partner Dashboard Configuration

### 1. App Distribution Settings
- Go to your app in Partner Dashboard
- Navigate to **App setup** > **Distribution**
- Select **Public app** (available in Shopify App Store)

### 2. App Store Listing Information

#### Basic Information
- **App name**: WhatsApp Analytics for Shopify
- **App handle**: whatsapp-analytics-shopify
- **Category**: Marketing
- **Subcategory**: Messaging & Communication

#### Description
**Short description** (80 characters max):
```
Recover abandoned carts with WhatsApp messaging and detailed analytics
```

**Long description**:
```
Comprehensive WhatsApp messaging solution for Shopify stores. Automatically recover abandoned carts, send order notifications, and track customer engagement with detailed analytics.

Key Features:
• Automated cart abandonment recovery
• Order confirmation & shipping notifications  
• Welcome message series for new customers
• Real-time analytics dashboard
• Customizable WhatsApp templates
• Easy setup with pre-built workflows

Perfect for stores wanting to increase conversions through WhatsApp messaging while maintaining detailed performance tracking.
```

#### Keywords
```
whatsapp, cart abandonment, analytics, messaging, automation, recovery, notifications, engagement, marketing, conversion
```

### 3. App URLs
- **App URL**: https://zaptool.online
- **Privacy policy URL**: https://zaptool.online/privacy
- **Terms of service URL**: https://zaptool.online/terms
- **Support URL**: https://zaptool.online/support

### 4. Contact Information
- **Support email**: zaptoolonline@gmail.com
- **Developer website**: https://zaptool.online

### 5. Pricing
- **Pricing model**: Free
- **Note**: WhatsApp Business API costs apply separately

### 6. App Screenshots (Required)
You'll need to provide:
- Dashboard screenshot (1280x800px)
- Settings page screenshot (1280x800px)
- Analytics view screenshot (1280x800px)
- Mobile view screenshot (750x1334px)

### 7. App Icon
- Size: 1024x1024px
- Format: PNG
- Background: Transparent or solid color
- Should represent WhatsApp + Analytics theme

## 🚀 Deployment Process

### Step 1: Deploy App
```bash
shopify app deploy
```

### Step 2: Configure Partner Dashboard
1. Complete all app store listing fields
2. Upload screenshots and icon
3. Set distribution to "Public"
4. Add all required URLs

### Step 3: Submit for Review
1. Click "Submit for review" in Partner Dashboard
2. Wait for Shopify approval (5-10 business days)
3. Address any feedback if required
4. App goes live in App Store once approved

## ✅ Pre-Submission Checklist

- [ ] App deploys successfully with `shopify app deploy`
- [ ] All legal pages accessible (/privacy, /terms, /support)
- [ ] Landing page shows proper public app content
- [ ] App works with test store installation
- [ ] Screenshots and icon prepared
- [ ] Partner Dashboard listing completed
- [ ] Support email configured and monitored

## 📝 Review Requirements

Shopify will review:
- App functionality and user experience
- Legal compliance (privacy policy, terms)
- App store listing accuracy
- Security and performance
- Merchant value proposition

Make sure your app provides clear value and follows Shopify's app store guidelines.