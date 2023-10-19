/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP giving-up.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
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

exports[`test/parser.js TAP giving-up.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
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
