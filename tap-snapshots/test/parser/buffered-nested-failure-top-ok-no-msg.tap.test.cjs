/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=false 1`] = `
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
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "ok": false,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
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
            Result {
              "fullname": "my kids are fine",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
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
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
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
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
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

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=true 1`] = `
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
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
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
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out!\\n",
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
              "fullname": "my kids are fine",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
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
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
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
