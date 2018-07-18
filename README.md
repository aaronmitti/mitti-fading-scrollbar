# Mitti Fading Scrollbar (fork of Hyper Fading Scrollbar)

A hyper plugin that fades the scrollbar when not in use, made to fit well into MacOS.

WARNING: Hacky fork - created for my purpose, needs additional work.

## Installation

```sh
hyper i mitti-fading-scrollbar
```

_You may want to make sure that your color theme package comes first in the `config.plugins` array in `.hyper.js`, so that the right color is applied to the scrollbar (it is inherited from the `borderColor` setting by default)._

## Options

You can customize the scrollbar color by using the `scrollbarColor` and `scrollbarOpacity` settings in your `.hyper.js` config:

```js
module.exports = {
  config: {
    // ...

    scrollbarColor: 'tomato', // any valid css color
    scrollbarOpacity: 0.1, // value between 0 and 1
  }
}
```
