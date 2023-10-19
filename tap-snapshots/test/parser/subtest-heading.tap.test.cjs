/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP subtest-heading.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
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
            "line",
            "1..1\\n",
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
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
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
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
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
    "line",
    "1..1\\n",
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

exports[`test/parser.js TAP subtest-heading.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "comment",
    "# Subtest: heading.js\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: x\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x\\n",
      ],
      Array [
        "line",
        "# Subtest: y\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
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
            "line",
            "1..1\\n",
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
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "x",
          "id": 1,
          "name": "y",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
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
    "line",
    "    # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 1 - x\\n",
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
    "line",
    "1..1\\n",
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
