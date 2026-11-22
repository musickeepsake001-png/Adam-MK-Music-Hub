
document.addEventListener("DOMContentLoaded", function () {

  window.showPage = function(page) {
    const content = document.getElementById("content");

    const pages = {
      home: `
        <div class="welcome">
          <h2>Welcome to Adam MK Music Hub</h2>
          <p>One World • One Music Community</p>
        </div>
        <div class="section">
          <h3>🎵 Discover Music</h3>
          <p>Welcome to your global music community.</p>
        </div>
      `,

      music: `
        <div class="section">
          <h3>🎧 Music Library</h3>
          <p>Upload and listen to your music.</p>

          <label>Song Title</label>
          <input id="songTitle" type="text"
            placeholder="Enter song title">

          <label>Artist Name</label>
          <input id="artistName" type="text"
            placeholder="Enter artist name">

          <label>Select MP3 Song</label>
          <input id="songFile" type="file"
            accept="audio/*">

          <button class="action"
            onclick="addSong()">Add Song</button>

          <div id="songList"></div>
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
          <h3>About Adam MK Music Hub</h3>
          <p>Connecting artists and music lovers worldwide.</p>
        </div>
      `
    };

    content.innerHTML = pages[page] || pages.home;

    if (page === "music") {
      displaySongs();
    }

    window.scrollTo(0, 0);
  };

  window.addSong = function() {
    const title = document.getElementById("songTitle").value.trim();
    const artist = document.getElementById("artistName").value.trim();
    const file = document.getElementById("songFile").files[0];

    if (!title || !artist || !file) {
      alert("Please enter song title, artist name and select a song.");
      return;
    }

    const songs = JSON.parse(localStorage.getItem("adamSongs") || "[]");

    songs.push({
      title: title,
      artist: artist,
      fileName: file.name,
      audio: URL.createObjectURL(file)
    });

    localStorage.setItem("adamSongs", JSON.stringify(songs));

    alert("Song added successfully!");
    displaySongs();
  };

  window.displaySongs = function() {
    const list = document.getElementById("songList");
    if (!list) return;

    list.innerHTML = "<h3>Available Songs</h3>";

    const songs = JSON.parse(localStorage.getItem("adamSongs") || "[]");

    songs.forEach(function(song) {
      const item = document.createElement("div");
      item.className = "section";

      const heading = document.createElement("h3");
      heading.textContent = song.title;

      const artist = document.createElement("p");
      artist.textContent = "Artist: " + song.artist;

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = song.audio;

      item.append(heading, artist, audio);
      list.appendChild(item);
    });

    if (songs.length === 0) {
      list.innerHTML += "<p>No songs added yet.</p>";
    }
  };

});
