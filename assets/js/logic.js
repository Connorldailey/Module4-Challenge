// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleEl = document.querySelector('#toggle');
toggleEl.addEventListener('click', function() {
  const bodyEl = document.querySelector('body');
  const lightMode = localStorage.getItem('lightMode');
  if (lightMode === 'dark') {
    localStorage.setItem('lightMode', 'light');
    bodyEl.setAttribute('class', 'light');
  } else {
    localStorage.setItem('lightMode', 'dark');
    bodyEl.setAttribute('class', 'dark');
  }
})

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function() {
  localStorage.getItem('lightMode');
  localStorage.getItem('blogPosts');
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
