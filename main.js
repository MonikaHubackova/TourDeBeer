async function inicializujWeb() {
  try {
    const [headerRes, footerRes] = await Promise.all([
      fetch("header.html"),
      fetch("footer.html"),
    ]);

    document.getElementById("header-placeholder").innerHTML =
      await headerRes.text();
    document.getElementById("footer-placeholder").innerHTML =
      await footerRes.text();

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    if (hamburger && nav) {
      hamburger.addEventListener("click", () => nav.classList.toggle("open"));
    }
  } catch (error) {
    console.error("Chyba při načítání komponent:", error);
  }
}
window.addEventListener("DOMContentLoaded", inicializujWeb);
