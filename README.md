# corona-live-api
API for Corona Live web

The data is fetched from https://covid19api.com/

## REST API

### GET api/countries

**Response**

* location - Name of the country/region
* latitude - Latitude of the location
* longitude - Longitude of the location
* confirmed - Total number of cases confirmed (including those who have recovered or died)
* dead - Total number of reported deaths
* recovered - Total number of patients that have recovered
* updated - Latest time the data was fetched (UTC)

### GET api/cities

**Response**

* location - Name of the city
* latitude - Latitude of the city
* longitude - Longitude of the city
* confirmed - Total number of cases confirmed (including those who have recovered or died)
* dead - Total number of reported deaths
* recovered - Total number of patients that have recovered
* updated - Latest time the data was fetched (UTC)
