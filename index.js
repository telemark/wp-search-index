#!/usr/bin/env node
const env = process.argv[2]

if (env) {
  require('dotenv').config(env)
}

const config = require('./config')
const getPosts = require('./lib/get-posts')
const repackPosts = require('./lib/repack-post')
const prepareForIndex = require('./lib/prepare-for-index')
const addDocument = require('./lib/add-document')

async function doIndexing () {
  const data = await getPosts(config.API_URL)
  const documents = data.map(repackPosts).map(prepareForIndex).map(addDocument)
  await Promise.all(documents).then(() => {
    console.log('Finished')
  }).catch(console.error)
}

doIndexing()
