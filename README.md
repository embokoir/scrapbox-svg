# About

- This generates a thumbnail image for [Scrapbox](https://scrapbox.io)
- Made with SVG, Node, Express, Glitch

# How to use

## Base url

- https://scrapbox-svg.glitch.me/thumbnail

## Parameters

- `text` : like "Scrapbox with SVG" (required. default: "no text". See also Attention)
- `dark`: 1 →you get dark thumbnail (optional. default: 0)
- `height`(optional. default: "normal"):
  - "normal" →228px
  - "lower" →188px
  - "lowest" →148px

[![Image from Gyazo](https://i.gyazo.com/f1543c0b5a3572f14fe347f3cba0e957.png)](https://gyazo.com/f1543c0b5a3572f14fe347f3cba0e957)

## Attention

- You need append `.svg` at the end of url.
- Text (especially Symbol) must be encoded. See [https://tech-unlimited.com/urlencode.html](https://tech-unlimited.com/urlencode.html)
- Width is always 288px.

## Example

```
[https://scrapbox-svg.glitch.me/thumbnail?dark=1&height=normal&text=Scrapbox%20with%20SVG.svg]
```
[![Image from Gyazo](https://i.gyazo.com/ec3c42bbcaefc7114575c2097331347a.png)](https://gyazo.com/ec3c42bbcaefc7114575c2097331347a)
