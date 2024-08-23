const express = require('express');
const ytdl = require("@distube/ytdl-core");
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/download', async (req, res) => {
  let name;
  let url = req.query.url;
  ytdl.getBasicInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ").then(info => {
    const title = info.title;
    ytdl(url).pipe(require("fs").createWriteStream(`${title}.mp4`));
    res.send("Downloading")
  })
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
