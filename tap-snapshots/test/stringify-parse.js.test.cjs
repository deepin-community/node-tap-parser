/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/stringify-parse.js TAP just parse some tap > basic 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "name": "foo",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
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
        Result {
          "fullname": "",
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/stringify-parse.js TAP just parse some tap > flattened 1`] = `
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
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child > foo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "pragma",
    "strict",
    false,
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/stringify-parse.js TAP stringify flattened result > basic 1`] = `
TAP version 13
not ok 1 - 1
ok 2 - child > foo
ok 3 - child
# failed 1 of 2 tests
1..3

`

exports[`test/stringify-parse.js TAP stringify flattened result > flattened 1`] = `
TAP version 13
not ok 1 - 1
ok 2 - child > foo
ok 3 - child
# failed 1 of 2 tests
1..3

`

exports[`test/stringify-parse.js TAP stringify nested result > basic 1`] = `
TAP version 13
not ok - 1
pragma +strict
# Subtest: child
    ok - foo
    pragma +strict
    ok
    pragma -strict
    1..2
ok 2 - child
pragma -strict
1..2
# failed 1 of 2 tests

`

exports[`test/stringify-parse.js TAP stringify nested result > flattened 1`] = `
TAP version 13
not ok 1 - 1
pragma +strict
# Subtest: child
ok 2 - child > foo
pragma +strict
ok 3 - child
pragma -strict
ok 4 - child
pragma -strict
1..4
# failed 1 of 2 tests

`

exports[`test/stringify-parse.js TAP stringify with bailout > basic 1`] = `
TAP version 13
not ok 1 - 1
ok 2 - child > foo
ok 3 - child
Bail out! cannot continue

`

exports[`test/stringify-parse.js TAP stringify with bailout > flattened 1`] = `
TAP version 13
not ok 1 - 1
ok 2 - child > foo
ok 3 - child
Bail out! cannot continue

`
