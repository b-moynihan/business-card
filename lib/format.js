const { EOL } = require('os')
const omit = require('lodash.omit')
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
    f: cow,
    r: rand
  })

// Randomise cow if flag present, otherwise use default
module.exports = ({ data, cow, rand }) => rand
? `${thought(Object.assign({ cow }, data, { rand }))} ${data}`
: `${thought(Object.assign({ cow }, data))} ${data}`