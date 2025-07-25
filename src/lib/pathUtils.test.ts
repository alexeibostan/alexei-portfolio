/**
 * Manual test file for pathUtils.ts
 * Run this file with: node -r ts-node/register src/lib/pathUtils.test.ts
 * Or copy the functions and test cases to browser console
 */

// Copy the functions from pathUtils.ts here for standalone testing
function getPathWithoutLocale(pathname: string, supportedLocales: string[] = ['en', 'nl']): string {
  let pathWithoutLocale = pathname;
  
  const localePattern = new RegExp(`^/(${supportedLocales.join('|')})(\/|$)`);
  const match = pathWithoutLocale.match(localePattern);
  
  if (match) {
    pathWithoutLocale = pathWithoutLocale.substring(match[0].length - (match[2] === '/' ? 1 : 0));
  }
  
  if (!pathWithoutLocale.startsWith('/')) {
    pathWithoutLocale = '/' + pathWithoutLocale;
  }
  
  if (pathWithoutLocale !== '/' && !pathWithoutLocale.endsWith('/')) {
    pathWithoutLocale += '/';
  }
  
  return pathWithoutLocale;
}

function constructLocalizedPath(newLocale: string, pathWithoutLocale: string, supportedLocales: string[] = ['en', 'nl']): string {
  if (!newLocale || !supportedLocales.includes(newLocale)) {
    console.warn('Invalid locale provided:', newLocale);
    return `/${supportedLocales[0]}/`;
  }
  
  if (pathWithoutLocale === '/') {
    return `/${newLocale}/`;
  } else {
    const cleanPath = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
    return `/${newLocale}${cleanPath}`;
  }
}

// Test cases
const testCases = [
  // getPathWithoutLocale tests
  { 
    name: 'Dutch about page', 
    input: '/nl/about/', 
    expected: '/about/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  { 
    name: 'English projects page', 
    input: '/en/projects/', 
    expected: '/projects/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  { 
    name: 'Dutch root page', 
    input: '/nl/', 
    expected: '/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  { 
    name: 'Dutch root page without trailing slash', 
    input: '/nl', 
    expected: '/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  { 
    name: 'Root page', 
    input: '/', 
    expected: '/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  { 
    name: 'Path without locale', 
    input: '/some-page/', 
    expected: '/some-page/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  { 
    name: 'Path without locale or trailing slash', 
    input: '/some-page', 
    expected: '/some-page/',
    fn: (input: string) => getPathWithoutLocale(input)
  },
  
  // constructLocalizedPath tests
  { 
    name: 'Switch to Dutch about page', 
    input: '/about/', 
    expected: '/nl/about/',
    fn: (input: string) => constructLocalizedPath('nl', input)
  },
  { 
    name: 'Switch to English root', 
    input: '/', 
    expected: '/en/',
    fn: (input: string) => constructLocalizedPath('en', input)
  },
  { 
    name: 'Switch to Dutch skills page', 
    input: '/skills/', 
    expected: '/nl/skills/',
    fn: (input: string) => constructLocalizedPath('nl', input)
  },
  { 
    name: 'Invalid locale fallback', 
    input: '/about/', 
    expected: '/en/',
    fn: (input: string) => constructLocalizedPath('invalid', input)
  }
];

// Run tests
console.log('🧪 Running Path Utils Tests\n');

let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
  const result = test.fn(test.input);
  const success = result === test.expected;
  
  if (success) {
    console.log(`✅ Test ${index + 1}: ${test.name}`);
    console.log(`   Input: "${test.input}" → Output: "${result}"`);
    passed++;
  } else {
    console.log(`❌ Test ${index + 1}: ${test.name}`);
    console.log(`   Input: "${test.input}"`);
    console.log(`   Expected: "${test.expected}"`);
    console.log(`   Got: "${result}"`);
    failed++;
  }
  console.log('');
});

console.log(`📊 Results: ${passed} passed, ${failed} failed`);

// Full integration test - simulating the language switcher behavior
console.log('🔄 Integration Test: Language Switching\n');

const integrationTests = [
  { from: '/nl/about/', to: 'en', expected: '/en/about/' },
  { from: '/en/projects/', to: 'nl', expected: '/nl/projects/' },
  { from: '/nl/', to: 'en', expected: '/en/' },
  { from: '/en/skills/', to: 'nl', expected: '/nl/skills/' }
];

integrationTests.forEach((test, index) => {
  const pathWithoutLocale = getPathWithoutLocale(test.from);
  const newPath = constructLocalizedPath(test.to, pathWithoutLocale);
  const success = newPath === test.expected;
  
  console.log(`${success ? '✅' : '❌'} Integration ${index + 1}: ${test.from} → ${test.to}`);
  console.log(`   Path without locale: "${pathWithoutLocale}"`);
  console.log(`   Final path: "${newPath}" ${success ? '' : `(expected "${test.expected}")`}`);
  console.log('');
});

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getPathWithoutLocale, constructLocalizedPath };
}
