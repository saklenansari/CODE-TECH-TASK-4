// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(reg => {
      console.log("Service Worker registered", reg);
    }).catch(err => console.error("SW registration failed:", err));
  });
}

// Push Notification (optional demo request)
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    console.log("Notifications enabled");
  }
});
