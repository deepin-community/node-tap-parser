/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP outside-plan-end-many.tap bail > parsed 1`] = `
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
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 420,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap bail > stringified 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap bail > stringified flat 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap default settings > parsed 1`] = `
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
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 420,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap default settings > stringified 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap default settings > stringified flat 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap strict > parsed 1`] = `
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
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 420,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap strict > stringified 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap strict > stringified flat 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap strictBail > parsed 1`] = `
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
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 420,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 420,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap strictBail > stringified 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP outside-plan-end-many.tap strictBail > stringified flat 1`] = `
TAP version 13
ok 1
ok 420
ok 5
ok
1..4
# failed 2 of 4 tests

`
