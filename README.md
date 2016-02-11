# aspect-fit

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Returns scale and dimensions of a rectagle that will fit a specific area.

See [aspect-fill](http://github.com/maxtherocket/aspect-fill) for a **fill** calculation

## Installation

```
npm i aspect-fit
```

## Usage

```js
var fit = require("aspect-fit")
// fit(areaWidth, areaHeight, parentWidth, parentHeight);
var fitResult = fill(400, 200, 800, 400);
// fitResult == {scale:2, width:800, height:400}
```

[![NPM](https://nodei.co/npm/aspect-fit.png)](https://www.npmjs.com/package/aspect-fit)

## License

MIT, see [LICENSE.md](http://github.com/maxtherocket/aspect-fit/blob/master/LICENSE.md) for details.
