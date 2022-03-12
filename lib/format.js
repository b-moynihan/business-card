const { EOL } = require('os')
const { think } = require('cowsay')

// Generate thought for cow
const thought = ({
  name, 
  handle,
  work,
  github,
  linkedin,
  web,
  npx,
  cow,
  rand }) => think({
    text: 
    `${name}
    ${handle}${EOL}
    ${work}
    ${github}
    ${linkedin}
    ${web}
    ${npx}`,
    r: rand,
    f: cow
  })

// Randomise cow if flag present, otherwise use default
module.exports = ({ data, cow, rand }) => rand
? `${thought(Object.assign({ cow }, data, { rand }))}`
: `${thought(Object.assign({ cow }, data))}`