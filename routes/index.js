
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.set('Content-Type', 'text/plain');
  res.send('A United States Zip code lookup service.\n\nUsage: call GET /v1/zip/:zip');
};
