### Notes from Code review

Hello! Here are some notes from the code review.

### General notes
* Update your readme to include the name of the app, how to start it (if any api keys are needed, knex scripts etc.), and where to find the deployed version (if you decide to deploy it) Feel free to add more about the meaning behind the app, who made it etc. if you want.

### General tidying


### Code suggestions
* Every promise (.then) should have a .catch.

#### Client side files

### /components

### /reducers

#### Server side files

### /public



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
