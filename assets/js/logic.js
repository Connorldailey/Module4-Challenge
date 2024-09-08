// Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleEl = document.querySelector('#toggle');

toggleEl.addEventListener('click', function() {

  const bodyEl = document.querySelector('body');
  const lightMode = localStorage.getItem('lightMode');

  if (lightMode === 'dark') {
    localStorage.setItem('lightMode', 'light');
    bodyEl.setAttribute('class', 'light');
    document.documentElement.style.setProperty('--circle-color', '#ffb100');
  } else {
    localStorage.setItem('lightMode', 'dark');
    bodyEl.setAttribute('class', 'dark');
    document.documentElement.style.setProperty('--circle-color', '#563d7c');
  }

})

// Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function() {
  const storage = localStorage.getItem('blogPosts');
  if (storage && storage.length > 0) {
    return JSON.parse(storage);
  } else {
    return [];
  }
}

// Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function(blogPost) {
  
  // Get the existing blog posts from local storage
  const storedPosts = readLocalStorage();

  // Add the new blog post to the array of posts
  storedPosts.push(blogPost);

  // Store the updated array in local storage
  localStorage.setItem('blogPosts', JSON.stringify(storedPosts));

}

// Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
