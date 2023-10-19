/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP subtest-mixing.tap > output bail=false 1`] = `
Array [
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
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "line",
    "ok 1 - x1 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
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
              "fullname": "x1 y",
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "x1",
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
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x1 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x1 y",
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
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "x1",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - x2 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
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
              "fullname": "x2 y",
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
          "fullname": "x2",
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
      "fullname": "x2 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x2 y",
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "x2",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 - x3 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
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
              "fullname": "x3 y",
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
          "fullname": "x3",
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
      "fullname": "x3 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x3 y",
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 3,
      "name": "x3",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x4\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
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
              "fullname": "x4 y",
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "x4",
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
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x4 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x4 y",
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
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 4 - x4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "x4",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x5\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
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
              "fullname": "x5 y",
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
          "fullname": "x5",
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
      "fullname": "x5 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x5 y",
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
    "ok 5 - x5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "x5",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x6\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
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
              "fullname": "x6 y",
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
          "fullname": "x6",
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
      "fullname": "x6 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x6 y",
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
    "ok 6 - x6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "x6",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x7\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
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
              "fullname": "x7 y",
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "x7",
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
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x7 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x7 y",
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
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 7 - x7\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "x7",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x8\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
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
              "fullname": "x8 y",
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
          "fullname": "x8",
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
      "fullname": "x8 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x8 y",
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
    "ok 8 - x8\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "x8",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x9\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
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
              "fullname": "x9 y",
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
          "fullname": "x9",
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
      "fullname": "x9 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x9 y",
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
    "ok 9 - x9\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "x9",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
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

exports[`test/parser.js TAP subtest-mixing.tap > output bail=true 1`] = `
Array [
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
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "comment",
    "# All of these should be semantically equivalent\\n",
  ],
  Array [
    "line",
    "ok 1 - x1 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x1\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
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
              "fullname": "x1 y",
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "x1",
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
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x1 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x1 y",
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
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "x1",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - x2 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x2\\n",
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
              "fullname": "x2 y",
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
          "fullname": "x2",
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
      "fullname": "x2 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x2 y",
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 2,
      "name": "x2",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 - x3 {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x3\\n",
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
              "fullname": "x3 y",
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
          "fullname": "x3",
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
      "fullname": "x3 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x3 y",
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
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 3,
      "name": "x3",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x4\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x4\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
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
              "fullname": "x4 y",
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "x4",
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
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x4 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x4 y",
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
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 4 - x4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "x4",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x5\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x5\\n",
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
              "fullname": "x5 y",
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
          "fullname": "x5",
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
      "fullname": "x5 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x5 y",
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
    "ok 5 - x5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "x5",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x6\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x6\\n",
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
              "fullname": "x6 y",
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
          "fullname": "x6",
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
      "fullname": "x6 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x6 y",
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
    "ok 6 - x6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "x6",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x7\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x7\\n",
      ],
      Array [
        "line",
        "ok 1 - y {\\n",
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
              "fullname": "x7 y",
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
        "}\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": true,
          "fullname": "x7",
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
    "    ok 1 - y {\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "x7 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x7 y",
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
    "    }\\n",
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 7 - x7\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "x7",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x8\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x8\\n",
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
              "fullname": "x8 y",
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
          "fullname": "x8",
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
      "fullname": "x8 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x8 y",
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
    "ok 8 - x8\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "x8",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# Subtest: x9\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: x9\\n",
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
              "fullname": "x9 y",
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
          "fullname": "x9",
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
      "fullname": "x9 y",
      "id": 1,
      "name": "ypoint",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "x9 y",
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
    "ok 9 - x9\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "x9",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
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
