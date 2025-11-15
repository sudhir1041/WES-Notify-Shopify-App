// Simple script to suppress browser extension errors
(function() {
  const originalConsoleError = console.error;
  
  console.error = function(...args) {
    const message = args.join(' ');
    
    // Suppress known extension errors
    if (message.includes('chrome-extension') || 
        message.includes('removeAttribute') ||
        message.includes('inject/index.js')) {
      return; // Don't log extension errors
    }
    
    // Log all other errors normally
    originalConsoleError.apply(console, args);
  };
  
  // Suppress extension errors in event handlers
  window.addEventListener('error', function(e) {
    if (e.filename && e.filename.includes('chrome-extension')) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, true);
})();