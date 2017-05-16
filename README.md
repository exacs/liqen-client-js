# JS Client for Liqen Core API

This is the official JavaScript API Client for Liqen Core.

```sh
npm install liqen
```

## Create a Client instance

The module exposes only one function. Call it providing an access token. Leave it blank to connect as annonymous person.

```js
import liqen from 'liqen'

const client = liqen('MY-ACCESS-TOKEN')
```

You will get a `client` object with all the methods ready to use.

# Examples

You can find examples in the `examples` directory. To run them, use (replace `examples/basicExample.js` with the appropiate file:

```sh
babel-node --presets env examples/basicExample.js
```

# Contribute

1. `git clone` or fork the repo
2. `npm install` the dependencies
3. Write code
4. `npm test` the code before submitting it
