# Registration-form

This is a simple registration form for understanding these subjects (database, validation, Errors, Testing, hash)

## so :

You will find a registration form includes :

- Username
- email
- password
- verify password

The information will be stored in the database after using the hashing method to hash the password for security. **BUT BEFORE THAT** I have checked the validation.

## Validation:

in the validation part [Check it out]('src/helper/validation.js') :

- Username must be longer than 2 characters and required
- password must be longer than 6 characters and required
  must include 1 uppercase and 1 lowercase character
- email must be valid and required

## Error Handling:

in the project you will see how it handled as these following [Check it out]('src/controllers/errors.js'):

- If validation fails, return a message to the user, with status code 400
- if the user tries to use an endpoint that doesn’t exist return a 404 page.
- If something goes wrong in the server to return a 500 page.

## Testing:

Test the endpoint for the following scenarios [You will find it here]('./tests'):

- The user uses a get request
- The User signs up successfully
- The user uses invalid input (error 400)
- The user receives error 404
- The user receives error 500, I couldn't test this one.

# Using myApp

1. clone this Repo
1. npm init - y
1. npm i
1. Create your local database through these commands at the terminal

```css
CREATE DATABASE (name of database);
CREATE USER (name of the user) WITH SUPERUSER PASSWORD (put password);
GRANT ALL PRIVILEGES ON DATABASE <database name here> TO <desired username entered previously>;
```

5. Create .env file and add the DATABASE_URL
6. npm start
7. npm run test

# ThankYou @karmelyoei
