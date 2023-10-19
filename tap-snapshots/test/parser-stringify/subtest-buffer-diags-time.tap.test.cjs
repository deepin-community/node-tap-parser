/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "third",
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 43.21,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "",
      "id": 3,
      "name": "third",
      "ok": true,
      "time": 43.21,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
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

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap bail > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap bail > stringified flat 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "third",
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 43.21,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "",
      "id": 3,
      "name": "third",
      "ok": true,
      "time": 43.21,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
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

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap default settings > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap default settings > stringified flat 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "third",
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 43.21,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "",
      "id": 3,
      "name": "third",
      "ok": true,
      "time": 43.21,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
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

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap strict > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap strict > stringified flat 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "name": "x",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 12.34,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 12.34,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: third\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "third",
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
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
          "time": 43.21,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostic",
      },
      "fullname": "",
      "id": 3,
      "name": "third",
      "ok": true,
      "time": 43.21,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
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

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap strictBail > stringified 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`

exports[`test/parser-stringify.js TAP subtest-buffer-diags-time.tap strictBail > stringified flat 1`] = `
1..3
# Subtest: first
    ok - x
    1..1
ok 1 - first # time=12.34ms
# Subtest: second
    ok - x
    1..1
ok 2 - second # time=12.34ms
# Subtest: third
    ok - y
    1..1
ok 3 - third # time=43.21ms
  ---
  some: diagnostic
  ...

`
