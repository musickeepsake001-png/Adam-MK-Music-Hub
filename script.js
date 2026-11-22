
document.addEventListener("DOMContentLoaded", function () {

  console.log("Adam MK Music Hub is ready!");

  window.showPage = function(page) {
    const content = document.getElementById("content");

    const pages = {
      home: `
        <div class="welcome">
          <h2>Welcome to Adam MK Music Hub</h2>
          <p>One World • One Music Community</p>
        </div>
        <div class="section">
          <h3>🎵 Welcome Home</h3>
          <p>Discover music and connect with artists worldwide.</p>
        </div>
      `,
      music: `
        <div class="section">
          <h3>🎧 Music Library</h3>
          <p>Music sharing and discovery will appear here.</p>
        </div>
      `,
      artists: `
        <div class="section">
          <h3>🌍 Artist Community</h3>
          <p>A home for upcoming and established artists.</p>
        </div>
      `,
      about: `
        <div class="section">
          <h3>About Us</h3>
          <p>Adam MK Music Hub brings music lovers and artists together.</p>
        </div>
      `
    };

    if (content) {
      content.innerHTML = pages[page] || pages.home;
      window.scrollTo(0, 0);
    }
  };

});
