{
    host: "api.twitter.com",
    path: "1.1/status/user_timeline.json?screen_name=theonion&tweet_mode=ext"
    //tweet_mode extende is for having 280 characters instead of 140
    headers: {
        authorization: `Bearer ${token}`
        // we will get an array of TWEETS
        // full_text --> this is the text with the tweet
        // entities: { --> includes the extra info in the tweet, like urls
        //  urls:
        // }
        // transfor each tweet to a new object, might be url or not, we have to take characters
        // filter out the tweets that dont have a url, becuase we need one with url for the ticker
        // we cant use twitt with more than one url
    }
}

tweets = tweets.filter(
    item => // return true, if has one url, and keep it, it not (more or none) return false and dont keep it
).map(item => return { text: item.full_text,
    href: item.entities.urls[0].url}) // item function result will replace every element of the original array
