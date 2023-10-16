/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP unfinished.tap bail > parsed 1`] = `
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
    "comment",
    "# test count(2) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
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

exports[`test/parser-stringify.js TAP unfinished.tap bail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap bail > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap default settings > parsed 1`] = `
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
    "comment",
    "# test count(2) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
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

exports[`test/parser-stringify.js TAP unfinished.tap default settings > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap default settings > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap strict > parsed 1`] = `
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
    "comment",
    "# test count(2) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
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

exports[`test/parser-stringify.js TAP unfinished.tap strict > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap strict > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap strictBail > parsed 1`] = `
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
    "comment",
    "# test count(2) != plan(5)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 2,
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

exports[`test/parser-stringify.js TAP unfinished.tap strictBail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP unfinished.tap strictBail > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
# test count(2) != plan(5)
# failed 1 of 2 tests

`
