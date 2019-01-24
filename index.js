const animation = require('chalk-animation')
const logUpdate = require('log-update')
const figlet = require('figlet')

const rainbow = animation.rainbow('Hello Technologieplauscherl!').stop()

const winner = figlet.textSync(parseInt(Math.random()*50).toString())

const frames = [
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❓`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           ❗️`,
  `                                           🦇`,
`                                           🦇`,
`                                          🦇`,
`                                         🦇`,
`                                        🦇`,
`                                       🦇`,
`                                      🦇`,
`                                     🦇`,
`                                    🦇`,
`                                   🦇`,
`                                  🦇`,
`                                 🦇`,
`                                🦇`,
`                               🦇`,
`                              🦇`,
`                             🦇`,
`                            🦇`,
`                           🦇`,
`                          🦇`,
`                         🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`                        🦇`,
`💣                      🦇`,
` 💣                     🦇`,
`  💣                    🦇`,
`   💣                   🦇`,
`    💣                  🦇`,
`     💣                 🦇`,
`      💣                🦇`,
`       💣               🦇`,
`        💣              🦇`,
`         💣             🦇`,
`          💣            🦇`,
`           💣           🦇`,
`            💣          🦇`,
`             💣         🦇`,
`              💣        🦇`,
`               💣       🦇`,
`                💣      🦇`,
`                 💣     🦇`,
`                  💣    🦇`,
`                   💣   🦇`,
`                    💣  🦇`,
`                     💣 🦇`,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
`                        💥 `,
]

let i = 0

function draw() {
  if(i === frames.length) {
    drawSecond()
    return
  }
  const frame = frames[i++]

  logUpdate(`
${rainbow.frame()}
 
 
 
${frame}
  
  `)
  setTimeout(draw, 80)
}

setTimeout(draw, 80)

function drawSecond() {
  animation.neon(`${winner}`)
}
