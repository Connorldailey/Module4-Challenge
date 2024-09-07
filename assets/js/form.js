// Create a variable that selects the form element
const formEl = document.querySelector('form');

// Create a function that handles the form submission. 
// Grab the form data and store it in local storage, then redirect to 
// the blog page using the `redirectPage` function. If the form is submitted 
// with missing data, display an error message to the user.
const submitForm = function(event) {

    // Prevent the default action on form submission
    event.preventDefault();

    // Get form data
    const usernameField = formEl.querySelector('#username').value;
    const titleField = formEl.querySelector('#title').value;
    const contentField = formEl.querySelector('#content').value;

    // Check if any of the fields are empty
    if (!usernameField || !titleField || !contentField) {
        formEl.querySelector('#error').textContent = "Please complete the form.";
        return;
    }

    // Create an object for the blog post
    const blogPost = {
        username: usernameField,
        title: titleField,
        content: contentField,
    }

    storeLocalStorage(blogPost);

    // Redirect to the blog page after a valid submission
    redirectPage("blog.html");

}

// Add an event listener to the form on submit. 
formEl.addEventListener('submit', submitForm);