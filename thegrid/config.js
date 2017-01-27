module.exports = function() {
  switch(process.env.NODE_ENV){
    case 'dev':
      return {
        'port'                    : process.env.PORT || 8080,
        'user'                    : process.env.ECHOBASE_USER,
        'pass'                    : process.env.ECHOBASE_PASS,
        'secret'                  : process.env.ECHOBASE_SECRET,
        'database'                : process.env.THEGRID_DATABASE || 'mongodb://localhost/thegrid',
        'twitter_consumer_key'    : process.env.TWITTER_CONSUMER_KEY,
        'twitter_consumer_secret' : process.env.TWITTER_CONSUMER_SECRET,
        'twitter_token'           : process.env.TWITTER_TOKEN,
        'twitter_token_secret'    : process.env.TWITTER_TOKEN_SECRET
      };
    case 'prod':
      return {
        'port'                    : process.env.PORT || 8080,
        'user'                    : process.env.ECHOBASE_USER,
        'pass'                    : process.env.ECHOBASE_PASS,
        'secret'                  : process.env.ECHOBASE_SECRET,
        'database'                : process.env.THEGRID_DATABASE || 'mongodb://localhost/thegrid',
        'twitter_consumer_key'    : process.env.TWITTER_CONSUMER_KEY,
        'twitter_consumer_secret' : process.env.TWITTER_CONSUMER_SECRET,
        'twitter_token'           : process.env.TWITTER_TOKEN,
        'twitter_token_secret'    : process.env.TWITTER_TOKEN_SECRET
      };
  }
};
