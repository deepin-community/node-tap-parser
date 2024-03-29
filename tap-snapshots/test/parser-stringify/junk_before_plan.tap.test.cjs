/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP junk_before_plan.tap bail > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
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

exports[`test/parser-stringify.js TAP junk_before_plan.tap bail > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap bail > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap default settings > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
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

exports[`test/parser-stringify.js TAP junk_before_plan.tap default settings > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap default settings > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap strict > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
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
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "this is junk\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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

exports[`test/parser-stringify.js TAP junk_before_plan.tap strict > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap strict > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap strictBail > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
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
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "this is junk\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
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

exports[`test/parser-stringify.js TAP junk_before_plan.tap strictBail > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser-stringify.js TAP junk_before_plan.tap strictBail > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`
