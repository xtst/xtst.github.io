---
permalink: /assets/js/visitor-counter.js
---
const counterContainer = document.getElementById("site-visit-counter");
const counterValue = document.getElementById("busuanzi_site_pv");

if (counterContainer && counterValue) {
  fetch("https://cdn.busuanzi.cc/api.php", {
    method: "POST",
    body: JSON.stringify({
      url: window.location.href,
      referrer: document.referrer,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Visitor counter request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const sitePageViews = Number.parseInt(data.busuanzi_site_pv, 10);
      if (!Number.isFinite(sitePageViews)) return;

      counterValue.textContent = sitePageViews.toLocaleString("en-US");
      counterContainer.hidden = false;
    })
    .catch(() => {
      // Keep the counter hidden when the third-party service is unavailable.
    });
}
