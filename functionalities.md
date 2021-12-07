## Functionalities

### Create users
**RF**
- [x] Should be able to create an new user.

**RN**
- [x] Should not be able to create users if email already exists.

### Authenticate users
**RF**
- [x] Should be able to authenticate an user.

**RN**
- [x] Should not be able to authenticate user if email or password is incorrect.

### Create movies
**RF**
- [x] Should be able to add a new movie.

**RN**
- [x] Should not be able to add a new movie if user is not admin.
- [x] Should not be able to add a new movie if genre does not exists.

### List movies
**RF**
- [] Should be able to list all available movies.
- [] Should be able to list all available movies by the movie name.
- [] Should be able to list all available movies by the genre.

**RN**
- [] User doesn't need to be authenticated to see the list of available movies.

### Create genres
**RF** 
- [x] Should be able to add a new genre.

**RN**
- [x] Should not be able to add a new genre if user is not admin.
- [x] Should not be able to add a new genre if name already exists.

### List genres
**RF** 
- [x] Should be able to list all genres.

**RN**
- [x] User doesn't need to be authenticated to see the list of genres.

### Create rentals
**RF**
- [] Should be able to create a new rental

**RN**
- [] Should not be able to create a new rental if user is not authenticated.
- [] Should not be able to create a new rental if movie is not available.
- [] Should not be able to create a new rental if user have a rental in progress.

### List rentals
**RF**
- [] Should be able to list user's rentals

**RN**
- [] Should not be able to list the user's rentals if user isn't authenticated.