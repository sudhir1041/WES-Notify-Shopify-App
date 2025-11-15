import { Page, Layout, Card, Text, Stack, Button } from "@shopify/polaris";

export default function Support() {
  return (
    <Page title="Support">
      <Layout>
        <Layout.Section>
          <Card>
            <Stack vertical spacing="loose">
              <Text variant="headingLg">Support & Help</Text>
              
              <Stack vertical spacing="tight">
                <Text variant="headingMd">Getting Started</Text>
                <Text>
                  Need help setting up WhatsApp Analytics? Check out our quick start guide:
                </Text>
                <ol>
                  <li>Install the app from the Shopify App Store</li>
                  <li>Configure your WhatsApp Business API credentials</li>
                  <li>Set up your message templates</li>
                  <li>Enable cart abandonment recovery</li>
                  <li>Monitor your analytics dashboard</li>
                </ol>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Common Issues</Text>
                
                <Text variant="headingSm">Messages Not Sending</Text>
                <ul>
                  <li>Verify your WhatsApp Business API token is valid</li>
                  <li>Check that your templates are approved by Meta</li>
                  <li>Ensure phone numbers are in correct format (+1234567890)</li>
                </ul>

                <Text variant="headingSm">No Cart Data</Text>
                <ul>
                  <li>Verify webhooks are properly registered</li>
                  <li>Check that customers are providing contact information</li>
                  <li>Monitor webhook response logs in settings</li>
                </ul>

                <Text variant="headingSm">Analytics Not Updating</Text>
                <ul>
                  <li>Use the manual refresh button on dashboard</li>
                  <li>Check execution records in database</li>
                  <li>Verify webhook handlers are functioning</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">WhatsApp Setup Requirements</Text>
                <Text>To use this app, you need:</Text>
                <ul>
                  <li>WhatsApp Business API Account</li>
                  <li>Meta Business Manager Access</li>
                  <li>Approved message templates</li>
                  <li>Valid phone number verification</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Contact Support</Text>
                <Text>
                  Still need help? We're here to assist you:
                </Text>
                <Stack>
                  <Button primary external url="mailto:zaptoolonline@gmail.com">
                    Email Support
                  </Button>
                  <Button external url="https://zaptool.online">
                    Visit Website
                  </Button>
                </Stack>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Documentation</Text>
                <Text>
                  For detailed setup instructions and API documentation, visit our help center.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}