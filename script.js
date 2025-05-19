function toggleVideo() {
  const trailer = document.getElementById("trailer");
  const video = document.getElementById("trailerVideo");

  if (trailer.classList.contains("active")) {
    trailer.classList.remove("active");
    video.pause();
    video.currentTime = 0;
  } else {
    trailer.classList.add("active");
    video.play();
  }
}

function changebg(bg, title) {
    const banner = document.querySelector('.banner'); // Fix selector
    const contents = document.querySelectorAll('.content');

    // Update banner background
    banner.style.background = `url('${bg}') no-repeat center center`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Toggle content visibility
    contents.forEach(content => { // Fix typo: foreach → forEach
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
