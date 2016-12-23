# blog
This is a simple blog project I created to keep up with my skills. I used SpringMVC framework with JPA to 
persist the mySql database. The database currently has two tables, posts and users. It has a ManyToOne relationship (many posts,one user). For a secure login I used JSON webTokenGenerator, secretKeyGenerator, and bcryptPasswordEncoder. I used angularJS, html5/css, and bootstrap for my frontend. I consumed an api that generates random quotes. Every time the page is visited a different quote is pulled from the api and pushed to the view.
There is a general access to the blog before logging in. All posts are populated within this view. The user can click on any post to view it separately. After registering and logging in, the user can create their own posts. Once the owner of a post, they can then modify of delete it. I also have all posts populating the home view once the user is logged in. I am going to add a feature that allows selection of populating just the users posts.


Future additions: 
- adding tags
- adding comments
- adding templates the user can pick from for their personal blog.
