import type { NextApiRequest, NextApiResponse } from 'next'
var twitterVideo = require('twitter-video')
import Twit from 'twit'
const fs = require('fs')

const oauth = {
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
}

var T = new Twit({
  ...oauth,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

type Data = {
  url: string
}

type RequestData = {
  videoPath: string
  tweetMessage: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body) as RequestData
  const videoPathSplitted = body.videoPath.split("/")
  const id = videoPathSplitted[videoPathSplitted.length - 2]
  const videoRes = await fetch(body.videoPath);
  const fileStream = fs.createWriteStream(`${id}.mp4`);
  await new Promise((resolve, reject) => {
      videoRes.body.pipe(fileStream);
      videoRes.body.on("error", reject);
      fileStream.on("finish", resolve);
  });
  twitterVideo.fromFile(`${id}.mp4`, oauth, function (err, media_id) {
    fs.unlink(`${id}.mp4`, () => { })
    var params = { status: body.tweetMessage, media_ids: [media_id] }
    T.post('statuses/update', params, function (err, data, response) {
      res.status(200).json({url: `https://twitter.com/HackAnton1/status/${data.id_str}`})
    })
  })
}
