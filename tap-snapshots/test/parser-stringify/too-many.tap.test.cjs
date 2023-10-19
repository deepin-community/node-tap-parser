/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP too-many.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
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
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP too-many.tap bail > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap bail > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
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
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP too-many.tap default settings > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap default settings > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
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
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP too-many.tap strict > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap strict > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 3,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(3)\\n",
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
          "id": 4,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Object {
            "end": 3,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP too-many.tap strictBail > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP too-many.tap strictBail > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..3
# tests 4
# pass  4
# ok
# test count(4) != plan(3)
# failed 1 of 4 tests

`
