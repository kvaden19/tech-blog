# tech-blog

## TODOs

### Views / Controllers I
- Homepage GET comments
    - From event handler, call the route using fetch, dynamically make a new Boostrap card for each comment (public/js/comments.js)
- Homepage POST new comment
    - From event handler, show a Bootstrap form, grab the user's input, and call the route using fetch

### Authentication & Session
- Log in authenticate user
- All links besides homepage lead to login
- Comment on homepage disabled if not logged in
- Set up Session for logged in user
- Idle for > 1 minute logs user out
- Logout button click logs user out

### Views / Controllers II 
- Sign up POST a new user
- Dashboard GET my blog posts
- Dashboard POST new blog post
- Dashboard PUT (edit) blog post
- Dashboard DELETE blog post

### Tweaks
- Need a format.date utility
- API routes need error handling

(6)