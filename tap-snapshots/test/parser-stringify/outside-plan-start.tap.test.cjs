/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP outside-plan-start.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 2,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 2,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 2,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 2,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP outside-plan-start.tap bail > stringified 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap bail > stringified flat 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 2,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 2,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 2,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 2,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP outside-plan-start.tap default settings > stringified 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap default settings > stringified flat 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 2,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 2,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 2,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 2,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP outside-plan-start.tap strict > stringified 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap strict > stringified flat 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 2,
      },
      "tapError": "id less than plan start",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 2,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 2,
          },
          "tapError": "id less than plan start",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 2,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP outside-plan-start.tap strictBail > stringified 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-start.tap strictBail > stringified flat 1`] = `
TAP version 13
ok 1
ok
ok 5
ok
2..5
# test count(4) != plan(5)
# failed 1 of 4 tests

`
