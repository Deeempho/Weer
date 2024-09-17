function submitSearch(event) {
  event.preventDefault();
  let searchSection = document.querySelector("#search-section-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchSection.value;
}

let searchButtonElement = document.querySelector("#search-section");
searchButtonElement.addEventListener("submit", submitSearch);
