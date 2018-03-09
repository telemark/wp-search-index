const striptags = require('striptags')

module.exports = post => {
  return {
    title: post && post.title ? post.title.rendered : '',
    description: post && post.excerpt ? striptags(post.excerpt.rendered) : '',
    url: post.link,
    content: post && post.content ? striptags(post.content.rendered) : ''
  }
}
