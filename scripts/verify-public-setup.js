#!/usr/bin/env node

/**
 * Public App Setup Verification Script
 * Checks if the app is properly configured for public distribution
 */

import fs from 'fs';
import path from 'path';

const checks = [];

// Check 1: Environment Configuration
function checkEnvironment() {
  try {
    const envPath = path.join(process.cwd(), '.env');
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    const requiredVars = [
      'SHOPIFY_API_KEY',
      'SHOPIFY_API_SECRET', 
      'SHOPIFY_APP_URL',
      'SCOPES'
    ];
    
    const missingVars = requiredVars.filter(varName => 
      !envContent.includes(varName)
    );
    
    if (missingVars.length === 0) {
      checks.push('✅ Environment variables configured');
    } else {
      checks.push(`❌ Missing environment variables: ${missingVars.join(', ')}`);
    }
  } catch (error) {
    checks.push('❌ .env file not found');
  }
}

// Check 2: Shopify App Configuration
function checkShopifyConfig() {
  try {
    const configPath = path.join(process.cwd(), 'shopify.app.toml');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    if (configContent.includes('WhatsApp Analytics for Shopify')) {
      checks.push('✅ App name configured for public distribution');
    } else {
      checks.push('❌ App name should be updated for public distribution');
    }
    
    if (configContent.includes('# App Store configuration is done in Shopify Partner Dashboard')) {
      checks.push('✅ Partner Dashboard configuration noted');
    } else {
      checks.push('❌ Add Partner Dashboard configuration note');
    }
  } catch (error) {
    checks.push('❌ shopify.app.toml not found');
  }
}

// Check 3: Legal Pages
function checkLegalPages() {
  const legalPages = ['privacy.jsx', 'terms.jsx', 'support.jsx'];
  const routesDir = path.join(process.cwd(), 'app', 'routes');
  
  legalPages.forEach(page => {
    const pagePath = path.join(routesDir, page);
    if (fs.existsSync(pagePath)) {
      checks.push(`✅ ${page} exists`);
    } else {
      checks.push(`❌ ${page} missing`);
    }
  });
}

// Check 4: Public Landing Page
function checkLandingPage() {
  const indexPath = path.join(process.cwd(), 'app', 'routes', '_index.jsx');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    if (content.includes('WhatsApp Analytics for Shopify')) {
      checks.push('✅ Public landing page configured');
    } else {
      checks.push('❌ Landing page needs public app content');
    }
  } else {
    checks.push('❌ Landing page (_index.jsx) missing');
  }
}

// Check 5: Package.json Configuration
function checkPackageJson() {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    if (packageContent.name === 'whatsapp-analytics-shopify') {
      checks.push('✅ Package name updated for public app');
    } else {
      checks.push('❌ Package name should be updated');
    }
    
    if (packageContent.private === false) {
      checks.push('✅ Package set to public');
    } else {
      checks.push('❌ Package should be set to public (private: false)');
    }
  } catch (error) {
    checks.push('❌ Error reading package.json');
  }
}

// Run all checks
console.log('🔍 Verifying Public App Setup...\n');

checkEnvironment();
checkShopifyConfig();
checkLegalPages();
checkLandingPage();
checkPackageJson();

// Display results
console.log('\n📋 Setup Verification Results:');
console.log('================================');
checks.forEach(check => console.log(check));

const failedChecks = checks.filter(check => check.startsWith('❌'));
const passedChecks = checks.filter(check => check.startsWith('✅'));

console.log(`\n📊 Summary: ${passedChecks.length} passed, ${failedChecks.length} failed`);

if (failedChecks.length === 0) {
  console.log('\n🎉 Your app is ready for public distribution!');
  console.log('\nNext steps:');
  console.log('1. Run: shopify app deploy');
  console.log('2. Configure Partner Dashboard (see PARTNER_DASHBOARD_SETUP.md)');
  console.log('3. Submit to Shopify App Store for review');
} else {
  console.log('\n⚠️  Please fix the failed checks before deploying.');
}