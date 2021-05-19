function viewComments(event) {
    // Check if the element clicked was a View Comments button; if not return without doing anything
    let action = event.target.dataset.action;
    if (action !== 'view') return;

    // Get postID matching the View Comments button clicked
    let postID = console.log('Pushed View from ' + event.target.dataset.post);
    
    // Fetch your own route that gets all the comments
    const response = await fetch(URL, {
    });

    if (response.ok) {
        // displays them as cards under the post
    } else {
        // error handling
    }
}

function postComment() {
    // form to drop down with a comment field and Submit button
    // - Submit event triggers (??) a "post new comment" query and then the above "get" query
}

document.getElementById('post-container').addEventListener('click', viewComments);

//document.getElementById('post-comment').addEventListener('click', postComment);