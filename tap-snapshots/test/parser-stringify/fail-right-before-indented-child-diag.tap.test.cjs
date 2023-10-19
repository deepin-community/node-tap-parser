/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap bail > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
Bail out!

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap bail > stringified flat 1`] = `
TAP version 13
not ok
  ...
  some: diags
Bail out!

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
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
          "fullname": "maybe a child",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "ok": false,
        },
        Object {
          "tapError": "no plan",
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

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap default settings > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok
ok - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap default settings > stringified flat 1`] = `
TAP version 13
not ok
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok
ok - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
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
          "fullname": "maybe a child",
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
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  some: diags\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "ok": false,
        },
        Object {
          "data": "  ---\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "tapError": "no plan",
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

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap strict > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok
ok - maybe a child
# test count(2) != plan(null)
# failed 5 of 2 tests

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap strict > stringified flat 1`] = `
TAP version 13
not ok
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok
ok - maybe a child
# test count(2) != plan(null)
# failed 5 of 2 tests

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  some: diags\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap strictBail > stringified 1`] = `
TAP version 13
not ok
  ...
  some: diags
Bail out!

`

exports[`test/parser-stringify.js TAP fail-right-before-indented-child-diag.tap strictBail > stringified flat 1`] = `
TAP version 13
not ok
  ...
  some: diags
Bail out!

`
