'use strict'

const contentful = require('contentful')

const SPACE_ID = 'developer_bookshelf'
const ACCESS_TOKEN = '0b7f6x59a0'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

console.log('\x1b[32m Fetching entries ... \x1b[32m')
client.getEntries()
  .then((response) => {
    console.log('\x1b[32m Here are the first 100 entry IDs of your space .\n')
    console.log(response.items.map((item) => '\x1b[32m \t> ' + item.sys.id).join('\n'))
    console.log('\n \x1b[32m Want to go further? Feel free to check out this guide: \x1b[34m\x1b[4mhttps://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/')
  })
  .catch((error) => {
    console.log('\x1b[31merror occured')
    console.log(error)
  })
