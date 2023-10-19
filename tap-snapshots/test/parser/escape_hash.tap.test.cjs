/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP escape_hash.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "pass",
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

exports[`test/parser.js TAP escape_hash.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "pass",
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
