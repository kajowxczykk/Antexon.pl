// Initialize Vercel Web Analytics
(function() {
  // Queue for analytics events
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  
  // Load analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
})();
