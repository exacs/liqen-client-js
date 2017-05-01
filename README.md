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
