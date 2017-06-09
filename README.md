# JS Client for Liqen Core API

This is the official JavaScript API Client for Liqen Core.

Install using *yarn* or *npm*.

```sh
yarn add liqen
```

```sh
npm install liqen --save
```

## Create a Client instance

The module exposes only one function (and error codes). Call it providing an access token. Leave it blank to connect as annonymous person.

```js
import liqen from 'liqen'

const client = liqen('MY-ACCESS-TOKEN')
```

You will get a `client` object with all the methods ready to use.

The package exports the function as a ES6 default export. If you use CommonJS, make sure to `require` the default:

```js
const liqen = require('liqen').default

const client = liqen('MY-ACCESS-TOKEN')
```


## Using the client

Once you have created the Client instance, use it to make actual calls to the Liqen API. For example to retrieve the annotation 3:

```js
client.annotations.show(3);
```

It will return a promise that fulfilled with the annotation.

## Naming convention

All the methods in the client has the following convention: `client.RESOURCE_NAME.METHOD_NAME`, where `RESOURCE_NAME` is the name of a resource, for example, `annotations` or `articles`. Every `METHOD_NAME` is paired with a HTTP request:

- `client.resource.index()` is equivalent to `GET /resource`
- `client.resource.show(id)` is equivalent to `GET /resource/:id`
- `client.resource.create()` is equivalent to `POST /resource/`
- `client.resource.update(id)` is equivalent to `PUT /resource/:id`
- `client.resource.delete(id)` is equivalent to `DELETE /resource/:id`

### Optional parameters

The methods `index` and `show` accepts one optional parameter (type object) which are converted to HTTP query params. For example:

- `client.annotations.index({article_id: 3})` is equivalent to `GET /annotations?article_id=3` for getting all the annotations refering to a single article

The methods `create` and `update` accepts one parameter (type object) which will be converted into a JSON object and sent in the request as a body.

For example, you can create an annotation this way:

```js
client.annotations.create({
    article_id: 3,
    target: {
        type: 'FragmentSelector',
        value: 'id1'
    },
    tags: [1]
})
```

# Contribute

1. `git clone` or fork the repo
2. `npm install` the dependencies
3. Write code
4. `npm test` the code before submitting it


## Examples

You can find examples in the `examples` directory. To run them, use (replace `examples/basicExample.js` with the appropiate file:

```sh
babel-node --presets env examples/basicExample.js
```
