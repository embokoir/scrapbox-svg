const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 8888

// tutorial
app.get('/', async (req, res) => {
  console.log('GET /')
  const tutorialText = [
    'How to use',
    '# Base URL: https://scrapbox-svg.glitch.me/thumbnail',
    '# Parameters',
    '- text: like "Scrapbox with SVG" (required. default: "no text")',
    '- dark: "1" →you get dark thumbnail (optional. default: 0)',
    '- height: "normal" →228px, "lower" →188px, "lowest" →148px (optional. default: normal)',
    '# Attention',
    '- You need append "#.png" at the end of url.',
    '- Text (especially Symbol) must be encoded, see https://tech-unlimited.com/urlencode.html',
    '# Example',
    '- [https://scrapbox-svg.glitch.me/thumbnail?dark=1&height=normal&text=Scrapbox%20with%20SVG#.png]'
  ].join('<br>')
  res.send(tutorialText)
})

app.get('/thumbnail', async(req, res) => {
  // debug
  console.log(Object.keys(req.query).map(key=>`${key}:${req.query[key]}`).join('/'))

  // parameters
  const text = req.query.text
  const fontSize = text.length <= 10 ? 40 : text.length <= 20 ? 30 : 25
  const height = req.query.height === 'lower' ? 188 : req.query.height === 'lowest' ? 148 : 228
  const isDark = Number(req.query.dark)
  const backgroundColor = isDark === 1 ? '#22272e' : '#ebebeb'
  const fontColor = isDark === 1 ? '#fff' : '#262626'

  // xml
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 ${height}">`,
    `<rect x="0" y="0" width="288" height="${height}" fill="${backgroundColor}"></rect>`,
    `<foreignObject requiredFeatures="http://www.w3.org/1999/xhtml" width="288" height="${height}">`,
    `<div xmlns="http://www.w3.org/1999/xhtml" style="color: ${fontColor}; font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif; height: ${height}px; display:table; text-align:center;">`,
    `<p style="width: 288px; font-size: ${fontSize}px; padding: 10px 20px 20px 20px; display: table-cell; vertical-align: middle;">`,
    `<span style="border-bottom: solid 5px #5CD8A4; text-align: center;">${text}</span>`,
    `</p>`,
    `</div>`,
    `</foreignObject>`,
    '</svg>'
  ].join('')

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(svg)
})

app.listen(PORT)
console.log(`Lisntening on PORT ${PORT}...`)
