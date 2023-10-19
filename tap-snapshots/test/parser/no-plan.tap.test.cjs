/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP no-plan.tap > output bail=false 1`] = `
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
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
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

exports[`test/parser.js TAP no-plan.tap > output bail=true 1`] = `
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
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok 1 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 should be equivalent\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok 3 should be equal\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should be equal",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 (unnamed assert)\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "(unnamed assert)",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
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
