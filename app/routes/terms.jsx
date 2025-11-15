import { Page, Layout, Card, Text, Stack } from "@shopify/polaris";

export default function Terms() {
  return (
    <Page title="Terms of Service">
      <Layout>
        <Layout.Section>
          <Card>
            <Stack vertical spacing="loose">
              <Text variant="headingLg">Terms of Service</Text>
              <Text variant="bodyMd">Last updated: {new Date().toLocaleDateString()}</Text>
              
              <Stack vertical spacing="tight">
                <Text variant="headingMd">Acceptance of Terms</Text>
                <Text>
                  By installing and using WhatsApp Analytics for Shopify, you agree to be bound by these Terms of Service.
                </Text>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Description of Service</Text>
                <Text>
                  WhatsApp Analytics provides automated messaging and analytics services for Shopify stores, including:
                </Text>
                <ul>
                  <li>Cart abandonment recovery messaging</li>
                  <li>Order confirmation and shipping notifications</li>
                  <li>Customer engagement analytics</li>
                  <li>WhatsApp message automation</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">User Responsibilities</Text>
                <Text>You are responsible for:</Text>
                <ul>
                  <li>Obtaining proper consent for WhatsApp messaging</li>
                  <li>Complying with WhatsApp Business API terms</li>
                  <li>Following applicable privacy and marketing laws</li>
                  <li>Maintaining accurate contact information</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Limitations</Text>
                <Text>
                  Our service is provided "as is" without warranties. We are not liable for:
                </Text>
                <ul>
                  <li>Message delivery failures</li>
                  <li>WhatsApp API limitations or changes</li>
                  <li>Third-party service interruptions</li>
                </ul>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Termination</Text>
                <Text>
                  You may terminate this agreement by uninstalling the app. We may terminate 
                  service for violations of these terms.
                </Text>
              </Stack>

              <Stack vertical spacing="tight">
                <Text variant="headingMd">Contact Information</Text>
                <Text>
                  For questions about these Terms of Service:
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