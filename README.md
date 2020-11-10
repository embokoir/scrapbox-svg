# About

- An application to generate dynamically a thumbnail image for [Scrapbox](https://scrapbox.io)
- Made with SVG, Node, Express, Glitch

[![Image from Gyazo](https://i.gyazo.com/37fc3eed2db5ec75a942b1a6af34c431.png)](https://gyazo.com/37fc3eed2db5ec75a942b1a6af34c431)

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

## Appendix

- An UserScript on Scrapbox might be useful for this application.
- About UserScript, see https://scrapbox.io/help-jp/UserScript , etc.

```javascript
// script.js
scrapbox.PageMenu.addItem({
  title: 'Get SVG Thumbnail',
  image: 'https://scrapbox.io/assets/landing/img/logo.png',
  onClick: () => {
  	const t = scrapbox.Page.title
   	const height = t.length <= 10 ? 'normal' : t.length <= 20 ? 'lower' : 'lowest'
   	prompt('Copy', `[https://scrapbox-svg.glitch.me/thumbnail?dark=0&height=normal&text=${encodeURIComponent(t)}#.svg]`)
  }
})
```

[![Image from Gyazo](https://i.gyazo.com/a32ed4f5de8881dda613ac61f562c41e.gif)](https://gyazo.com/a32ed4f5de8881dda613ac61f562c41e)
