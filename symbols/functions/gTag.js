export const gTag = function gTag() {
  // Dynamically load the gtag.js script
  (function loadGtag() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RVNCXHLZ7R';
    document.head.appendChild(script);

    // Initialize gtag once the script has loaded
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'G-RVNCXHLZ7R');
    };
  })()
}