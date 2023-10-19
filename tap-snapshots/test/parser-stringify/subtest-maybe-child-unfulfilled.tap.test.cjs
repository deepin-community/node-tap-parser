/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "not a subtest",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x y",
              "id": 1,
              "name": "ypoint",
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
              "time": null,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 2,
          "name": "y",
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
      "id": 1,
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap bail > stringified 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap bail > stringified flat 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "not a subtest",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x y",
              "id": 1,
              "name": "ypoint",
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
              "time": null,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 2,
          "name": "y",
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
      "id": 1,
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap default settings > stringified 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap default settings > stringified flat 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "not a subtest",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x y",
              "id": 1,
              "name": "ypoint",
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
              "time": null,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 2,
          "name": "y",
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
      "id": 1,
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap strict > stringified 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap strict > stringified flat 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# just a comment\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "comment",
        "# Subtest: fake\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "not a subtest",
          "ok": true,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "x y",
              "id": 1,
              "name": "ypoint",
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
              "time": null,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 2,
          "name": "y",
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
      "id": 1,
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
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap strictBail > stringified 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`

exports[`test/parser-stringify.js TAP subtest-maybe-child-unfulfilled.tap strictBail > stringified flat 1`] = `
TAP version 13
# just a comment
# Subtest: x
    # Subtest: fake
    ok 1 - not a subtest
    # Subtest: y
        ok 1 - ypoint
        1..1
    ok 2 - y
    1..2
ok 1 - x
1..1

`
