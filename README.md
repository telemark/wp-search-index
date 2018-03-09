[![Build Status](https://travis-ci.org/telemark/wp-search-index.svg?branch=master)](https://travis-ci.org/telemark/wp-search-index)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/wp-search-index.svg)](https://greenkeeper.io/)

# wp-search-index

Module for indexing wp sites for our [search service](https://github.com/telemark/search-service)

## Config

Setup your environment in an .env file

```sh
API_URL=http://localhost/wp-json/wp/v2/posts
SEARCH_SERVICE=http://localhost:3000
SEARCH_INDEX=www
SEARCH_INDEX_TYPE=article
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
PAPERTRAIL_HOSTNAME=wp-search-index
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Usage

```sh
$ npx wp-search-index .env
```

This will start the indexing with the enironmental variables from .env

## Related

- [search-service](https://github.com/telemark/search-service) Search service with ElasticSearch

## License

[MIT](LICENSE)

![Robohash image of search-service](https://robots.kebabstudios.party/search-service.png "Robohash image of search-service")