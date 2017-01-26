'user strict'
var contentful = require('contentful')

var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'developer_bookshelf',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '0b7f6x59a0'
})
console.log('Fetching entries ...')
client.getEntries()
  .then((response) => {
    console.log('done.\n')
    console.log(response.items[0])
  })
  .catch((error) => {
    console.log('error occured')
    console.log(error)
  })
