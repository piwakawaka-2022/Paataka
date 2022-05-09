### Notes from Code review

Hello! Here are some notes from the code review.

### General notes
* Update your readme to include the name of the app, how to start it (if any api keys are needed, knex scripts etc.), and where to find the deployed version (if you decide to deploy it) Feel free to add more about the meaning behind the app, who made it etc. if you want.

### General tidying
* Remove commented out code from files in your main branch. Some files have a lot of commented out code, so please go through and remove any code you don't need.
* Remove unneccesary trailing commas

### Code suggestions
* Every promise (.then) should have a .catch.

#### Client side files

### /components

Comment.jsx
* Empty file - remove if you're not using it.

Comments.jsx
* Mostly all commented out code (ignore this and the above comment if you are yet to implement the functionality for comments)

Details.jsx
* Remove unneccessary import of Comments.jsx
* Change the name of the variable on line 23 - currently this variable and your state variable on line 14 are named the same. They are two different things so the names are a bit confusing. 

LandingPage.jsx
* Remove unneccessary import of getAllComments
* Fix indentation errors
* Format your ternary operator on line 23 so the '?' is on a new line
* Remove unneccessary space on line 27

Register.jsx
* confirm_password should be in camel case rather than snake case

### /reducers

auth.js
* Remove traling commas

#### Server side files

### /public

* Would be cleaner to have the images in their own images folder within your public folder


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
