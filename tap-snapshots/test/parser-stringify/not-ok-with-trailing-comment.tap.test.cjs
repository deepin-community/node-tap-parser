/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap bail > parsed 1`] = `
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
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap bail > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
Bail out! should be equivalent

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap bail > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
Bail out! should be equivalent

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap default settings > parsed 1`] = `
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
      "ok": false,
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
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# fail  1\\n",
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
          "id": 2,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
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

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap default settings > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  3
# fail  1
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap default settings > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  3
# fail  1
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap strict > parsed 1`] = `
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
      "ok": false,
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
    "# pass  3\\n",
  ],
  Array [
    "comment",
    "# fail  1\\n",
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
          "id": 2,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
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

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap strict > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  3
# fail  1
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap strict > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
ok 3 - should be equal
ok 4 - (unnamed assert)
1..4
# tests 4
# pass  3
# fail  1
# failed 1 of 4 tests

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap strictBail > parsed 1`] = `
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
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap strictBail > stringified 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
Bail out! should be equivalent

`

exports[`test/parser-stringify.js TAP not-ok-with-trailing-comment.tap strictBail > stringified flat 1`] = `
TAP version 13
# beep
ok 1 - should be equal
not ok 2 - should be equivalent
# boop
Bail out! should be equivalent

`
