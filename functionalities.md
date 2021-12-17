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
- [x] Should be able to create a new rental

**RN**
- [x] Should not be able to create a new rental if user is not authenticated.
- [x] Should not be able to create a new rental if movie is not available.
- [x] Should not be able to create a new rental if user have a rental in progress.
- [x] Should not be able to create a new rental if expected_return_date is before the date  

### Devolution rental
**RF**
- [x] Should be able to devolute a open rental

**RN**
- [x] Should not be able to devolute a rental if user is not authenticated
- [x] If user devolute a rental in less than one day, the daily has to be changed to one day

### List rentals
**RF**
- [x] Should be able to list user's rentals

**RN**
- [x] Should not be able to list the user's rentals if user isn't authenticated.