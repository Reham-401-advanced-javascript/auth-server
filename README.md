# LAB - Class 10:  OAuth Server
### Author: Reham Omar AL-Sobh

Restricting access to information online is one of the foundational paradigms of the internet. Whether it's your online bank account, facebook profile, or a one-time viewing of a document to sign, getting "logged in" to a website is an everday activity for almost every internet user.

In this app ,I will create an account and securely authenticate a user using their chosen username and password.

 ## Links and Resources

 - [submission PR/lab-11 ](https://github.com/Reham-401-advanced-javascript/auth-server/pull/2)
 - [submission PR/lab-12 ](https://github.com/Reham-401-advanced-javascript/auth-server/pull/4)

 - [ci/cd ](https://github.com/Reham-401-advanced-javascript/auth-server/pull/2/checks?check_run_id=748848970)
 - [heroku ](https://reham-auth-server.herokuapp.com/docs)


 ## Documentaion

 In Phase 2, we will need to manage 3 primary actions that must happen in sequence

 1. Authenticate users using OAuth
 2. Following authentication manage the user account
 3. Provide an access token

 - Create a POST route for `/signup`
 - Create a POST route for `/signin`
 - Create a GET route for `/users`
 - Create a GET route for `/oauth`
 - use `/docs`to go to index.html file
 
 ## Setup

 `npm i jest eslint dotenv express cors morgan  mongoose supergoose base-64 jsonwebtoken bcryptjs superagent`

 #### .env requirements (where applicable)
  i.e.

  `PORT - Port Number` :3000
  `MONGODB_URI` - URL to the running mongo instance/db
  `SECRET`
  `CLIENT_ID`
  `CLIENT_SECRET`
  `API_SERVER`

  ## How to initialize/run your application (where applicable)
   * `npm test`
   * `nodemon`

  ## Tests

  #### How do you run tests?
  ` npm test` / `npm run lint`/`node index.js `
  #### Any tests of note?
   `jest --verbose --coverage`


## UML

[UML Diagrame ](assest/lab-11.jpg)