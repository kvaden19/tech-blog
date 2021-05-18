# tech-blog

## TODOs

### Views / Controllers
- Homepage POST new comment
    - Add to homepage.handlebars View Comments and Post New Comment buttons w/event listeners
    - View Comments triggers (??) a "get all comments for this post ID sort by recent" query and displays them as cards under the post
    - Add New Comment triggers (??) a form to drop down with a comment field and Submit button
    - Submit event triggers (??) a "post new comment" query and then the above "get" query
- Sign up POST a new user
- Dashboard GET my blog posts
- Dashboard POST new blog post
- Dashboard PUT (edit) blog post
- Dashboard DELETE blog post

### Authentication & Session
- Log in authenticate user
- All links besides homepage lead to login
- Comment on homepage disabled if not logged in
- Set up Session for logged in user
- Idle for > 1 minute logs user out
- Logout button click logs user out

(6)