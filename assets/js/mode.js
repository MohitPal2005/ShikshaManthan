function setTrialMode() {
  sessionStorage.clear();
  sessionStorage.setItem("mode", "trial");
}

function setUserMode() {
  localStorage.setItem("mode", "user");
}

function getMode() {
  return sessionStorage.getItem("mode") || localStorage.getItem("mode");
}

function clearMode() {
  sessionStorage.removeItem("mode");
  localStorage.removeItem("mode");
}