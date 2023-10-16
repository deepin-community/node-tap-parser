/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP bignum.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
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
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
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
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP bignum.tap bail > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap bail > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
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
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
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
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP bignum.tap default settings > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap default settings > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
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
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
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
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP bignum.tap strict > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap strict > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
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
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
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
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser-stringify.js TAP bignum.tap strictBail > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser-stringify.js TAP bignum.tap strictBail > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`
