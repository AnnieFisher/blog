# blog

This is quick project I created to keep up with my skills. This is a simple blog. I used SpringMVC framework with JPA to 
persist the mySql database. The database only has one table, but I am going to refactor it into two tables to include a users 
table. The table will have a ManyToOne relationship (many posts,one user). For a secure login I will use JSON webTokenGenerator,
secretKeyGenerator, and bcryptPasswordEncoder. I used angularJS, html5/css, and bootsrap for my frontend. I consumed an api
that generates random quotes. Every time the page is visited a different quote is pulled from the api and pushed to the view.
At the moment anyone can add, delete, and update any blog. After I refactor to add the users table, it will have only view 
access until logged in. 

Future additions: 
- adding user table with secure login
- adding a community view 
- adding tags
- adding templates the user can pick from for their personal blog.
