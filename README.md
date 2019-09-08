Use `yarn next dev` or `yarn dev` commands to run the app locally.
Use `yarn build && yarn start` comman to run in production mode.

## getInitialProps()
We can use `getInitialProps()` only inside pages, it's part of NextJS
The `fetch` method doesn't exist in NextJS, we need to add library `isomorphic-fetch`

    yarn add isomorphic-fetch

## Link component
It has to be imported from 'next/link'
To use it, we need to include href as an attribute, and include an <a> tag to make it work.
When you click on the link, NextJS will call the part of js needed to render that new page. Not all the dependencies again.

## Prefetch
The method prefetch doesn't preload getInitialProps, only the payload (HTML, CSS, JS)
The method only workd in PRODUCTION, not in development

## Promise.all()

To make several request at the same time.

## Head component

Here we can add all the things related to the <head> of a regular HTML
You can include things like title and metadata.

## Error component

Next help us to handle the server error, only passing the statusCode as an attribute
The `res` prop tell us the status that server replied
