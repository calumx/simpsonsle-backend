# Simpsonsle

Simpsonsle is a Wordle-clone guessing game. Name the golden-era Simpsons episode (S3-S9) from a gradually revealed image. You are viewing the README for the backend server.

## Installation

Create a .env file at the project root with your [MongoDB Atlas Connection String URI](https://www.mongodb.com/docs/manual/reference/connection-string/), the port on which you intend to run the server, and the name of the MongoDB collection in which you store the current episode.

```
ATLAS_URI=your URI here
PORT=5001
COLLECTION_NAME=the_episode_you_are_using
```

Then

```
npm install
npm start
OR
npx nodemon server.js
```
