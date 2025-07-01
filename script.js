function showLoading() {
  const loader = document.getElementById("loader");
  const letter = document.getElementById("letterBox");

  // Show loader
  loader.classList.add("show");

  // Wait for 2 seconds, then show the letter and hide the loader
  setTimeout(() => {
    loader.classList.remove("show");
    letter.classList.add("show");
  }, 2000);
}

function goToNextPage() {
 window.location.href = "picture.html"; // Replace with your actual URL
}
