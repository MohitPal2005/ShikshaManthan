function setProgress(percent) {
  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");

  if (bar) bar.style.width = percent + "%";
  if (text) text.innerText = percent + "%";
}