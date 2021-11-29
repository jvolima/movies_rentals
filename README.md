# Movie rental program

## Technologies used
- Node.js
- Typescript
- Yarn
- Express
- JWT
- Prisma
- Jest
- SQLite

## Functionalities

### Create users
**RF**
- Should be able to create an new user.

**RN**
- Should not be able to create users if email already exists.

### Authenticate users
**RF**
- Should be able to authenticate an user.

**RN**
- Should not be able to authenticate user if email or password is incorrect.

### Create movies
**RF**
- Should be able to add a new movie.

**RN**
- Should not be able to add a new movie if user is not admin.
- Should not be able to add a new movie if genre does not exists.

### Create genres
**RF** 
- Should be able to add a new genre.

**RN**
- Should not be able to add a new genre if user is not admin.

### List movies
**RF**
- Should be able to list all available movies.
- Should be able to list all available movies by the movie name.
- Should be able to list all available movies by the genre.

**RN**
- User doesn't need to be authenticated to see the list of available movies.

### Create rentals
**RF**
- Should be able to create a new rental

**RN**
- Should not be able to create a new rental if user is not authenticated.
- Should not be able to create a new rental if movie is not available.
- Should not be able to create a new rental if user have a rental in progress.

### List rentals
**RF**
- Should be able to list user's rentals

**RN**
- Should not be able to list the user's rentals if user isn't authenticated.

## Skills developed
- Creation of database diagram
- Business rule creation and functionalities
- User authentication
- Addiction injection with the tsyringe

## Diagram
![Diagrama do banco de dados](./movie_rental.png)