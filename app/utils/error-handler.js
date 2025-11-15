/**
 * Global error handler for browser extension conflicts
 */

export function setupGlobalErrorHandler() {
  // Suppress browser extension errors that don't affect app functionality
  window.addEventListener('error', (event) => {
    const error = event.error;
    const message = error?.message || '';
    
    // Check if error is from browser extension
    if (message.includes('chrome-extension') || 
        message.includes('removeAttribute') ||
        message.includes('inject/index.js')) {
      
      console.warn('Browser extension error suppressed:', {
        message: error.message,
        stack: error.stack?.substring(0, 200)
      });
      
      event.preventDefault();
      return false;
    }
  });

  // Handle unhandled promise rejections from extensions
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    
    if (reason?.message?.includes('chrome-extension') ||
        reason?.stack?.includes('chrome-extension')) {
      
      console.warn('Extension promise rejection suppressed:', reason);
      event.preventDefault();
    }
  });
}

// Content Security Policy helper
export function addCSPMeta() {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = "default-src 'self' 'unsafe-inline' 'unsafe-eval' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;";
  document.head.appendChild(meta);
}