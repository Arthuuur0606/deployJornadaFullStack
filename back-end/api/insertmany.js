import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { database } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});
// const newSongsArray = songsArray.map((currentSongObj) => {
//   const newSongObj = { ...currentSongObj };
//   delete newSongObj.id;

//   return newSongObj;
// });

const responseArtists = await database
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseArtists);
