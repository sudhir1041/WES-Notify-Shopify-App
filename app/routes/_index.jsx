import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Card, Page, Layout, Text, Button, Stack, Banner } from "@shopify/polaris";

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

  if (shop && installUrl) {
    return (
      <Page title="Install WhatsApp Analytics">
        <Layout>
          <Layout.Section>
            <Card>
              <Stack vertical>
                <Text variant="headingLg">Ready to Install</Text>
                <Text>Click the button below to install WhatsApp Analytics for your Shopify store: {shop}</Text>
                <Button primary url={installUrl}>
                  Install App
                </Button>
              </Stack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Page title="WhatsApp Analytics for Shopify">
      <Layout>
        <Layout.Section>
          <Banner title="Public App Available" status="success">
            <p>This app is now configured for public distribution through the Shopify App Store.</p>
          </Banner>
        </Layout.Section>
        
        <Layout.Section>
          <Card>
            <Stack vertical spacing="loose">
              <Text variant="headingLg">WhatsApp Analytics & Cart Recovery</Text>
              
              <Text>
                Recover abandoned carts and engage customers with automated WhatsApp messaging. 
                Get detailed analytics on your messaging performance and customer engagement.
              </Text>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Key Features:</Text>
                <ul>
                  <li>🛒 Automated cart abandonment recovery</li>
                  <li>👋 Welcome message series for new customers</li>
                  <li>📦 Order confirmation and shipping notifications</li>
                  <li>📊 Real-time analytics dashboard</li>
                  <li>🎯 Customizable WhatsApp templates</li>
                  <li>⚡ Easy setup with pre-built workflows</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Installation:</Text>
                <Text>
                  1. Search for "WhatsApp Analytics" in the Shopify App Store<br/>
                  2. Click "Add app" to install<br/>
                  3. Configure your WhatsApp Business API credentials<br/>
                  4. Start recovering abandoned carts automatically!
                </Text>
              </Stack>

              <Button primary external url="https://apps.shopify.com">
                Find in Shopify App Store
              </Button>
            </Stack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <Stack vertical>
              <Text variant="headingMd">For Developers</Text>
              <Text>
                To install this app directly on a specific store, use the format:
              </Text>
              <Text variant="bodyMd" fontWeight="bold">
                {appUrl}?shop=your-store.myshopify.com
              </Text>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}