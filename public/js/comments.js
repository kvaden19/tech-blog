async function viewComments(event) {
    // Check if the element clicked was a View Comments button; if not return without doing anything
    let action = event.target.dataset.action;
    if (action !== 'view') return;

    // Get postID matching the View Comments button clicked
    let post_id = event.target.dataset.post;
    
    // Fetch your own route that gets all the comments
    let response = await fetch(`/api/comments/${post_id}`, {
        method: 'GET',
        body: JSON.stringify(),
        headers: { 'Content-Type': 'application/json'}
    });

    let results = await response.json();
    if (response.ok) {
        if (results.length === 0) { return; } // if there are no comments, exit the function
        let postContainer = document.getElementsByClassName('post-container')[0];
        // Add each response comment to a smaller card, appended to post-container
        for (i of results) {
            let commentHTML = `<p> ${i.comment}</p>`;
            // `<div class="card text-dark">
            //     <div class="card-body text-dark">
            //     <p> ${i.comment}</p>
            //     </div>
            // </div>`;
            postContainer.append(commentHTML);
            // TODO: Why does this render with HTML tags? 
            // Should I not be trying to combine template views and script-generated HTML?
            // Instead should I send the array of comments to a different view?
            // document.location.replace('/post{:id}') and THAT route renders a full view of the post and comments
        }
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