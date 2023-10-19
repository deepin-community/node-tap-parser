/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP big-last.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP big-last.tap bail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap bail > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP big-last.tap default settings > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap default settings > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP big-last.tap strict > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap strict > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser-stringify.js TAP big-last.tap strictBail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser-stringify.js TAP big-last.tap strictBail > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`
