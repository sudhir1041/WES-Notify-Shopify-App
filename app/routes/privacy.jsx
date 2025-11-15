import { Page, Layout, Card, Text, Stack } from "@shopify/polaris";

export default function Privacy() {
  return (
    <Page title="Privacy Policy">
      <Layout>
        <Layout.Section>
          <Card>
            <Stack vertical spacing="loose">
              <Text variant="headingLg">Privacy Policy</Text>
              <Text variant="bodyMd">Last updated: {new Date().toLocaleDateString()}</Text>
              
              <Stack vertical spacing="tight">
                <Text variant="headingMd">Information We Collect</Text>
                <Text>
                  We collect information you provide directly to us, such as when you:
                </Text>
                <ul>
                  <li>Install and configure our app</li>
                  <li>Set up WhatsApp messaging templates</li>
                  <li>Configure automation settings</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Shopify Data</Text>
                <Text>
                  When you install our app, we access the following Shopify data with your permission:
                </Text>
                <ul>
                  <li>Order information (for confirmations and notifications)</li>
                  <li>Customer data (for messaging and analytics)</li>
                  <li>Cart data (for abandonment recovery)</li>
                  <li>Product information (for message content)</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">How We Use Information</Text>
                <Text>We use the information we collect to:</Text>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Send WhatsApp messages on your behalf</li>
                  <li>Generate analytics and reports</li>
                  <li>Improve our app functionality</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Data Security</Text>
                <Text>
                  We implement appropriate security measures to protect your information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </Text>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Contact Us</Text>
                <Text>
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: zaptoolonline@gmail.com
                  <br />
                  Website: https://zaptool.online
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}