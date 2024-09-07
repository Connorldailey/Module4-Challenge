// Create a variable that selects the form element
const formEl = document.querySelector('form');

// Create a function that handles the form submission. 
// Grab the form data and store it in local storage, then redirect to 
// the blog page using the `redirectPage` function. If the form is submitted 
// with missing data, display an error message to the user.
const submitForm = function(event) {

    // Prevent the default action on form submission
    event.preventDefault();

    // Check if any of the fields are empty
    if (!formEl.checkValidity()) {
        formEl.querySelector('#error').textContent = "Please complete the form.";
        return;
    }

    // Create an object for the blog post
    const post = {
        username: formEl.querySelector('#username').value,
        title: formEl.querySelector('#title').value,
        content: formEl.querySelector('#content').value,
    }

    // Store the blog post object in local storage
    const postsArray = JSON.parse(localStorage.getItem('blogPosts')) || [];
    postsArray.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(postsArray));

    // Redirect to the blog page after a valid submission
    redirectPage("blog.html");

}

// Add an event listener to the form on submit. 
formEl.querySelector('#submit').addEventListener('click', submitForm);