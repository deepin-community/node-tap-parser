/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP offset-mismatch.tap > output bail=false 1`] = `
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
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 8,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 9,
          "name": "should be equivalent",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 10,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 11,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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

exports[`test/parser.js TAP offset-mismatch.tap > output bail=true 1`] = `
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
    "# beep\\n",
  ],
  Array [
    "comment",
    "# beep\\n",
  ],
  Array [
    "line",
    "ok 8 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 9 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 9,
      "name": "should be equivalent",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# boop\\n",
  ],
  Array [
    "comment",
    "# boop\\n",
  ],
  Array [
    "line",
    "ok 10 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 10,
      "name": "should be equal",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 11 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 11,
      "name": "(unnamed assert)",
      "ok": true,
      "plan": Object {
        "end": 4,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "line",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 8,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 9,
          "name": "should be equivalent",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 10,
          "name": "should be equal",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 11,
          "name": "(unnamed assert)",
          "ok": true,
          "plan": Object {
            "end": 4,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
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
