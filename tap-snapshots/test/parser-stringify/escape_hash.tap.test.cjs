/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP escape_hash.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP escape_hash.tap bail > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap bail > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP escape_hash.tap default settings > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap default settings > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP escape_hash.tap strict > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap strict > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP escape_hash.tap strictBail > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser-stringify.js TAP escape_hash.tap strictBail > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`
