let x = 0;

const arr = [
  "https://www.slashfilm.com/img/gallery/the-15-best-batman-comics-you-need-to-read/intro-1660174737.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Avengers-Endgame-Thanos-and-the-Avengers.jpg",
  "https://i.pinimg.com/736x/5a/2e/cd/5a2ecd3370959888c7da750a13eb796a.jpg",
  "https://c4.wallpaperflare.com/wallpaper/572/47/710/zipper-ragnarok-lightning-warrior-gladiator-hd-wallpaper-preview.jpg"

];

function previous() {
  x = (x - 1 + arr.length) % arr.length;
  updateImage();
}

function next() {
  x = (x + 1) % arr.length;
  updateImage();
}

function updateImage() {
  document.getElementById("review-image").src = arr[x];
}

// Initial load
updateImage();
