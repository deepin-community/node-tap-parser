/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP offset-mismatch.tap bail > parsed 1`] = `
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
      "id": 8,
      "name": "should be equal",
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
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "id": 10,
      "name": "should be equal",
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
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 8,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 9,
          "name": "should be equivalent",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 10,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 11,
          "name": "(unnamed assert)",
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

exports[`test/parser-stringify.js TAP offset-mismatch.tap bail > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap bail > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap default settings > parsed 1`] = `
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
      "id": 8,
      "name": "should be equal",
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
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "id": 10,
      "name": "should be equal",
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
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 8,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 9,
          "name": "should be equivalent",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 10,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 11,
          "name": "(unnamed assert)",
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

exports[`test/parser-stringify.js TAP offset-mismatch.tap default settings > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap default settings > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap strict > parsed 1`] = `
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
      "id": 8,
      "name": "should be equal",
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
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "id": 10,
      "name": "should be equal",
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
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 8,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 9,
          "name": "should be equivalent",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 10,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 11,
          "name": "(unnamed assert)",
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

exports[`test/parser-stringify.js TAP offset-mismatch.tap strict > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap strict > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap strictBail > parsed 1`] = `
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
      "id": 8,
      "name": "should be equal",
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
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
      "id": 10,
      "name": "should be equal",
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
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
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
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 8,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 9,
          "name": "should be equivalent",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 10,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 11,
          "name": "(unnamed assert)",
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

exports[`test/parser-stringify.js TAP offset-mismatch.tap strictBail > stringified 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`

exports[`test/parser-stringify.js TAP offset-mismatch.tap strictBail > stringified flat 1`] = `
TAP version 13
# beep
ok 8 - should be equal
ok 9 - should be equivalent
# boop
ok 10 - should be equal
ok 11 - (unnamed assert)
1..4
# tests 4
# pass  4
# ok
# failed 4 of 4 tests

`
