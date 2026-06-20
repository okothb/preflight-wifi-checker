// Append the detection mechanism right into the root DOM
document.documentElement.setAttribute('data-whonmywifi-extension-installed', 'true');

// Listen for securely structured window context message signals
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;

  if (event.data && event.data.type === "REQUEST_LOCAL_TELEMETRY") {
    const navDetails = window.performance.getEntriesByType("navigation")[0];
    
    window.postMessage({
      type: "RESPONSE_LOCAL_TELEMETRY",
      secureConnection: window.location.protocol === "https:",
      handshakeDuration: navDetails ? navDetails.connectEnd - navDetails.connectStart : 0,
      redirectCount: navDetails ? navDetails.redirectCount : 0
    }, window.location.origin);
  }
});