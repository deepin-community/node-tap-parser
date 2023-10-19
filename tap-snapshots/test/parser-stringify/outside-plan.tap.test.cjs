/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP outside-plan.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
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
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
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

exports[`test/parser-stringify.js TAP outside-plan.tap bail > stringified 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap bail > stringified flat 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
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
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
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

exports[`test/parser-stringify.js TAP outside-plan.tap default settings > stringified 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap default settings > stringified flat 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
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
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
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

exports[`test/parser-stringify.js TAP outside-plan.tap strict > stringified 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap strict > stringified flat 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
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
      "id": 234,
      "name": "pretty big",
      "ok": true,
      "plan": Object {
        "end": 3,
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
      "name": "less big",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 2 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 234,
          "name": "pretty big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 5,
          "name": "less big",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
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

exports[`test/parser-stringify.js TAP outside-plan.tap strictBail > stringified 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`

exports[`test/parser-stringify.js TAP outside-plan.tap strictBail > stringified flat 1`] = `
TAP version 13
1..3
ok 234 - pretty big
ok 5 - less big
ok 3 - three
# failed 2 of 3 tests

`
