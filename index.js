#!/usr/bin/env node
const path = require('path')
const logger = require('./lib/logger')
const env = process.argv[2]

if (env) {
  const envFilePath = path.resolve(process.cwd(), env)
  logger('info', ['index', 'loading environment', env])
  require('dotenv').config({ path: envFilePath })
} else {
  logger('warn', ['index', 'no environment loaded'])
}

const getPosts = require('./lib/get-posts')
const repackPosts = require('./lib/repack-post')
const prepareForIndex = require('./lib/prepare-for-index')
const addDocument = require('./lib/add-document')
const deleteIndex = require('./lib/delete-index')

async function doIndexing () {
  const data = await getPosts(process.env.API_URL)
  await deleteIndex()
  const documents = data.map(repackPosts).map(prepareForIndex).map(addDocument)
  await Promise.all(documents).then(() => {
    console.log('Finished')
  }).catch(console.error)
}

doIndexing()
