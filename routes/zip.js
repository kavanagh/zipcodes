var d3 = require('d3')
  , path = require('path')
  , fs = require('fs');

var data = {};

exports.init = function() {
  var rows = d3.csv.parse(fs.readFileSync(path.join(__dirname, '../public/data/zcta_county_rel_10.csv')).toString(), function(d) {
    return data[d.ZCTA5] = {
      zip_code: d.ZCTA5,
      state: d.STATE,
      county: d.COUNTY,
      fips_code: (d.STATE.toString() || '') + (d.COUNTY.toString() || '')
    };
  });
  console.log('Loaded %s rows from CSV file', rows.length);
};

exports.get = function (req, res) {
  var zipcode;

  if (!(zipcode = data[req.params.zip.toString()])) {
    res.send(404);
    return;
  }

  // aggressive caching
  res.set({
    'Cache-Control': 'public, max-age=31536000'
  });

  res.jsonp(zipcode);
};
