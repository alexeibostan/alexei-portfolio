#!/usr/bin/env node

/**
 * SEO Validation Script
 * 
 * This script validates the SEO implementation by checking:
 * - Meta tags presence and length
 * - Open Graph tags
 * - Twitter Card tags
 * - Structured data (JSON-LD)
 * - Essential meta tags
 * 
 * Usage: node scripts/validate-seo.js [url]
 * Example: node scripts/validate-seo.js http://localhost:3000/en
 * 
 * Dependencies: npm install node-html-parser
 */

import https from 'https';
import http from 'http';
import { URL } from 'url';
import { parse } from 'node-html-parser';

const url = process.argv[2] || 'http://localhost:3000';

console.log(`🔍 Validating SEO for: ${url}\n`);

const getHTML = (url, maxRedirects = 5) => {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) {
      reject(new Error('Too many redirects'));
      return;
    }

    const client = url.startsWith('https:') ? https : http;
    
    client.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, url).toString();
        console.log(`Following redirect: ${url} -> ${redirectUrl}`);
        getHTML(redirectUrl, maxRedirects - 1).then(resolve).catch(reject);
        return;
      }

      // Handle non-200 status codes
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const validateSEO = async () => {
  try {
    const html = await getHTML(url);
    const root = parse(html);
    
    let score = 0;
    const maxScore = 100;
    const checks = [];

    // 1. Essential Meta Tags (20 points)
    const charset = root.querySelector('meta[charset]');
    checks.push({
      name: 'Charset meta tag',
      status: charset ? '✅' : '❌',
      points: charset ? 5 : 0,
      message: charset ? 'Found' : 'Missing charset meta tag'
    });

    const viewport = root.querySelector('meta[name="viewport"]');
    checks.push({
      name: 'Viewport meta tag',
      status: viewport ? '✅' : '❌',
      points: viewport ? 5 : 0,
      message: viewport ? 'Found' : 'Missing viewport meta tag'
    });

    const robots = root.querySelector('meta[name="robots"]');
    checks.push({
      name: 'Robots meta tag',
      status: robots ? '✅' : '❌',
      points: robots ? 5 : 0,
      message: robots ? `Found: ${robots.getAttribute('content')}` : 'Missing robots meta tag'
    });

    const title = root.querySelector('title');
    const titleLength = title ? title.text.length : 0;
    checks.push({
      name: 'Title tag',
      status: title && titleLength >= 30 && titleLength <= 60 ? '✅' : titleLength > 0 ? '⚠️' : '❌',
      points: title && titleLength >= 30 && titleLength <= 60 ? 5 : titleLength > 0 ? 2 : 0,
      message: title ? `Found (${titleLength} chars): "${title.text}"` : 'Missing title tag'
    });

    // 2. Meta Description (15 points)
    const description = root.querySelector('meta[name="description"]');
    const descLength = description ? description.getAttribute('content').length : 0;
    checks.push({
      name: 'Meta description',
      status: description && descLength >= 120 && descLength <= 160 ? '✅' : descLength > 0 ? '⚠️' : '❌',
      points: description && descLength >= 120 && descLength <= 160 ? 15 : descLength > 0 ? 7 : 0,
      message: description ? `Found (${descLength} chars)` : 'Missing meta description'
    });

    // 3. Open Graph Tags (25 points)
    const ogTitle = root.querySelector('meta[property="og:title"]');
    const ogDescription = root.querySelector('meta[property="og:description"]');
    const ogUrl = root.querySelector('meta[property="og:url"]');
    const ogImage = root.querySelector('meta[property="og:image"]');
    const ogType = root.querySelector('meta[property="og:type"]');

    checks.push({
      name: 'Open Graph title',
      status: ogTitle ? '✅' : '❌',
      points: ogTitle ? 5 : 0,
      message: ogTitle ? 'Found' : 'Missing og:title'
    });

    checks.push({
      name: 'Open Graph description',
      status: ogDescription ? '✅' : '❌',
      points: ogDescription ? 5 : 0,
      message: ogDescription ? 'Found' : 'Missing og:description'
    });

    checks.push({
      name: 'Open Graph URL',
      status: ogUrl ? '✅' : '❌',
      points: ogUrl ? 5 : 0,
      message: ogUrl ? 'Found' : 'Missing og:url'
    });

    checks.push({
      name: 'Open Graph image',
      status: ogImage ? '✅' : '❌',
      points: ogImage ? 5 : 0,
      message: ogImage ? 'Found' : 'Missing og:image'
    });

    checks.push({
      name: 'Open Graph type',
      status: ogType ? '✅' : '❌',
      points: ogType ? 5 : 0,
      message: ogType ? 'Found' : 'Missing og:type'
    });

    // 4. Twitter Card Tags (20 points)
    const twitterCard = root.querySelector('meta[name="twitter:card"]');
    const twitterTitle = root.querySelector('meta[name="twitter:title"]');
    const twitterDescription = root.querySelector('meta[name="twitter:description"]');
    const twitterImage = root.querySelector('meta[name="twitter:image"]');

    checks.push({
      name: 'Twitter Card type',
      status: twitterCard ? '✅' : '❌',
      points: twitterCard ? 5 : 0,
      message: twitterCard ? `Found: ${twitterCard.getAttribute('content')}` : 'Missing twitter:card'
    });

    checks.push({
      name: 'Twitter title',
      status: twitterTitle ? '✅' : '❌',
      points: twitterTitle ? 5 : 0,
      message: twitterTitle ? 'Found' : 'Missing twitter:title'
    });

    checks.push({
      name: 'Twitter description',
      status: twitterDescription ? '✅' : '❌',
      points: twitterDescription ? 5 : 0,
      message: twitterDescription ? 'Found' : 'Missing twitter:description'
    });

    checks.push({
      name: 'Twitter image',
      status: twitterImage ? '✅' : '❌',
      points: twitterImage ? 5 : 0,
      message: twitterImage ? 'Found' : 'Missing twitter:image'
    });

    // 5. Structured Data (20 points)
    const jsonLdScripts = root.querySelectorAll('script[type="application/ld+json"]');
    let hasPersonSchema = false;
    let hasWebsiteSchema = false;

    jsonLdScripts.forEach(script => {
      try {
        const data = JSON.parse(script.innerHTML);
        const schemas = Array.isArray(data) ? data : [data];
        
        schemas.forEach(schema => {
          if (schema['@type'] === 'Person') hasPersonSchema = true;
          if (schema['@type'] === 'Website') hasWebsiteSchema = true;
        });
      } catch (e) {
        // Invalid JSON-LD
      }
    });

    checks.push({
      name: 'Person Schema',
      status: hasPersonSchema ? '✅' : '❌',
      points: hasPersonSchema ? 10 : 0,
      message: hasPersonSchema ? 'Found Person schema' : 'Missing Person schema'
    });

    checks.push({
      name: 'Website Schema',
      status: hasWebsiteSchema ? '✅' : '❌',
      points: hasWebsiteSchema ? 10 : 0,
      message: hasWebsiteSchema ? 'Found Website schema' : 'Missing Website schema'
    });

    // Calculate total score
    const totalScore = checks.reduce((sum, check) => sum + check.points, 0);
    score = Math.round((totalScore / maxScore) * 100);

    // Display results
    console.log('📊 SEO Validation Results\n');
    console.log('='.repeat(50));
    
    checks.forEach(check => {
      console.log(`${check.status} ${check.name} (${check.points} pts)`);
      console.log(`   ${check.message}\n`);
    });

    console.log('='.repeat(50));
    console.log(`🎯 Overall SEO Score: ${score}/100`);
    
    if (score >= 90) {
      console.log('🎉 Excellent! Your SEO implementation is outstanding.');
    } else if (score >= 75) {
      console.log('👍 Good! Minor improvements needed.');
    } else if (score >= 60) {
      console.log('⚠️  Fair. Several issues need attention.');
    } else {
      console.log('🚨 Poor. Major SEO issues detected.');
    }

    console.log('\n🔗 Validation Tools:');
    console.log('• Google Rich Results Test: https://search.google.com/test/rich-results');
    console.log('• Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
    console.log('• Twitter Card Validator: https://cards-dev.twitter.com/validator');

  } catch (error) {
    console.error('❌ Error validating SEO:', error.message);
    process.exit(1);
  }
};

validateSEO();
