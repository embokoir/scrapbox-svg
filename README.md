# About

- An application to generate a thumbnail image for [Scrapbox](https://scrapbox.io)
- Made with SVG, Node, Express, Glitch

# How to use

## Basic url

- https://scrapbox-svg.glitch.me/thumbnail?text=Scrapbox%20SVG

## Parameters

- `text` : like "Enjoy Scrapbox with SVG thumbnail" (required. default: "no text". See also Attention)
- `dark`: 1 then you get a dark thumbnail (optional. default: 0)
- `height`(optional. default: "normal"):
  - "normal" →228px
  - "lower" →188px
  - "lowest" →148px

[![Image from Gyazo](https://i.gyazo.com/a221a03c70b29d2b20d50c9895f92e11.png)](https://gyazo.com/a221a03c70b29d2b20d50c9895f92e11)

## Attention

- You need append `#.svg` at the end of url.
- Text (especially Symbol) must be encoded. See [https://tech-unlimited.com/urlencode.html](https://tech-unlimited.com/urlencode.html)
- Width is always 288px.

## Example

```
[https://scrapbox-svg.glitch.me/thumbnail?dark=1&height=normal&text=Enjoy%20Scrapbox%20with%20SVG%20thumbnail%21#.svg]
```
[![Image from Gyazo](https://i.gyazo.com/c1b2da0b490a6480975ffda6ed14e1dd.png)](https://gyazo.com/c1b2da0b490a6480975ffda6ed14e1dd)