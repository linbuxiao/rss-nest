import { RouteParams, RouterContext } from "https://deno.land/x/oak/mod.ts";

export function router(ctx: RouterContext<RouteParams, Record<string, any>>) {
  ctx.response.body = {
    "version":"https://jsonfeed.org/version/1",
    "title":"bret.io log",
    "home_page_url":"https://jsonfeed-to-rss.netlify.com",
    "feed_url":"https://jsonfeed-to-rss.netlify.com/snapshots/readme-feed.json",
    "description": "A simple summary that describes the podcast.  It can have a few sentences.\n\nIf there is more than one paragraph, it gets truncated in some contexts.",
    "next_url":"https://jsonfeed-to-rss.netlify.com/snapshots/2017.json",
    "icon":"https://jsonfeed-to-rss.netlify.com/icon-512x512.png",
    "author":{
       "name":"Bret Comnes",
       "url":"https://bret.io",
       "avatar":"https://gravatar.com/avatar/8d8b82740cb7ca994449cccd1dfdef5f?size=512"
    },
    "_itunes":{
       "about":"https://github.com/bcomnes/jsonfeed-to-rss#itunes",
       "owner": {
         "email": "bcomnes@gmail.com"
       },
       "image": "https://jsonfeed-to-rss.netlify.com/icon-3000x3000.png",
       "category": "Sports & Recreation",
       "subcategory": "Outdoor"
    },
    "items":[
       {
          "date_published":"2018-04-07T20:48:02.000Z",
          "content_html":"<h1>Curam ad aut hactenus dentes cedere vigil</h1>\n<h2>Non Clitorio vertitur cavatur</h2>\n<p>Lorem markdownum edendi, non ad clamant solacia septem ambierantque. Scelus te\nmihi arcum fore nitidam; in dixit de simul.</p>",
          "url":"https://jsonfeed-to-rss.netlify.com/a-url-to-a-post",
          "id":"https://jsonfeed-to-rss.netlify.com/a-url-to-a-post-2018-04-07T20:48:02.000Z",
          "image": "https://jsonfeed-to-rss.netlify.com/a-url-to-a-post/episode-3000x3000.png",
          "_itunes": {
            "episode": 12
          },
          "attachments":[
             {
                "url":"https://jsonfeed-to-rss.netlify.com/a-url-to-a-post/attatchment.mp4",
                "mime_type":"audio/mpeg",
                "title":"Hey this is a podcast episode",
                "duration_in_seconds":12345,
                "size_in_bytes":1234
             }
          ]
       }
    ]
  }
}