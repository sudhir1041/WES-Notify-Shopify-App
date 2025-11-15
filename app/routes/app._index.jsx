import {
  Page,
  Layout,
  Text,
  Card,
  BlockStack,
  InlineStack,
  Badge,
  ProgressBar,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { useLoaderData, useRevalidator } from "@remix-run/react";
import { useEffect } from "react";
import db from "../db.server";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  
  // Return basic data to ensure app loads
  return {
    shop: session.shop,
    totalAutomations: 0,
    activeAutomations: 0,
    successRate: 0,
    todayExecutions: 0,
    campaignPerformance: [],
    recentActivity: ['App successfully loaded'],
    cartStats: {
      totalCarts: 0,
      abandonedCarts: 0,
      convertedCarts: 0,
      activeCarts: 0,
      abandonmentRate: 0,
      conversionRate: 0
    },
    automationStats: {
      abandonedCart: { sent: 0, failed: 0, total: 0 },
      welcomeSeries: { sent: 0, failed: 0, total: 0 },
      orders: { confirmations: 0, fulfillments: 0 }
    }
  };
};

export default function Index() {
  const analytics = useLoaderData();
  const revalidator = useRevalidator();
  
  // Auto-refresh every 30 seconds for real-time data
  useEffect(() => {
    const interval = setInterval(() => {
      revalidator.revalidate();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [revalidator]);
  
  return (
    <Page>
      <TitleBar title="WhatsApp Analytics Dashboard">
        <Button onClick={() => revalidator.revalidate()} loading={revalidator.state === 'loading'}>
          Refresh Data
        </Button>
      </TitleBar>
      <BlockStack gap="500">
        <Card>
          <BlockStack gap="200">
            <Text as="h2" variant="headingLg">Welcome to WhatsApp Analytics!</Text>
            <Text as="p" variant="bodyMd">
              Your app is successfully installed and running for shop: <strong>{analytics.shop}</strong>
            </Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              Configure your WhatsApp settings and start automating your customer communications.
            </Text>
          </BlockStack>
        </Card>
        <Layout>
          <Layout.Section>
            <BlockStack gap="400">
              <InlineStack gap="400">
                <Card>
                  <BlockStack gap="200">
                    <Text as="h3" variant="headingMd">Total Automations</Text>
                    <Text as="p" variant="heading2xl">{analytics.totalAutomations}</Text>
                    <Badge tone="info">Created</Badge>
                  </BlockStack>
                </Card>
                <Card>
                  <BlockStack gap="200">
                    <Text as="h3" variant="headingMd">Active Campaigns</Text>
                    <Text as="p" variant="heading2xl">{analytics.activeAutomations}</Text>
                    <Badge tone="success">Running</Badge>
                  </BlockStack>
                </Card>
                <Card>
                  <BlockStack gap="200">
                    <Text as="h3" variant="headingMd">Success Rate</Text>
                    <Text as="p" variant="heading2xl">{analytics.successRate}%</Text>
                    <Badge tone={analytics.successRate >= 80 ? "success" : "warning"}>
                      {analytics.successRate >= 80 ? "Excellent" : "Good"}
                    </Badge>
                  </BlockStack>
                </Card>
              </InlineStack>
              
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingLg">Campaign Performance</Text>
                  <BlockStack gap="300">
                    {analytics.campaignPerformance.length > 0 ? (
                      analytics.campaignPerformance.map((campaign, index) => (
                        <BlockStack key={index} gap="200">
                          <InlineStack align="space-between">
                            <Text as="span" variant="bodyMd">{campaign.name}</Text>
                            <Text as="span" variant="bodyMd">{campaign.completion}% completion</Text>
                          </InlineStack>
                          <ProgressBar progress={campaign.completion} tone={campaign.tone} />
                        </BlockStack>
                      ))
                    ) : (
                      <Text as="p" variant="bodyMd" tone="subdued">
                        No campaigns yet. Create automations to see performance metrics.
                      </Text>
                    )}
                  </BlockStack>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
          
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              <Card>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">Recent Activity</Text>
                  <BlockStack gap="200">
                    {analytics.recentActivity.length > 0 ? (
                      analytics.recentActivity.map((activity, index) => (
                        <Text key={index} as="p" variant="bodyMd">• {activity}</Text>
                      ))
                    ) : (
                      <Text as="p" variant="bodyMd" tone="subdued">
                        No recent activity. Automations will appear here once they start running.
                      </Text>
                    )}
                  </BlockStack>
                </BlockStack>
              </Card>
              
              <Card>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">Quick Stats</Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Messages Sent Today</Text>
                      <Text as="span" variant="bodyMd">{analytics.todayExecutions}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Total Automations</Text>
                      <Text as="span" variant="bodyMd">{analytics.totalAutomations}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Active Now</Text>
                      <Text as="span" variant="bodyMd">{analytics.activeAutomations}</Text>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
              
              <Card>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">Cart Analytics</Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Total Carts</Text>
                      <Text as="span" variant="bodyMd">{analytics.cartStats.totalCarts}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Abandoned</Text>
                      <Text as="span" variant="bodyMd">{analytics.cartStats.abandonedCarts}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Converted</Text>
                      <Text as="span" variant="bodyMd">{analytics.cartStats.convertedCarts}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Abandonment Rate</Text>
                      <Text as="span" variant="bodyMd">{analytics.cartStats.abandonmentRate}%</Text>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
              
              <Card>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">Abandoned Cart Recovery</Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Messages Sent</Text>
                      <Text as="span" variant="bodyMd">{analytics.automationStats?.abandonedCart?.sent || 0}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Failed</Text>
                      <Text as="span" variant="bodyMd">{analytics.automationStats?.abandonedCart?.failed || 0}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Success Rate</Text>
                      <Text as="span" variant="bodyMd">
                        {analytics.automationStats?.abandonedCart?.total > 0 ? 
                          Math.round((analytics.automationStats.abandonedCart.sent / analytics.automationStats.abandonedCart.total) * 100) : 0}%
                      </Text>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
              
              <Card>
                <BlockStack gap="200">
                  <Text as="h3" variant="headingMd">Welcome Series</Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Welcome Messages</Text>
                      <Text as="span" variant="bodyMd">{analytics.automationStats?.welcomeSeries?.sent || 0}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Failed</Text>
                      <Text as="span" variant="bodyMd">{analytics.automationStats?.welcomeSeries?.failed || 0}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Success Rate</Text>
                      <Text as="span" variant="bodyMd">
                        {analytics.automationStats?.welcomeSeries?.total > 0 ? 
                          Math.round((analytics.automationStats.welcomeSeries.sent / analytics.automationStats.welcomeSeries.total) * 100) : 0}%
                      </Text>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}