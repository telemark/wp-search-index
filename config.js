module.exports = {
  API_URL: process.env.API_URL || 'http://localhost/wp-json/wp/v2/posts',
  SEARCH_SERVICE: process.env.SEARCH_SERVICE || 'http://localhost:3000',
  SEARCH_INDEX: process.env.SEARCH_INDEX || 'www',
  SEARCH_INDEX_TYPE: process.env.SEARCH_INDEX_TYPE || 'article',
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'wp-search-index',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
