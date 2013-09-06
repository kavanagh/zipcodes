zipcodes
========

A tiny zip code lookup service.

[Demo](http://zipcodelookup.herokuapp.com/v1/zip/90210)

## Usage

**GET `/v1/zip/:zipcode`:** Look up details for a given zip code.

Example Response for the zipcode '90210'.

```json
{
  "zip_code": "90210",
  "state": "06",
  "county": "037",
  "fips_code": "06037"
}
```

* `zip_code` is the zip code you requested
* `state` is the [FIPS numeric state code](http://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code)
* `county` is the county part of the FIPS code 
* `fips_code` is full the [FIPS 6-4 County code](http://en.wikipedia.org/wiki/FIPS_county_code)

# Installation

Written in node. Deploys to heroku.

```bash
$ clone https://github.com/kavanagh/zipcodes.git
$ cd zipcodes
$ heroku create
$ push heroku master
```
