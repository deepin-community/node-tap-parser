/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP yamlish-without-test.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "line",
    "  this: is yaml\\n",
  ],
  Array [
    "extra",
    "  this: is yaml\\n",
  ],
  Array [
    "line",
    "  but: no test here\\n",
  ],
  Array [
    "extra",
    "  but: no test here\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "ok - this is fine\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parser.js TAP yamlish-without-test.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "line",
    "  this: is yaml\\n",
  ],
  Array [
    "extra",
    "  this: is yaml\\n",
  ],
  Array [
    "line",
    "  but: no test here\\n",
  ],
  Array [
    "extra",
    "  but: no test here\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "ok - this is fine\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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
