const axios = require("axios");
const URL = "https://www.example.com/data";
axios
  .get(URL)
  .then((result) => {
    result.data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    for (let i = 0; i < result.data.length; i++) {
      console.log("Name-" + result.data[i].name + ", Id-" + res.data[i].id);
    }
  })
  .catch((error) => {
    console.log(error);
  });
