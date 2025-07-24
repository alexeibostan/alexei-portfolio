import { locales } from '@/i18n';

/**
 * Removes the locale prefix from a pathname for static site generation
 * @param pathname - The current pathname (e.g., "/nl/about/", "/en/", "/")
 * @param supportedLocales - Array of supported locale codes (defaults to configured locales)
 * @returns The pathname without the locale prefix (e.g., "/about/", "/", "/")
 */
export function getPathWithoutLocale(
  pathname: string, 
  supportedLocales: readonly string[] = locales
): string {
  let pathWithoutLocale = pathname;
  
  // Create regex pattern for supported locales
  const localePattern = new RegExp(`^/(${supportedLocales.join('|')})(\/|$)`);
  const match = pathWithoutLocale.match(localePattern);
  
  if (match) {
    // Remove the matched locale part
    pathWithoutLocale = pathWithoutLocale.substring(match[0].length - (match[2] === '/' ? 1 : 0));
  }
  
  // Ensure we have a leading slash
  if (!pathWithoutLocale.startsWith('/')) {
    pathWithoutLocale = '/' + pathWithoutLocale;
  }
  
  // For static sites, ensure trailing slash for non-root paths
  if (pathWithoutLocale !== '/' && !pathWithoutLocale.endsWith('/')) {
    pathWithoutLocale += '/';
  }
  
  return pathWithoutLocale;
}

/**
 * Constructs a new path with the specified locale
 * @param newLocale - The target locale (e.g., 'en', 'nl')
 * @param pathWithoutLocale - The path without any locale prefix
 * @param supportedLocales - Array of supported locale codes (defaults to configured locales)
 * @returns The new path with the locale prefix
 */
export function constructLocalizedPath(
  newLocale: string,
  pathWithoutLocale: string,
  supportedLocales: readonly string[] = locales
): string {
  // Validate locale
  if (!newLocale || !supportedLocales.includes(newLocale)) {
    console.warn('Invalid locale provided:', newLocale);
    return `/${supportedLocales[0]}/`; // Return first supported locale as fallback
  }
  
  // For static sites, construct the proper path
  if (pathWithoutLocale === '/') {
    // Root path goes to locale root
    return `/${newLocale}/`;
  } else {
    // Other paths append to locale, ensuring proper formatting
    const cleanPath = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
    return `/${newLocale}${cleanPath}`;
  }
}
