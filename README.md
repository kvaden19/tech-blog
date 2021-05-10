# tech-blog

## TODOs

### Setup
- Create a package.json
- Set up an express server

### Models
- Create a database
- Create Models
    - User (username, password)
        - Hook to bcrypt password
    - Post (title, body, author, date created)
    - Comment (comment, author, date created)
- Create associations

### Views
- Mock ups
    - Sign up / Login
    - Homepage w/blog posts + comment option + nav bar
    - Dashboard
- Bootstrap all of the above
- Translate into handlebars framework

### Controllers
- Homepage GET all blog posts
- Sign up POST a new user
- Log in authenticate user (?)
- Homepage POST new comment
- Dashboard GET my blog posts
- Dashboard POST new blog post
- Dashboard PUT (edit) blog post
- Dashboard DELETE blog post
(*NOTE* reference note-taker app)

### Authentication & Session
- All links besides homepage lead to login
- Comment on homepage disabled if not logged in
- Set up Session for logged in user
- Idle for > 1 minute logs user out
- Logout button click logs user out