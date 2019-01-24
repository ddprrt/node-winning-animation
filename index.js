const animation = require('chalk-animation')
const logUpdate = require('log-update')
const figlet = require('figlet')
const player = require('play-sound')()

const number = parseInt(process.argv.pop()) || 50

const rainbow = animation.rainbow('Hello Technologieplauscherl!').stop()

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

function render(rainbow, frame) {
  logUpdate(`
${rainbow.frame()}
 
 
 
${frame}
  
  `)
}

function draw(i, audio) {
  if(i === frames.length) {
    drawWinner(animation)
    return
  }

  if(i === 16) {
    audio = player.play('melody.mp3')
  }

  if(i === 120) {
    audio.kill();
    player.play('explosion.mp3')
  }

  const frame = frames[i++]
  render(rainbow, frame)

  setTimeout(() => draw(i, audio), 80)
}

function drawWinner(animation) {
  const winner = figlet.textSync(parseInt(Math.random()*number + 1).toString())
  let winnerAnim = animation.neon(`${winner}`)
  setTimeout(winnerAnim.stop, 5000)
}

setTimeout(() => draw(0, null), 80)
