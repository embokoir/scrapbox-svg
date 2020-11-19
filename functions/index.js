const functions = require('firebase-functions')
const express = require('express')

const app = express()

// root
app.get('/', async (req, res) => {
  functions.logger.info('/')
  res.send('Welcome to scrapbox-svg.<br />About: <a href="https://github.com/embokoir/scrapbox-svg" target="_blank">https://github.com/embokoir/scrapbox-svg</a>')
})

// main
app.get('/thumbnail', async(req, res) => {
  functions.logger.info(`/thumbnail, ${req.query.text}`, {...req.query})

  // parameters
  const text = req.query.text || 'no text'
  const fontSize = text.length <= 10 ? 40 : text.length <= 20 ? 30 : 25
  const height = req.query.height === 'lower' ? 188 : req.query.height === 'lowest' ? 148 : 228
  const isDark = Number(req.query.dark)
  const backgroundColor = isDark === 1 ? '#22272e' : '#ebebeb'
  const fontColor = isDark === 1 ? '#fff' : '#262626'

  // xml
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 ${height}">`,

    // Scrapboxの中に置いたSVGでGoogle Fontsが読み込まれないので避難
    // `<style type="text/css">`,
    // `@import url("https://fonts.googleapis.com/css?family=Kosugi Maru");`,
    // `text {font-family: helvetica, arial, "Kosugi Maru", sans-serif ; }`,
    // `</style>`,

    `<rect x="0" y="0" width="288" height="${height}" fill="${backgroundColor}"></rect>`,
    `<foreignObject requiredFeatures="http://www.w3.org/1999/xhtml" width="288" height="${height}">`,
    `<div xmlns="http://www.w3.org/1999/xhtml" style="color: ${fontColor}; font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif; height: ${height}px; display:table; text-align:center;">`,
    `<p style="width: 288px; font-size: ${fontSize}px; padding: 10px 20px 20px 20px; display: table-cell; vertical-align: middle;">`,
    `<text id="text" style="border-bottom: ridge 5px #5CD8A4; text-align: center; line-height: 1.75;">${text}</text>`,
    `</p>`,
    `</div>`,
    `</foreignObject>`,
    '</svg>'
  ].join('')

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(svg)
})

exports.app = functions.https.onRequest(app)
