# LAB - Class 10: auth-server
### Author: Reham Omar AL-Sobh

Restricting access to information online is one of the foundational paradigms of the internet. Whether it's your online bank account, facebook profile, or a one-time viewing of a document to sign, getting "logged in" to a website is an everday activity for almost every internet user.

In this app ,I will create an account and securely authenticate a user using their chosen username and password.

 ## Links and Resources
 - [submission PR/lab-11](https://github.com/Reham-401-advanced-javascript/auth-server/pull/2)
 - [ci/cd](https://github.com/Reham-401-advanced-javascript/auth-server/pull/2/checks?check_run_id=748848970)
 
 ## Documentaion

 - Create a single router module that will work for any data model, rather than having separate router modules for every data module.
 - Create a single “mongo” collection class that every data model can extend from, keeping the CRUD logic for our models  very DRY
 
 ## Setup

 `npm i jest eslint dotenv express cors morgan  mongoose supergoose base-64 jsonwebtoken bcryptjs`

 #### .env requirements (where applicable)
  i.e.

  `PORT - Port Number` :3000
  `MONGODB_URI` - URL to the running mongo instance/db
  `SECRET`

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