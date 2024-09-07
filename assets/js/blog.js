// Create a variable that selects the main element and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backEl = document.querySelector('#back');

// Create a function that builds an blog post element and appends it to the DOM
const renderPost = function(blogPost) {
    // Create an article element to store the blog post data
    const articleEl = document.createElement('article');
    // Append blog title to the article element
    const titleEl = document.createElement('h2');
    titleEl.textContent = blogPost.title;
    articleEl.appendChild(titleEl);
    // Append post content to the article element
    const contentEl = document.createElement('blockquote');
    contentEl.textContent = blogPost.content;
    articleEl.appendChild(contentEl);
    // Append username to the article element
    const usernameEl = document.createElement('p');
    usernameEl.textContent = `Posted by: ${blogPost.username}`;
    articleEl.appendChild(usernameEl);
    // Append the article element to the main section
    mainEl.appendChild(articleEl);
}

// Create a function that handles the case where there are no blog posts to display
const noPosts = function() {
    const errorEl = document.createElement('p');
    errorEl.textContent = "No blog posts yet...";
    mainEl.appendChild(errorEl);
}

// Create a function that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts) {
        for (post of blogPosts) {
            renderPost(post);
        }
    } else {
        noPosts();
    }
}

// Call the `renderBlogList` function
renderBlogList();

// Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener('click', function() {
    redirectPage("index.html");
});