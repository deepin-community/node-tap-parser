/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=false 1`] = `
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
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
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
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "name": "i got better",
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
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "please sir, my son, he is sick",
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "please sir, my son, he is sick",
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
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
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
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
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=true 1`] = `
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
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
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
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "name": "i got better",
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
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "please sir, my son, he is sick",
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "please sir, my son, he is sick",
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
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
]
`
