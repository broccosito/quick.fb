const credential = require("./credential.json");

// quick-firebase
const Database = require("../index");
const db = new Database("", credential);

const player = "enjoyablee";

db.set(`players/${player}/items`, ["Helmet"]).then(() => {
  // => ["Helmet"]
  db.push(`players/${player}/items`, "Sword").then((result) => {
    console.log(result); // => ["Helmet", "Sword"]
  });
});
