var Parser = require('../')
var etoa = require('events-to-array')

var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener' ]
var glob = require('glob')
const t = require('tap')
var path = require('path')
var fs = require('fs')

t.jobs = 8
const tapFiles = fs.readdirSync(__dirname + '/fixtures')
  .filter(f => /\.tap$/.test(f))

for (const tapFile of tapFiles) {
  const f = `${__dirname}/fixtures/${tapFile}`
  t.test(tapFile, async t => {
    t.snapshotFile = path.resolve(__dirname, '..', `tap-snapshots/test/parser-stringify/${tapFile}.test.cjs`)
    t.plan(4)
    const tapContent = await fs.promises.readFile(f, 'utf8')
    t.test('default settings', t => {
      const res = Parser.parse(tapContent)
      t.matchSnapshot(res, 'parsed')
      const str = Parser.stringify(res)
      t.matchSnapshot(str, 'stringified')
      const flat = Parser.stringify(res, { flat: true })
      t.matchSnapshot(str, 'stringified flat')
      t.end()
    })
    for (const [name, opt] of Object.entries({
      bail: { bail: true },
      strict: { strict: true },
      strictBail: { strict: true, bail: true },
    })) {
      t.test(name, t => {
        const res = Parser.parse(tapContent, opt)
        t.matchSnapshot(res, 'parsed')
        const str = Parser.stringify(res)
        t.matchSnapshot(str, 'stringified')
        const flat = Parser.stringify(res, { flat: true })
        t.matchSnapshot(str, 'stringified flat')
        t.end()
      })
    }
  })
}
