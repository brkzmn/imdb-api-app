# Getting Started
This SPA allows you searching by movie name using version 3 of The Movie Database (TMDB) API and getting detailed information about the movie as a result of the search. In addition, using the same api, you can watch the trailer on the page as embed by pulling it from YouTube. Also, Materialize is used as framework for some features.

You can take a look my SPA on here : https://brkzmn.github.io/imdb-api-app/

# Structure

Let's run through the folders:

```
public
src
└── pages
└── views
└── app.js
└── constants.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all JavaScript code
 - `pages` this folder contains the functions that handle user interactions. 
 - `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back.
- `app.js` this file is initialisation code.

# Features

- User can search movies by movie name
- User can be able to see the poster, the plot and the genres of the movie
- Loading is visible while data grabbing via fetch
- If an error occurs, the app shows the error
- User can watch the trailer of the movie
